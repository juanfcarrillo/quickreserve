import { Button } from '@/components/ui/button'
import React from 'react'

export function Landing() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Hotel Manager</h1>
      <p className="text-lg text-muted-foreground mb-8">Manage your hotel operations with ease.</p>
      <div className="flex gap-4">
        <Button>
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Reservation
        </Button>
        <Button variant="outline">
          <HomeIcon className="w-4 h-4 mr-2" />
          View Rooms
        </Button>
      </div>
    </section>
  )
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}