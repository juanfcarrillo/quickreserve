import { v4 as uuid } from 'uuid'

export enum RoomStatus {
    Occupied = 'Occupied',
    Available = 'Available'
}

export interface Room {
    id: string
    name: string
    capacity: number
    price: number
    status: RoomStatus
    number: string
}

export function createRoom(name: string, capacity: number, price: number, number: string): Room {
    return {
        id: uuid(),
        name: name,
        capacity: capacity,
        price: price,
        status: RoomStatus.Available,
        number: number
    }
}