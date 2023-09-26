import Link from 'next/link'
import delay from '../_utils/delay'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  await delay(3000);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/movie" prefetch={false}>Go to movie</Link>
    </main>
  )
}
