import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "PrimeNest Properties", description: "Premium property search and real estate advisory in Abuja and Lagos." };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
