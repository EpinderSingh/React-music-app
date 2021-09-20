import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
}) => {
  // Event Handler
  const playSongHandler = () => {
    setIsPlaying(!isPlaying);

    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currnetTime: e.target.value });
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className='player'>
      <div className='time-control'>
        <p>{getTime(songInfo.currnetTime)}</p>
        <input
          type='range'
          min={0}
          max={songInfo.duration}
          value={songInfo.currnetTime}
          onChange={dragHandler}
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className='play'
          size='2x'
          icon={isPlaying ? faPlay : faPause}
        />
        <FontAwesomeIcon
          className='skip-forward'
          size='2x'
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
