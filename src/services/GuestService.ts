import { db } from '@/lib/firebase/firebaseConfig'
import { Guest } from '@/models/Guest'
import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, query, setDoc, where } from 'firebase/firestore'

export const GUEST_COLLECTION = 'guests'

export async function createGuestService(guest: Guest) {
    const firebaseGuest = {
        id: guest.id,
        name: guest.name,
        email: guest.email,
        phone: guest.phone
    }

    await setDoc(doc(db, GUEST_COLLECTION, guest.id), firebaseGuest)
}

export async function getAllGuestService() {

    const snapshot = await getDocs(collection(db, GUEST_COLLECTION))

    const guests: Guest[] = []

    snapshot.forEach((doc) => {
        const data = doc.data()

        const guest: Guest = {
            id: doc.id,
            name: data.name,
            email: data.email,
            phone: data.phone
        }
        guests.push(guest)
    })

    return guests   
}

export async function getGuestServiceById(id: string) {
    const docRef = await getDoc(doc(db, GUEST_COLLECTION, id))
    const data = docRef.data()

    if (!docRef.exists || !data) {
        throw new Error('Guest does not exist')
    }

    const guest: Guest = {
        id: docRef.id,
        name: data.name,
        email: data.email,
        phone: data.phone
    }

    return guest
}

export async function deleteGuestService(id: string) {
    await deleteDoc(doc(db, GUEST_COLLECTION, id))
}

export function suscribeToGuestService(callback: (guests: Guest[]) => void) {
    onSnapshot(collection(db, GUEST_COLLECTION), (snapshot) => {
        const guests: Guest[] = []

        snapshot.forEach((doc) => {
            const data = doc.data()

            const guest: Guest = {
                id: doc.id,
                name: data.name,
                email: data.email,
                phone: data.phone
            }

            guests.push(guest)
        })

        callback(guests)
    })
}

export async function getGuestByEmail(email: string): Promise<Guest> {
    const emailQuery = query(collection(db, GUEST_COLLECTION), where('email', '==', email))
    const docRef = await getDocs(emailQuery)

    let guest: Guest | null = null
    docRef.forEach((doc) => {
        if (doc.exists()) {
            const data = doc.data()

            const newGuest: Guest = {
                id: doc.id,
                name: data.name,
                email: data.email,
                phone: data.phone
            }

            guest = newGuest
        }
    })

    if (!guest) {
        throw new Error('Guest does not exist')
    }

    return guest
}