import classes from './LibrarySong.module.css';

const LibrarySong = ({
  songs,
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  id,
  setSongs,
  currentSong,
}) => {
  const { cover, name, artist, active } = song;

  const songSelectHandler = async () => {
    await setCurrentSong(song);

    // const newSongs = songs.map((song) => {
    //   if (song.id === id) {
    //     return {
    //       ...song,
    //       active: true,
    //     };
    //   } else {
    //     return {
    //       ...song,
    //       active: false,
    //     };
    //   }
    // });

    // setSongs(newSongs);

    if (isPlaying) audioRef.current.play();

    // return new Promise((resolve, reject) => {
    //   resolve(setCurrentSong(song));
    // }).then((res) => audioRef.current.play());
  };

  // const songSelectHandler = async () => {
  //   await setCurrentSong(song);
  //   audioRef.current.play();
  // };

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
