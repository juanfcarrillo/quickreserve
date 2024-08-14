import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { CleaningStatus } from '@/models/Cleaning'

export function CleaningBadge({ cleaningStatus }: { cleaningStatus: CleaningStatus }) {

    if (cleaningStatus === CleaningStatus.NotAssigned) {
        return (
            <div className="font-medium">{cleaningStatus}</div>
        )
    }

    if (cleaningStatus === CleaningStatus.Pending) {
        return (
            <div className="flex items-center gap-2 rounded-full bg-yellow-500 px-3 py-1 text-xs font-medium text-white">{cleaningStatus}</div>
        )
    }

    if (cleaningStatus === CleaningStatus.Completed) {
        return (
            <div className="flex items-center gap-2 rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">{cleaningStatus}</div>
        )
    }

    if (cleaningStatus === CleaningStatus.Canceled) {
        return (
            <div className="flex items-center gap-2 rounded-full bg-gray-500 px-3 py-1 text-xs font-medium text-white">{cleaningStatus}</div>
        )
    }
}


export function SelectCleaning({ status, onChange }: { status: CleaningStatus, onChange: (status: CleaningStatus) => void }) {
    return (
        <Select value={status} onValueChange={(value) => onChange(value as CleaningStatus)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a status" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value={CleaningStatus.NotAssigned}><CleaningBadge cleaningStatus={CleaningStatus.NotAssigned} /></SelectItem>
                    <SelectItem value={CleaningStatus.Pending}><CleaningBadge cleaningStatus={CleaningStatus.Pending} /></SelectItem>
                    <SelectItem value={CleaningStatus.Completed}><CleaningBadge cleaningStatus={CleaningStatus.Completed} /></SelectItem>
                    <SelectItem value={CleaningStatus.Canceled}><CleaningBadge cleaningStatus={CleaningStatus.Canceled} /></SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
