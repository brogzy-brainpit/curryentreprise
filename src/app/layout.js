// import Header from "@/components/Header";
import { Bebas_Neue, Manjari} from "next/font/google";
import "./fonts.css";
import "./globals.css";
import NewsletterModal from "@/components/NewsletterModal";





export const metadata = {
  title: "curry enterprise - wedding video editing agency",
  description: "discription of what you offer, a kind of killer copy that sell & converts",
  openGraph: {
    title: "curry enterprise - wedding video editing agency",
    description: "discription of what you offer, a kind of killer copy that sell & converts",
    images: [
      {
        url: "/images/SEO.png", // <- place your image inside /public/images/SEO.png
        width: 1200,
        height: 630,
        alt: "curry enterprise wedding video editing preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "curry enterprise - wedding video editing agency",
    description: "discription of what you offer, a kind of killer copy that sell & converts",
    images: ["/images/SEO.png"], // <- same image for Twitter card
  },
};



// Load fonts with next/font (recommended, no hydration issues)
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });
const manjari = Manjari({ subsets: ["latin"], weight: ["100", "400", "700"], variable: "--font-manjari" });

export default function RootLayout({ children }) {
  return (
 <html lang="en" className="dark">
      <head />
      <body className={`${bebas.variable} ${manjari.variable}`}>
        {/* <Header /> */}
        {/* <NewsletterModal /> */}
        {children}
      </body>
    </html>
  );
}
