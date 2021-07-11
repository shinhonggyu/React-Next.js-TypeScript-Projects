import classes from './Library.module.css';
import LibrarySong from './LibrarySong';

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  currentSong,
}) => {
  return (
    <div
      className={`${classes.library} ${
        libraryStatus ? classes['active-library'] : ''
      }`}
    >
      <h2>Library</h2>
      <div className={classes['library-songs']}>
        {songs.map((song) => {
          return (
            <LibrarySong
              key={song.id}
              id={song.id}
              songs={songs}
              setCurrentSong={setCurrentSong}
              song={song}
              audioRef={audioRef}
              isPlaying={isPlaying}
              setSongs={setSongs}
              currentSong={currentSong}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
