import "../globals.css"; // Reuse global styles

export const metadata = {
  title: "Mallenet",
  description: "Login to access your Mallenet account.",
};

export default function LoginLayout({ children } : Readonly<{ children : React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <main className="login-container">
          {children}
        </main>
      </body>
    </html>
  );
}
