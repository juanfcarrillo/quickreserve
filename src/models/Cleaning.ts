import { v4 as uuid } from 'uuid'
import { Room } from './Room'

export enum CleaningStatus {
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
    room: Room
}

export function createCleaning(dueDate: Date, asignedTo: string, room: Room): Cleaning {
    return {
        id: uuid(),
        dueDate: dueDate,
        status: CleaningStatus.Pending,
        asignedTo: asignedTo,
        room
    }
}