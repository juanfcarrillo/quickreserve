import { Guests } from '@/components/guests'

export default function Page() {
  return (
    <div className="flex h-screen w-full">
      <main className="flex-1 bg-muted p-6">
        <Guests />
      </main>
    </div>
  )
}