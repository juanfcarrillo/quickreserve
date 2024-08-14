'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { createRoom, Room, RoomStatus } from '@/models/Room'
import { createRoomService, suscribeToRoomService, updateRoomService } from '@/services/RoomService'
import { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { createModal, SubmitValues } from './utils/Modal/CreateModal'
import { useModal } from './utils/Modal/useModal'
import { Select } from '@radix-ui/react-select'
import { SelectStatus } from './utils/SelectStatus'
import { SelectRoomStatus } from './utils/Room/SelectRoomStatus'

const RoomModal = createModal({
  schema: [
    {
      name: 'name',
      label: 'Room name',
      placeholder: 'eg: Royal Suite',
      type: 'text'
    },
    {
      name: 'capacity',
      label: 'Capacity',
      placeholder: 'eg: 2',
      type: 'text'
    },
    {
      name: 'price',
      label: 'Price',
      placeholder: 'eg: 100',
      type: 'text'
    },
    {
      name: 'number',
      label: 'Room number',
      placeholder: 'eg: 101',
      type: 'text'
    }
  ]
})

export function Rooms() {
  const { closeModal, openModal, isOpen, toggleModal } = useModal()
  const [rooms, setRooms] = useState<Room[]>([])

  useEffect(() => {
    suscribeToRoomService((rooms) => setRooms(rooms))
  }, [])

  async function handleSubmit(values: SubmitValues<typeof RoomModal.schema>) {
    const newRoom = createRoom(values.fields.name, parseInt(values.fields.capacity), parseInt(values.fields.price), values.fields.number)

    await createRoomService(newRoom)
  }

  async function handleChangeStatus(room: Room, status: RoomStatus) {
    const updatedRoom = Object.assign({}, room, { status })

    await updateRoomService(updatedRoom)
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Rooms</h1>
        <Button
          onClick={openModal}
        >
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Room
        </Button>
        <RoomModal
          title='Add new room'
          subtitle='Make changes to your room here. Click save when youre done.'
          isModalOpen={isOpen}
          onOpenChange={toggleModal}
          onCancel={closeModal}
          onSubmit={handleSubmit}
        />
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Room Number</TableHead>
              <TableHead>Room Type</TableHead>
              <TableHead>Occupancy</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <HomeIcon className="w-5 h-5" />
                    <div>
                      <div className="font-medium">{room.number}</div>
                      <div className="text-xs text-muted-foreground">{room.name}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">{room.name}</div>
                  <div className="text-xs text-muted-foreground">2 guests, 1 bed</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm font-medium">{room.capacity}</div>
                </TableCell>
                <TableCell>
                  <SelectRoomStatus status={room.status} onChange={(status) => handleChangeStatus(room, status as RoomStatus)} />
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
            ))}
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