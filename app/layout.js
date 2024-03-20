import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";
import Nav from "@/Components/Header/Nav";

export const metadata = {
  title: "YT Playlist Sharer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <Nav />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}