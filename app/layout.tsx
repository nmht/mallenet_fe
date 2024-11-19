import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mallenet",
  description: "Shopping Social Network",
};

export default function RootLayout({ children } : Readonly<{ children : React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          {/* Sidebar */}
          <aside className="sidebar">
            <div className="logo">Mallenet</div>
            <nav>
              <ul>
                <li className="active">For You</li>
                <li>Explore</li>
                <li>Following</li>
                <li>Friends</li>
                <li>LIVE</li>
                <li>Messages</li>
                <li>Profile</li>
              </ul>
            </nav>
            <div className="following">
              <h4>Following accounts</h4>
              <ul>
                <li>_ttngz.1310_</li>
                <li>vuxminhtus</li>
                <li>deptraiihiyeuhi</li>
                <li>_myduyen55_</li>
                <li>julie0237_</li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="main-content">
            <header className="topbar">
              <input type="text" className="search-bar" placeholder="Search" />
              <div className="actions">
                <button>Upload</button>
                <span className="notifications">87</span>
                <img
                  className="profile-picture"
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                />
              </div>
            </header>
            <main>{ children }</main>
          </div>
        </div>
      </body>
    </html>
  );
}

