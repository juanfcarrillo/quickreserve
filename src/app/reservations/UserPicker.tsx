'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Guest } from '@/models/Guest'
import { getGuestByEmail } from '@/services/GuestService'
import { useState } from 'react'

interface UserPickerProps {
    onGuestSelected: (guest: Guest) => void
}

export function UserPicker({ onGuestSelected }: UserPickerProps) {
    const [guest, setGuest] = useState<Guest>()
    const [hasSelected, setHasSelected] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const email = formData.get('email') as string

        const guest = await getGuestByEmail(email)

        setGuest(guest)
    }

    function handleClick() {
        setHasSelected(true)
        onGuestSelected(guest!)
    }

    return (
        <>
            {
                hasSelected
                    ? <div className="text-sm text-muted-foreground">Guest selected: {guest?.name}</div>
                    : (
                        <div className="grid gap-4 py-4">
                            <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                                <Label htmlFor="email">
                                    User email
                                </Label>
                                <Input
                                    placeholder='eg@email.com'
                                    name="email"
                                    id="email"
                                />
                                <Button type="submit">Search</Button>
                            </form>
                            {guest && !hasSelected && <Button onClick={handleClick}>Select {guest?.name}</Button>}
                        </div>
                    )
            }
        </>
    )
}   