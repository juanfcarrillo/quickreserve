import { Rooms } from '@/components/rooms'

export default function Page() {
  return (
    <div className="flex h-screen w-full">
      <main className="flex-1 bg-muted p-6">
        <Rooms />
      </main>
    </div>
  )
}