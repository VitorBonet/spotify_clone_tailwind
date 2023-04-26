import Image from 'next/image'
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react'
import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semi-bold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors' >
              <Image src="/album.jpg" width={104} height={104} alt="Capa álbum"/>
              <strong>Celine Dion</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto nr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a className='bg-white/10 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors' >
              <Image src="/album.jpg" width={104} height={104} alt="Capa álbum"/>
              <strong>Celine Dion</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto nr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a className='bg-white/10 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors' >
              <Image src="/album.jpg" width={104} height={104} alt="Capa álbum"/>
              <strong>Celine Dion</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto nr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a className='bg-white/10 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors' >
              <Image src="/album.jpg" width={104} height={104} alt="Capa álbum"/>
              <strong>Celine Dion</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto nr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a className='bg-white/10 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors' >
              <Image src="/album.jpg" width={104} height={104} alt="Capa álbum"/>
              <strong>Celine Dion</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto nr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a className='bg-white/10 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors' >
              <Image src="/album.jpg" width={104} height={104} alt="Capa álbum"/>
              <strong>Celine Dion</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto nr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>
          
          <h2 className='font-semi-bold text-2xl mt-10'>Made For Vitor Bonet</h2>

          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={104} height={104} alt="Capa álbum"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm'>Wallows, Coin, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={104} height={104} alt="Capa álbum"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm'>Wallows, Coin, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={104} height={104} alt="Capa álbum"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm'>Wallows, Coin, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={104} height={104} alt="Capa álbum"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm'>Wallows, Coin, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={104} height={104} alt="Capa álbum"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm'>Wallows, Coin, girl in red and more</span>
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
