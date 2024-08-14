import { Landing } from '@/components/landing'

export default function Home() {
  return (
    <div className="flex h-screen w-full">
      <main className="flex-1 bg-muted p-6">
        <Landing />
      </main>
    </div>
  )
}
