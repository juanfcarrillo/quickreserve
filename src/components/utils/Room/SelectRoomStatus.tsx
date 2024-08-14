
import { Badge } from '@/components/ui/badge'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select'
import { RoomStatus } from '@/models/Room'

export function SelectRoomStatus({ status, onChange }: { status: RoomStatus, onChange: (status: string) => void }) {
    return (
        <Select value={status} onValueChange={(value) => onChange(value as RoomStatus)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a status" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value={RoomStatus.Available}><Badge variant='default'>Available</Badge></SelectItem>
                    <SelectItem value={RoomStatus.Occupied}><Badge variant='destructive'>Occupied</Badge></SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}