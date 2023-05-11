'use client'
import ITrackDTOS from '@/dtos/ITrackDTOS';
import { createContext, ReactNode, useContext, useState } from 'react';

type PlayerContextData = {
  trackList: Array<ITrackDTOS>;
  currentMusicIndex: number;
  isPlaying: boolean;
  hasPrevious: boolean;
  hasNext: boolean;
  isLooping: boolean;
  isShuffling: boolean;
  play: (music: ITrackDTOS) => void;
  playList: (list: ITrackDTOS[], index: number) => void;
  playNext: () => void;
  playPrevious: () => void;
  togglePlay: () => void;
  toggleLoop: () => void;
  toggleShuffle: () => void;
  clearPlayerState: () => void;
  setPlayingState: (state: boolean) => void;
}

export const PlayerContext = createContext({} as PlayerContextData);

type PlayerContextProvider = {
  children: ReactNode;
}

export function PlayerContextProvider({ children }: PlayerContextProvider) {
  const [trackList, setTrackList] = useState<ITrackDTOS[]>([]);
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  function play(music: ITrackDTOS) {
    setTrackList([music]);
    setCurrentMusicIndex(0);
    setIsPlaying(true);
  }

  function playList(list: ITrackDTOS[], index: number) {
    setTrackList(list);
    setCurrentMusicIndex(index);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function toggleLoop() {
    setIsLooping(!isLooping);
  }

  function toggleShuffle() {
    setIsShuffling(!isShuffling);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }
  
  function clearPlayerState() {
    setTrackList([]);
    setCurrentMusicIndex(0);
  }

  const hasPrevious = currentMusicIndex > 0;
  const hasNext = isShuffling || (currentMusicIndex + 1) < trackList.length;

  function playNext() {
    if (isShuffling) {
      const nextRandomMusicIndex = Math.floor(Math.random() * trackList.length );

      setCurrentMusicIndex(nextRandomMusicIndex);
    } else if(hasNext) {
      setCurrentMusicIndex(currentMusicIndex + 1);
    }
  }

  function playPrevious() {
    if (hasPrevious) {
      setCurrentMusicIndex(currentMusicIndex - 1);
    }
  }

  return (
    <PlayerContext.Provider value={{
       trackList, 
       currentMusicIndex, 
       isPlaying, 
       play, 
       playList,
       playNext,
       playPrevious,
       togglePlay, 
       setPlayingState,
       hasPrevious,
       hasNext,
       toggleLoop,
       toggleShuffle,
       isLooping,
       isShuffling,
       clearPlayerState
      }}>
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => {
  return useContext(PlayerContext);
}