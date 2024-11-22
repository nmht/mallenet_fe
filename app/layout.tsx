import type { Metadata } from "next";
import "./globals.css";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export const metadata: Metadata = {
  title: "Mallenet",
  description: "Shopping Social Network",
};

export default function RootLayout({ children } : Readonly<{ children : React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="">
          <Header />
          <Sidebar children={children} />
        </div>
      </body>
    </html>
  );
}

