import Link from 'next/link'
import delay from '../_utils/delay'
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  console.log('Generating metadata...')
  await delay(3000)

  return {
    title: 'Movie'
  }
}

export default async function Movie() {
  await delay(3000)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/" prefetch={false}>Go home</Link>
    </main>
  )
}
