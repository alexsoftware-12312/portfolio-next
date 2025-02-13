import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import "@fortawesome/fontawesome-svg-core/styles.css";  
import "./globals.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <div id="banner" className="flex h-20 items-center justify-between px-8">
            <div className="flex items-center gap-4">Logo to the left.</div>
            <div className="flex items-center gap-10">
              <div>Top navigation here</div>
              <div>About Me</div>
              <div>Apps <FontAwesomeIcon icon={faChevronDown} size={"1x"}/></div>
              <div>Blogs maybe?</div>
              <div>Links</div>
            </div>
        </div>
        {children}
      </body>
    </html>
  );
}
