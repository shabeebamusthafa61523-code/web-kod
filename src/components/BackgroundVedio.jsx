function BackgroundVideo({ src }) {
  return (
    <video autoPlay loop muted playsInline className="bg-video">
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default BackgroundVideo;