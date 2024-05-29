import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To Do App",
  description: "A simple TO Do Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><ReduxProvider>{children}</ReduxProvider></body>
    </html>
  );
}
