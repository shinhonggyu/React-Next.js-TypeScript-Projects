import classes from './LibrarySong.module.css';

const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  currentSong,
}) => {
  const { cover, name, artist } = song;

  const songSelectHandler = async () => {
    await setCurrentSong(song);

    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`${classes['library-song']} ${
        song.id === currentSong.id ? classes.selected : ''
      }`}
    >
      <img alt={name} src={cover}></img>
      <div className={classes['song-description']}>
        <h3 className={classes}>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
