'use client'
import { ReservationModal } from '@/app/reservations/ReservationModal'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Reservation } from '@/models/Reservation'
import { Status } from '@/models/Status'
import { suscribeToReservationService, updateReservationService } from '@/services/ReservationService'
import { useEffect, useState } from 'react'
import { SelectStatus } from './utils/SelectStatus'

export function Reservations() {
  const [reservations, setReservations] = useState<Reservation[]>([])

  useEffect(() => {
    suscribeToReservationService((reservations) => setReservations(reservations))
  }, [])

  async function handleChangeStatus(reservation: Reservation, status: Status) {
    const updatedReservation = Object.assign({}, reservation, { status })

    await updateReservationService(updatedReservation)
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Reservations</h1>
        <ReservationModal />
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Guest</TableHead>
              <TableHead>Room</TableHead>
              <TableHead>Check-in</TableHead>
              <TableHead>Check-out</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              reservations.map((reservation) => (
                <TableRow key={reservation.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>{reservation.guest.name.charAt(0)}</AvatarFallback>
                      </Avatar> 
                      <div>
                        <div className="font-medium">{reservation.guest.name}</div>
                        <div className="text-xs text-muted-foreground">{reservation.guest.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <HomeIcon className="w-5 h-5" />
                      <div>
                        <div className="font-medium">{reservation.room.name}</div>
                        <div className="text-xs text-muted-foreground">{reservation.room.number}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-medium">{reservation.checkIn.toLocaleDateString()}</div>
                    <div className="text-xs text-muted-foreground">{reservation.checkIn.toLocaleTimeString()}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-medium">{reservation.checkOut.toLocaleDateString()}</div>
                    <div className="text-xs text-muted-foreground">{reservation.checkOut.toLocaleTimeString()}</div>
                  </TableCell>
                  <TableCell>
                    <SelectStatus status={reservation.status} onChange={(status) => handleChangeStatus(reservation, status as Status)} />
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <TrashIcon className="w-5 h-5" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

function FilePenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}