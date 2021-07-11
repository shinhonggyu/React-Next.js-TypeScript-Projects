import classes from './Song.module.css';

const Song = (props) => {
  const { cover, name, artist } = props.currentSong;

  return (
    <div className={classes['song-container']}>
      <img alt={name} src={cover}></img>
      <h2>{name}</h2>
      <h3>{artist}</h3>
    </div>
  );
};

export default Song;
