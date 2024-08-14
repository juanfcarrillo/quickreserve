import { v4 as uuid } from 'uuid'

enum CleaningStatus {
    NotAssigned = 'NotAssigned',
    Pending = 'Pending',
    Completed = 'Completed',
    Canceled = 'Canceled'
}

export interface Cleaning {
    id: string
    dueDate: Date
    status: CleaningStatus
    asignedTo: string
}

export function createCleaning(dueDate: Date, asignedTo: string): Cleaning {
    return {
        id: uuid(),
        dueDate: dueDate,
        status: CleaningStatus.Pending,
        asignedTo: asignedTo
    }
}