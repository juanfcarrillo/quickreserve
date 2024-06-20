/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/8hCSCQY5eQT
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Card } from '@/components/ui/card'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import React from 'react'

export function Landing() {
  return (
    <div className="flex h-screen w-full">
      <nav className="bg-background border-r flex flex-col items-start justify-between px-4 py-6 w-64">
        <div className="grid gap-6">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
            <MountainIcon className="w-6 h-6" />
            <span>Hotel Manager</span>
          </Link>
          <div className="grid gap-2">
            <Link
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-foreground"
              prefetch={false}
            >
              <CalendarIcon className="w-5 h-5" />
              <span>Reservations</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <HomeIcon className="w-5 h-5" />
              <span>Rooms</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <UserIcon className="w-5 h-5" />
              <span>Guests</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <ClipboardIcon className="w-5 h-5" />
              <span>Housekeeping</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <BarChartIcon className="w-5 h-5" />
              <span>Reports</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5">
            <div className="font-medium">John Doe</div>
            <div className="text-xs text-muted-foreground">Hotel Manager</div>
          </div>
        </div>
      </nav>
      <main className="flex-1 bg-muted p-6">
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
        <div className="flex items-center justify-between mt-12">
          <h1 className="text-2xl font-bold">Reservations</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusIcon className="w-4 h-4 mr-2" />
                Add Reservation
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Reservation</DialogTitle>
                <DialogDescription>Fill out the details for the new reservation.</DialogDescription>
              </DialogHeader>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="guest-name">Guest Name</Label>
                  <Input id="guest-name" placeholder="Enter guest name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="check-in">Check-in</Label>
                  <Input id="check-in" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="check-out">Check-out</Label>
                  <Input id="check-out" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="room-type">Room Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select room type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="deluxe">Deluxe</SelectItem>
                      <SelectItem value="suite">Suite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="guests">Guests</Label>
                  <Input id="guests" type="number" min="1" />
                </div>
              </form>
              <DialogFooter>
                <div>
                  <Button variant="outline">Cancel</Button>
                </div>
                <Button type="submit">Save Reservation</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Guest Name</TableHead>
                <TableHead>Check-in</TableHead>
                <TableHead>Check-out</TableHead>
                <TableHead>Room Type</TableHead>
                <TableHead>Guests</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="font-medium">John Doe</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">04/15/2023</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">04/20/2023</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">Deluxe</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">2</div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <FilePenIcon className="w-5 h-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <TrashIcon className="w-5 h-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Jane Appleseed</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">04/20/2023</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">04/25/2023</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">Standard</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">1</div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <FilePenIcon className="w-5 h-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <TrashIcon className="w-5 h-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Sarah Miller</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">04/25/2023</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">04/30/2023</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">Suite</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">3</div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <FilePenIcon className="w-5 h-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <TrashIcon className="w-5 h-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
        <div className="flex items-center justify-between mt-12">
          <h1 className="text-2xl font-bold">Rooms</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusIcon className="w-4 h-4 mr-2" />
                Add Room
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Room</DialogTitle>
                <DialogDescription>Fill out the details for the new room.</DialogDescription>
              </DialogHeader>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="room-number">Room Number</Label>
                  <Input id="room-number" placeholder="Enter room number" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="room-type">Room Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select room type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="deluxe">Deluxe</SelectItem>
                      <SelectItem value="suite">Suite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="room-status">Room Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select room status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="occupied">Occupied</SelectItem>
                      <SelectItem value="cleaning">Cleaning</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="room-rate">Room Rate</Label>
                  <Input id="room-rate" type="number" min="0" />
                </div>
              </form>
              <DialogFooter>
                <div>
                  <Button variant="outline">Cancel</Button>
                </div>
                <Button type="submit">Save Room</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Room Number</TableHead>
                <TableHead>Room Type</TableHead>
                <TableHead>Room Status</TableHead>
                <TableHead>Room Rate</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="font-medium">101</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">Deluxe</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium text-green-500">Available</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">$200</div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <FilePenIcon className="w-5 h-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <TrashIcon className="w-5 h-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="font-medium">201</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">Standard</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium text-yellow-500">Occupied</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">$150</div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <FilePenIcon className="w-5 h-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <TrashIcon className="w-5 h-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="font-medium">301</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">Suite</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium text-red-500">Cleaning</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">$300</div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <FilePenIcon className="w-5 h-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <XIcon />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </main>
    </div>
  )
}

function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ClipboardIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function FilePenIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
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


function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
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


function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}


function UserIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function XIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
