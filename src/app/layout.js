import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Thet Myat Noe Thwin (Julia) | Software Developer",
  description: "Portfolio of Thet Myat Noe Thwin (Julia), a Computer Science graduate specializing in Software Development with expertise in Python, Java, JavaScript, and more.",
  keywords: "software developer, computer science, Python, Java, JavaScript, TypeScript, MongoDB, Next.js, portfolio",
  openGraph: {
    title: "Thet Myat Noe Thwin (Julia) | Software Developer",
    description: "Computer Science graduate specializing in Software Development with expertise in Python, Java, JavaScript, and more.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
