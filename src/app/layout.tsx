import { Inter as FontSans } from 'next/font/google'
import './globals.css'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased flex',
          fontSans.variable
        )}
      >
        <nav className="bg-background border-r flex flex-col items-start justify-between px-4 py-6 w-64">
          <div className="grid gap-6">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
              <MountainIcon className="w-6 h-6" />
              <span>Hotel Manager</span>
            </Link>
            <div className="grid gap-2">
              <Link
                href="/reservations"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <CalendarIcon className="w-5 h-5" />
                <span>Reservations</span>
              </Link>
              <Link
                href="/rooms"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <HomeIcon className="w-5 h-5" />
                <span>Rooms</span>
              </Link>
              <Link
                href="/guests"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <UserIcon className="w-5 h-5" />
                <span>Guests</span>
              </Link>
              <Link
                href="/housekeeping"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <ClipboardIcon className="w-5 h-5" />
                <span>Housekeeping</span>
              </Link>
              <Link
                href="/admin"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <BarChartIcon className="w-5 h-5" />
                <span>Admin</span>
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
            {children}
      </body>
    </html>
  )
}
