'use client'

import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { CalendarInput } from '@/components/utils/Modal/CalendarInput'
import { RoomPicker } from '@/components/utils/RoomPicker'
import { ChangeEvent, useState } from 'react'
import { UserPicker } from './UserPicker'
import { createReservation } from '@/models/Reservation'
import { createReservationService } from '@/services/ReservationService'

export function ReservationModal() {
    const [fields, setFields] = useState<Record<string, any>>({})

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.currentTarget
        if (!fields) return

        setFields({ ...fields, [name]: value })
    }

    async function handleClick() {
        const newReservation = createReservation(fields.guest, new Date(fields.checkIn), new Date(fields.checkOut), fields.room)

        await createReservationService(newReservation)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>New Reservation</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add new reservation</DialogTitle>
                    <DialogDescription>
                        Make changes to your reservation here. Click save when youre done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex gap-4 justify-center">
                        <Label htmlFor="name" className="text-right">
                            Check in
                        </Label>
                        <CalendarInput
                            name="checkIn"
                            placeholder="Check in"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex gap-4 justify-center">
                        <Label htmlFor="username" className="text-right">
                            Check out
                        </Label>
                        <CalendarInput
                            name="checkOut"
                            placeholder="Check out"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex gap-4 justify-center">
                        <RoomPicker onRoomSelected={(room) => setFields({ ...fields, room })} />
                    </div>
                    <div className="flex gap-4 justify-center">
                        <UserPicker onGuestSelected={(guest) => setFields({ ...fields, guest })} />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleClick} type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )

}