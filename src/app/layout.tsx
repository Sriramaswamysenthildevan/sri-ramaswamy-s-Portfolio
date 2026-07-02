import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sriramaswamy Senthil Devan | DevOps Engineer & Cloud Enthusiast",
  description:
    "Building Cloud Infrastructure • Learning DevOps Daily • Future Entrepreneur. Final Year CSE Student passionate about DevOps, Cloud Computing, and Automation.",
  keywords: [
    "DevOps",
    "Cloud",
    "AWS",
    "Docker",
    "Kubernetes",
    "Linux",
    "Portfolio",
    "Sriramaswamy",
  ],
  authors: [{ name: "Sriramaswamy Senthil Devan" }],
  openGraph: {
    title: "Sriramaswamy Senthil Devan | DevOps Engineer & Cloud Enthusiast",
    description:
      "Building Cloud Infrastructure • Learning DevOps Daily • Future Entrepreneur.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
