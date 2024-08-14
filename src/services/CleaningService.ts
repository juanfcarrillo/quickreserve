import { Cleaning } from '@/models/Cleaning'
import { db } from '@/lib/firebase/firebaseConfig'
import { collection, deleteDoc, doc, getDocs, setDoc, Timestamp } from 'firebase/firestore'

export const CLEANING_COLLECTION = 'cleanings'

export async function createCleaningService(cleaning: Cleaning) {
    const firebaseCleaning = {
        id: cleaning.id,
        dueDate: Timestamp.fromDate(cleaning.dueDate),
        status: cleaning.status,
        asignedTo: cleaning.asignedTo
    }

    await setDoc(doc(db, CLEANING_COLLECTION, cleaning.id), firebaseCleaning)
}

export async function getAllCleaningService() {
    const snapshot = await getDocs(collection(db, CLEANING_COLLECTION))
    const cleanings: Cleaning[] = []

    snapshot.forEach((doc) => {
        const data = doc.data()

        const cleaning: Cleaning = {
            id: doc.id,
            dueDate: data.dueDate.toDate(),
            status: data.status,
            asignedTo: data.asignedTo
        }
        cleanings.push(cleaning)
    })

    return cleanings
}

export async function deleteCleaningService(id: string) {
    await deleteDoc(doc(db, CLEANING_COLLECTION, id))
}

export async function updateCleaningService(cleaning: Cleaning) {
    await setDoc(doc(db, CLEANING_COLLECTION, cleaning.id), cleaning)
}