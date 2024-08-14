import { Room } from '@/models/Room'
import { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { getRoomByNumber } from '@/services/RoomService'
import { Button } from '../ui/button'

interface RoomPickerProps {
    onRoomSelected: (room: Room) => void
}

export function RoomPicker({ onRoomSelected }: RoomPickerProps) {
    const [room, setRoom] = useState<Room>()
    const [hasSelected, setHasSelected] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const number = formData.get('number') as string

        const room = await getRoomByNumber(number)
        setRoom(room)
    }

    function handleClick() {
        setHasSelected(true)
        onRoomSelected(room!)
    }

    return (
        <>
            {
                hasSelected
                    ? <div className="text-sm text-muted-foreground">Room selected: {room?.name}</div>
                    : (
                        <div className="grid gap-4 py-4">
                            <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                                <Label htmlFor="number">
                                    Room number
                                </Label>
                                <Input
                                    placeholder='eg: 123'
                                    name="number"
                                    id="number"
                                />
                                <Button type="submit">Search</Button>
                            </form>
                            {room && !hasSelected && <Button onClick={handleClick}>Select {room?.name}</Button>}
                        </div>
                    )
            }
        </>
    )
}   