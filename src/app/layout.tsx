import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google"; // Import the typewriter font
import "./globals.css";
import { cn } from "@/lib/utils";

// Configure the typewriter font
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Include needed weights
  variable: "--font-ibm-plex-mono", // CSS variable name
});

export const metadata: Metadata = {
  title: "Namkha Tashi Oedzer | Portfolio",
  description: "Software Engineer, ML Enthusiast & Entrepreneur Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-mono antialiased", // Use font-mono (linked to CSS variable)
          ibmPlexMono.variable // Apply the font CSS variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
