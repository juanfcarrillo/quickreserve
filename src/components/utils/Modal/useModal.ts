import { useState } from 'react'

export function useModal() {
    const [isOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    function toggleModal() {
        setIsOpen(!isOpen)
    }   

    return {
        isOpen,
        openModal,
        closeModal,
        toggleModal
    }
}