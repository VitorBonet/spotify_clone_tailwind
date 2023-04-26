import Image from 'next/image'
import { 
  Play, 
  Shuffle, 
  SkipBack, 
  SkipForward, 
  Repeat, 
  Mic2, 
  LayoutList, 
  Laptop2, 
  Volume, 
  Maximize2 
} from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className='flex items-center gap-2'>
          <Image src="/album.jpg" className='w-full' width={32} height={32} alt="Capa álbum"/>
          <div className='flex flex-col'>
            <strong className='font-normal'>My Heart Will Go On</strong>
            <span className='text-xs text-zinc-400'>Celine Dion</span>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-4'>
            <Shuffle size={20} className='text-zinc-200'/>
            <SkipBack size={20} className='text-zinc-200'/>

            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto nr-8'>
              <Play />
            </button>

            <SkipForward size={20} className='text-zinc-200'/>
            <Repeat size={20} className='text-zinc-200'/>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded'></div>
            </div>
            <span className='text-xs text-zinc-400'>2:14</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className='flex items-center gap-2'>
            <Volume size={20}/>
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded'></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
  )
}