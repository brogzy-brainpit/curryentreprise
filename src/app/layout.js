// import Header from "@/components/Header";
import Header from "@/components/Header";
import { Bebas_Neue, Manjari} from "next/font/google";
import "./fonts.css";
import "./globals.css";
import NewsletterModal from "@/components/NewsletterModal";





export const metadata = {
  title: "curry enterprise - wedding video editing agency",
  description: "discription of what you offer, a kind of killer copy that sell & converts",
};


// Load fonts with next/font (recommended, no hydration issues)
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });
const manjari = Manjari({ subsets: ["latin"], weight: ["100", "400", "700"], variable: "--font-manjari" });

export default function RootLayout({ children }) {
  return (
 <html lang="en" className="dark">
      <head />
      <body className={`${bebas.variable} ${manjari.variable}`}>
        <Header />
        {/* <NewsletterModal /> */}
        {children}
      </body>
    </html>
  );
}
