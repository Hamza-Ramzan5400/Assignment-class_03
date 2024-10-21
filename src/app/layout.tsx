import Foter from "./foter/foter";
import Navbar from "./component/navbar";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Foter/>
      </body>
    </html>
  );
}
