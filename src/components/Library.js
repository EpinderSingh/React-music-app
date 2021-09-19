import React from 'react';

import LibrarySong from './LibrarySong';

const Library = ({ songs, setCurrentSong, song }) => {
  return (
    <div className='library'>
      <h2>Library</h2>
      <div className='library-songs'>
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            setCurrentSong={setCurrentSong}
            song={song}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
