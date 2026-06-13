import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "Thalairaj Biryani | Premium Royal South Indian Dining",
  description:
    "Experience the Original 21 Spice Biryani crafted with 21 handpicked signature spices and slow cooked to dumpukht perfection. Inspired by Nizam royal kitchens.",
  keywords: [
    "Thalairaj Biryani",
    "21 Spice Biryani",
    "Royal South Indian dining",
    "Hyderabad Dum Biryani",
    "Nellore Spices",
    "Premium Indian Restaurant",
  ],
  metadataBase: new URL("https://thalairajbiryani.com"), // placeholder fallback URL
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Thalairaj Biryani | Premium Royal South Indian Dining",
    description:
      "Experience the Original 21 Spice Biryani crafted with 21 handpicked signature spices and slow cooked to dumpukht perfection.",
    url: "/",
    siteName: "Thalairaj Biryani",
    images: [
      {
        url: "/assets/hero_biryani_handi.png",
        width: 1200,
        height: 630,
        alt: "Thalairaj Premium 21 Spice Biryani",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#3B0764",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="font-sans bg-gold-light text-text-primary antialiased selection:bg-purple-brand selection:text-gold-light">
        {children}
      </body>
    </html>
  );
}
