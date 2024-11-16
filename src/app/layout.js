import "./globals.css";
import { Inter } from "next/font/google"; // Import the Inter font
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Tailwind CSS Animations - Effortless Motion for Web Design",
  description:
    "Discover a curated collection of Tailwind CSS animation classes that you can easily copy and paste into your projects, bringing smooth, engaging motion to your web designs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
