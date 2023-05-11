"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import Slider from 'rc-slider';
import classNames from 'classnames';
import { 
  Play, 
  Pause,
  Shuffle, 
  SkipBack, 
  SkipForward, 
  Repeat, 
  Volume, 
} from 'lucide-react'

import 'rc-slider/assets/index.css';
import { usePlayer } from '@/contexts/PlayerContext';
import { convertDurationToTimeString } from '@/utils/convertDurationToTimeString';

export function Footer() {
  const trackRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  const { 
    trackList, 
    currentMusicIndex, 
    isPlaying,
    togglePlay,
    toggleLoop,
    toggleShuffle,
    setPlayingState,
    playNext,
    playPrevious,
    clearPlayerState,
    hasNext,
    hasPrevious,
    isLooping,
    isShuffling
  } = usePlayer();
  
  const music = trackList[currentMusicIndex];

  function setupProgressListener() {
    if (trackRef && trackRef.current) trackRef.current.currentTime = 0;

    trackRef?.current?.addEventListener('timeupdate', () => {
      setProgress(Math.floor(trackRef && trackRef.current ? trackRef.current.currentTime : 0));
    })
  }

  function handleSeek(amount: number | number[]) {
    if(Array.isArray(amount)) return false;

    if (trackRef && trackRef.current) trackRef.current.currentTime = amount;
    setProgress(amount);
  }

  function handleMusicEnded() {
    if (hasNext) {
      playNext();
    } else {
      clearPlayerState();
    }
  }

  useEffect(() => {
    if (!trackRef.current) {
      return;
    }
    
    if (isPlaying) {
      trackRef.current.play();
    } else {
      trackRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <footer className="fixed bottom-0 w-full bg-zinc-900 border-t border-zinc-700 p-4 flex items-center justify-between">
        <div className='flex items-center gap-2'>
          <Image src={music ? music.trackImageUrl : "/rollingDeep.jpg"} width={90} height={90} alt={music ? music.title : "Rolling in the Deep"}/>
          <div className='flex flex-col'>
            <strong className='font-normal'>{music ? music.title : "Rolling in the Deep"}</strong>
            <span className='text-xs text-zinc-400'>{music ? music.title : "Adele"}</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-4'>
            <button onClick={toggleShuffle} disabled={!music || trackList.length === 1} className=''>
              <Shuffle size={20} className={classNames({ 'text-zinc-200': isShuffling, 'text-zinc-500': !isShuffling })}/>
            </button>
            <button onClick={playPrevious} disabled={!music || !hasPrevious} className=''>
              <SkipBack size={20} className={classNames({ 'text-zinc-200': hasPrevious, 'text-zinc-500': !hasPrevious })}/>
            </button>

              { isPlaying ? (
                <button onClick={togglePlay} className='w-10 h-10 flex items-center justify-center rounded-full bg-white text-black ml-auto nr-8'>
                    <Pause />
                </button>
              ) : (
                <button onClick={togglePlay} className='w-10 h-10 flex items-center justify-center rounded-full bg-white text-black ml-auto nr-8 pl-1'>
                  <Play />
                </button>
              ) }

            <button onClick={playNext} disabled={!music || !hasNext} className=''>
            <SkipForward  onClick={playNext} size={20} className={classNames({ 'text-zinc-200': hasNext, 'text-zinc-500': !hasNext })}/>
            </button>
            <button onClick={toggleLoop} disabled={!music} className=''>
              <Repeat size={20}  className={classNames({ 'text-zinc-200': isLooping, 'text-zinc-500': !isLooping })}/>
            </button>
          </div>
            {music ? (
              <div className='flex items-center gap-2 w-22'>
                <audio
                  src={music.trackUrl}
                  ref={trackRef}
                  onEnded={handleMusicEnded}
                  loop={isLooping}
                  onPlay={() => setPlayingState(true)}  
                  onPause={() => setPlayingState(false)}  
                  onLoadedMetadata={setupProgressListener}
                  autoPlay
                />

                <span className='text-xs text-zinc-400'>{convertDurationToTimeString(progress)}</span>
                <div className='w-12'>
                <Slider 
                  max={Number(music.timeLength)}
                  value={progress}
                  onChange={handleSeek}
                />
                </div>
                <span className='text-xs text-zinc-400'>{convertDurationToTimeString(Number(music.timeLength))}</span>
              </div>
            ) : (
              <div className='flex items-center gap-2'>
                  <span className='text-xs text-zinc-400'>0:31</span>
                  <div className='h-1 rounded-full w-96 bg-zinc-600'>
                    <div className='bg-zinc-200 w-40 h-1 rounded'></div>
                  </div>
                  <span className='text-xs text-zinc-400'>2:14</span>
              </div>
            )}
        </div>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'>
            <Volume size={20}/>
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded'></div>
            </div>
          </div>
        </div>
      </footer>
  )
}