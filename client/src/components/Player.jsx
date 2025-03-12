function Player() {
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        src="https://player.videasy.net/movie/299534"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        frameBorder="0"
        allowFullScreen
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Player;
