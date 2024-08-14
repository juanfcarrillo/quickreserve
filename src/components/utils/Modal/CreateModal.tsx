import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ChangeEvent, FormEvent, useState } from 'react'
import { CalendarInput } from './CalendarInput'

type InputType = 'text' | 'textarea' | 'calendar'

type OutputValues = string

export interface InputSchema {
    name: string
    label: string
    placeholder: string
    type: InputType
    required?: boolean
}

interface ReturnFields<Schema extends InputSchema, ObjectType = {}> {
    fields: {
        [key in Extract<Schema, { name: InputSchema['name'] }>['name']]:
        OutputValues
    }
    isEditing?: boolean
    originalElement?: ObjectType
}

export type SubmitValues<T extends InputSchema[], ObjectType = {}> = ReturnFields<T[number], ObjectType>

interface ModalProps<Schema extends InputSchema, ObjectType> {
    title: string
    subtitle?: string
    buttonText?: string
    isModalOpen: boolean
    elementToModify?: ObjectType
    onSubmit: (fields: SubmitValues<Schema[], ObjectType>) => void
    isEditing?: boolean
    onCancel?: () => void
    onOpenChange?: (open: boolean) => void
}

export function createModal<const Schema extends InputSchema>({ schema }: { schema: Schema[] }) {
    function Modal<ObjectType>
        ({
            title,
            subtitle,
            elementToModify,
            isModalOpen,
            onSubmit,
            isEditing,
            onOpenChange,
            onCancel,
            buttonText
        }: ModalProps<Schema, ObjectType>) {
        const [fields, setFields] = useState<Record<Schema['name'], OutputValues>>({} as Record<Schema['name'], OutputValues>)

        function handleSubmit(e: FormEvent<HTMLFormElement>) {
            e.preventDefault()

            onSubmit({ fields, isEditing, originalElement: elementToModify })

            onOpenChange?.(false)
        }

        function handleChange(e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
            const { name, value } = e.currentTarget
            if (!fields) return

            setFields({ ...fields, [name]: value })
        }

        return (
            <Dialog open={isModalOpen} onOpenChange={(open: boolean) => onOpenChange?.(open)}>
                <DialogContent className="sm:max-w-md">
                    <form onSubmit={handleSubmit} className="grid gap-4 w-full">
                        <DialogHeader>
                            <DialogTitle>{title}</DialogTitle>
                            {subtitle && <DialogDescription>{subtitle}</DialogDescription>}
                        </DialogHeader>
                        {
                            schema.map((({ name, label, placeholder, type }) => (
                                <div key={name} className="grid gap-2">
                                    <Label htmlFor="name">{label}</Label>
                                    <InputType
                                        name={name}
                                        placeholder={placeholder}
                                        type={type}
                                        onChange={handleChange}
                                    />
                                </div>
                            )))
                        }
                        <DialogFooter>
                            <Button type="submit">{buttonText || 'Save'}</Button>
                            <Button onClick={onCancel} variant="outline">Cancel</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        )
    }

    Modal.schema = schema

    return Modal
}


export interface InputTypeProps extends Omit<InputSchema, 'label'> {
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}


function InputType({ name, placeholder, type, onChange, required }: InputTypeProps) {
    if (type === 'calendar') {
        return (
            <CalendarInput
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
            />
        )
    }

    if (type === 'textarea') {
        return (
            <Textarea
                placeholder={placeholder}
                name={name}
                id={name}
                onChange={onChange}
                required={required}
            />
        )
    }

    return (
        <Input
            placeholder={placeholder}
            name={name}
            id={name}
            onChange={onChange}
            required={required}
        />
    )
}