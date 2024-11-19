export default function HomePage() {
  return (
    <div className="video-feed">
      <div className="video-card">
        <video
          controls
          src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
        ></video>
        <div className="video-info">
          <p>FPT Tower - Hanoi</p>
          <p>Happy Mens Day 🎉 #fpttelecom</p>
          <p>🎵 nhạc nền - Thùy Dung</p>
        </div>
        <div className="video-actions">
          <button>❤️ 27.2K</button>
          <button>💬 243</button>
          <button>🔗 4701</button>
        </div>
      </div>
    </div>
  );
}


    


