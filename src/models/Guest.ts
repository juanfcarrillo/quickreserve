import { v4 as uuid } from 'uuid'

export interface Guest {
    id: string;
    name: string;
    email: string;
    phone: string;
}

export function createGuest(name: string, email: string, phone: string): Guest {
    return {
        id: uuid(),
        name: name,
        email: email,
        phone: phone,
    }
}