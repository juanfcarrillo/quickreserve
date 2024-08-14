'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { createModal, SubmitValues } from './utils/Modal/CreateModal'
import { useModal } from './utils/Modal/useModal'
import { createGuest, Guest } from '@/models/Guest'
import { createGuestService, suscribeToGuestService } from '@/services/GuestService'
import { useEffect, useState } from 'react'

const GuestsModal = createModal({
  schema: [
    {
      name: 'name',
      label: 'Name',
      placeholder: 'John Doe',
      type: 'text',
      required: true
    },
    {
      name: 'email',
      label: 'Email',
      placeholder: 'john@example.com',
      type: 'text',
      required: true
    },
    {
      name: 'phone',
      label: 'Phone',
      placeholder: '+1 (555) 555-5555',
      type: 'text',
      required: true
    }
  ]
})

export function Guests() {
  const { isOpen, openModal, closeModal, toggleModal } = useModal()
  const [guests, setGuests] = useState<Guest[]>([])

  useEffect(() => {
    suscribeToGuestService(setGuests)
  }, [])

  async function handleSubmitModal(values: SubmitValues<typeof GuestsModal.schema>){
    const newGuest = createGuest(values.fields.name, values.fields.email, values.fields.phone)

    await createGuestService(newGuest)
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Guests</h1>
        <GuestsModal
          title='Add Guest'
          subtitle='Add a new guest to the system'
          isModalOpen={isOpen}
          onOpenChange={toggleModal}
          onCancel={closeModal}
          onSubmit={handleSubmitModal}
        />
        <Button
          onClick={openModal}
        >
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Guest
        </Button>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {guests.map((guest) => (
              <TableRow key={guest.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8 border">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>{guest.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{guest.name}</div>
                      <div className="text-xs text-muted-foreground">Guest</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">{guest.email}</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm font-medium">{guest.phone}</div>
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
