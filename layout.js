import "./globals.css";
import user from "@/models/user";
import { AuthProvider } from "./provider";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider> {children} </AuthProvider>{" "}
      </body>{" "}
    </html>
  );
}
