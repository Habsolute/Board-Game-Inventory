import { Inter } from '@next/font/google'
import { BoardGameCard } from './component/cards/boardGameCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main style={{ width: "100%" }} className='bg-slate-200 p-7'>
      <div className='flex content-between'>
        <BoardGameCard />
      </div>
    </main>
  )
}
