import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://williamcote.com"),
  title: {
    default: "William Cote | Graphic Designer",
    template: "%s | William Cote"
  },
  description:
    "Portfolio of William Cote, a graphic designer focused on brand identity, editorial design, apparel, and digital systems.",
  openGraph: {
    title: "William Cote | Graphic Designer",
    description:
      "Brand identity, editorial, apparel, and digital design portfolio by William Cote.",
    type: "website",
    images: ["/assets/web/thirdspaces-install.jpg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
