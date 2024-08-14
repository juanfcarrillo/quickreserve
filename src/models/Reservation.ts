import { Guest } from './Guest'
import { Room } from './Room'
import { Status } from './Status'

import { v4 as uuid } from 'uuid'

export interface Reservation {
    id: string
    guest: Guest
    checkIn: Date
    checkOut: Date
    room: Room
    status: Status
}

export function createReservation(guest: Guest, checkIn: Date, checkOut: Date, room: Room): Reservation {
    return {
        id: uuid(),
        guest: guest,
        checkIn: checkIn,
        checkOut: checkOut,
        room: room,
        status: Status.pending
    }
}