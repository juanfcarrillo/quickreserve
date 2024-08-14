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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CalendarInput } from '@/components/utils/Modal/CalendarInput'
import { RoomPicker } from '@/components/utils/RoomPicker'
import { createCleaning } from '@/models/Cleaning'
import { createCleaningService } from '@/services/CleaningService'
import { ChangeEvent, useState } from 'react'

export function CleaningModal() {
    const [fields, setFields] = useState<Record<string, any>>({})

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.currentTarget
        if (!fields) return

        setFields({ ...fields, [name]: value })
    }

    async function handleClick() {
        const newReservation = createCleaning(new Date(fields.dueDate), fields.assignedTo, fields.room)

        await createCleaningService(newReservation)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add new cleaning</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add new reservation</DialogTitle>
                    <DialogDescription>
                        Make changes to your reservation here. Click save when youre done.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-8">
                    <div className="flex gap-4 justify-center">
                        <Label htmlFor="assignedTo">
                            Assigned to
                        </Label>
                        <Input
                            name="assignedTo"
                            placeholder="Assigned to"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex gap-4 justify-center">
                        <Label htmlFor="dueDate" className="text-right">
                            Due date
                        </Label>
                        <CalendarInput
                            name="dueDate"
                            placeholder="Due date"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex gap-4 justify-center">
                        <RoomPicker onRoomSelected={(room) => setFields({ ...fields, room })} />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleClick} type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )

}