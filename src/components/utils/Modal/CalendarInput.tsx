import { Input } from '@/components/ui/input'
import { ChangeEvent, useState } from 'react'
import { InputTypeProps } from './CreateModal'
import { Button } from '@/components/ui/button'


export function CalendarInput({ name, placeholder, onChange, required }: Omit<InputTypeProps, 'type'>) {
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState<string>()

    function handleSelect(date: ChangeEvent<HTMLInputElement>) {
        setOpen(false)
        setDate(date.target.value)

        onChange(date)
    }

    return (
        <div>
            <Input className='w-full' type="date" name={name} onChange={handleSelect} required={required} />
        </div>
    )
}