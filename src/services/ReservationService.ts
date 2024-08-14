import { db } from '@/lib/firebase/firebaseConfig'
import { Reservation } from '@/models/Reservation'
import { collection, deleteDoc, doc, getDocs, onSnapshot, setDoc, Timestamp } from 'firebase/firestore'

export const RESERVATION_COLLECTION = 'reservations'

export async function createReservationService(reservation: Reservation) {
    const firebaseReservation = {
        id: reservation.id,
        guest: reservation.guest,
        checkIn: Timestamp.fromDate(reservation.checkIn),
        checkOut: Timestamp.fromDate(reservation.checkOut),
        room: reservation.room,
        status: reservation.status
    }

    await setDoc(doc(db, RESERVATION_COLLECTION, reservation.id), firebaseReservation)
}

export async function getAllReservationService() {
    const snapshot = await getDocs(collection(db, RESERVATION_COLLECTION))
    const reservations: Reservation[] = []

    snapshot.forEach((doc) => {
        const data = doc.data()

        const reservation: Reservation = {
            id: doc.id,
            guest: data.guest,
            checkIn: data.checkIn.toDate(),
            checkOut: data.checkOut.toDate(),
            room: data.room,
            status: data.status
        }

        reservations.push(reservation)
    })

    return reservations
}

export async function updateReservationService(reservation: Reservation) {
    const firebaseReservation = {
        id: reservation.id,
        guest: reservation.guest,
        checkIn: Timestamp.fromDate(reservation.checkIn),
        checkOut: Timestamp.fromDate(reservation.checkOut),
        room: reservation.room,
        status: reservation.status
    }

    await setDoc(doc(db, RESERVATION_COLLECTION, reservation.id), firebaseReservation)
}

export async function deleteReservationService(id: string) {
    await deleteDoc(doc(db, RESERVATION_COLLECTION, id))
}

export function suscribeToReservationService(callback: (reservations: Reservation[]) => void) {
    onSnapshot(collection(db, RESERVATION_COLLECTION), (snapshot) => {
        const reservations: Reservation[] = []

        snapshot.forEach((doc) => {
            const data = doc.data()

            const reservation: Reservation = {
                id: doc.id,
                checkIn: data.checkIn.toDate(),
                checkOut: data.checkOut.toDate(),
                status: data.status,
                room: data.room,
                guest: data.guest
            }
            reservations.push(reservation)
        })

        callback(reservations)
    })  
}