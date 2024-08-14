import { db } from '@/lib/firebase/firebaseConfig'
import { Room } from '@/models/Room'
import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, query, setDoc, where } from 'firebase/firestore'


export const ROOM_COLLECTION = 'rooms'

export async function createRoomService(room: Room) {
    const firebaseRoom = {
        id: room.id,
        name: room.name,
        capacity: room.capacity,
        price: room.price,
        status: room.status,
        number: room.number
    }

    await setDoc(doc(db, ROOM_COLLECTION, room.id), firebaseRoom)
}

export async function getAllRoomService() {
    const snapshot = await getDocs(collection(db, ROOM_COLLECTION))
    const rooms: Room[] = []

    snapshot.forEach((doc) => {
        const data = doc.data()

        const room: Room = {
            id: doc.id,
            name: data.name,
            capacity: data.capacity,
            price: data.price,
            status: data.status,
            number: data.number
        }
        rooms.push(room)
    })

    return rooms
}

export async function getRoomServiceById(id: string) {
    const docRef = await getDoc(doc(db, ROOM_COLLECTION, id))
    const data = docRef.data()

    if (!docRef.exists || !data) {
        throw new Error('Room does not exist')
    }

    const room: Room = {
        id: docRef.id,
        name: data.name,
        capacity: data.capacity,
        price: data.price,
        status: data.status,
        number: data.number
    }

    return room
}

export async function deleteRoomService(id: string) {
    await deleteDoc(doc(db, ROOM_COLLECTION, id))
}

export async function getRoomByNumber(number: string) {
    const numberQuery = query(collection(db, ROOM_COLLECTION), where('number', '==', number))
    const docRef = await getDocs(numberQuery)

    let room: Room | null = null
    docRef.forEach((doc) => {
        if (doc.exists()) {
            const data = doc.data()

            const newRoom: Room = {
                id: doc.id,
                name: data.name,
                capacity: data.capacity,
                price: data.price,
                status: data.status,
                number: data.number
            }

            room = newRoom
        }
    })

    if (!room) {
        throw new Error('Room does not exist')
    }

    return room
}

export function suscribeToRoomService(callback: (rooms: Room[]) => void) {
    onSnapshot(collection(db, ROOM_COLLECTION), (snapshot) => {
        const rooms: Room[] = []

        snapshot.forEach((doc) => {
            const data = doc.data()

            const room: Room = {
                id: doc.id,
                name: data.name,
                capacity: data.capacity,
                price: data.price,
                status: data.status,
                number: data.number
            }
            rooms.push(room)
        })

        callback(rooms)
    })
}

export async function updateRoomService(room: Room) {
    const firebaseRoom = {
        id: room.id,
        name: room.name,
        capacity: room.capacity,
        price: room.price,
        status: room.status,
        number: room.number
    }

    await setDoc(doc(db, ROOM_COLLECTION, room.id), firebaseRoom, { merge: true })
}