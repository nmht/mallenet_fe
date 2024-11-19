export default function ProfilePage() {
  return (
    <div className="profile-content">
      {/* Profile Header */}
      <header className="profile-header">
        <img
          className="profile-picture"
          src="https://via.placeholder.com/150"
          alt="User"
        />
        <div className="user-info">
          <h2>_ttngz.1310_ <span>🍪</span></h2>
          <button>Following</button>
          <button>Message</button>
          <button>...</button>
          <p>Fb: Ng Thanh Trà</p>
          <p>Ins: .ttngz.13xns_</p>
          <p>
            <span>38 Following</span> | <span>2244 Followers</span> |{" "}
            <span>73.2K Likes</span>
          </p>
        </div>
      </header>

      {/* Tabs */}
      <div className="profile-tabs">
        <button className="active">Videos</button>
        <button>Reposts</button>
        <button>Liked</button>
      </div>

      {/* Video Grid */}
      <div className="video-grid">
        <div className="video-item">
          <img
            src="https://via.placeholder.com/300"
            alt="Video thumbnail"
          />
          <p>750.1K</p>
        </div>
        <div className="video-item">
          <img
            src="https://via.placeholder.com/300"
            alt="Video thumbnail"
          />
          <p>7245</p>
        </div>
        <div className="video-item">
          <img
            src="https://via.placeholder.com/300"
            alt="Video thumbnail"
          />
          <p>6052</p>
        </div>
      </div>
    </div>
  );
}
