
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select'
import { Badge } from '../ui/badge'
import { Status } from '@/models/Status'

export function SelectStatus({ status, onChange }: { status: Status, onChange: (status: string) => void }) {
    return (
        <Select value={status} onValueChange={(value) => onChange(value as Status)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a status" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value={Status.confirmed}><Badge variant='default'>Confirmed</Badge></SelectItem>
                    <SelectItem value={Status.pending}><Badge variant='destructive'>Pending</Badge></SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}