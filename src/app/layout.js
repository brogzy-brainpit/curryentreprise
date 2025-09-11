// import Header from "@/components/Header";
import { Bebas_Neue, Manjari} from "next/font/google";
import "./fonts.css";
import "./globals.css";
import NewsletterModal from "@/components/NewsletterModal";
import {base} from "../../axios";




export const metadata = {
 
  title:{
    default:  "curry enterprise - wedding video editing agency",
    template:"%s - bymemet"
  },
  description: "We help wedding videographers save time and scale their business with professional, cinematic video edits delivered fast, polished, and stress-free.",
  openGraph: {
         title: "curry enterprise - wedding video editing agency",
  description: "We help wedding videographers save time and scale their business with professional, cinematic video edits delivered fast, polished, and stress-free."
,url:`${base}/`,
        images: [{url:'http://res.cloudinary.com/brainpit/image/upload/v1757599932/nn3jovp2uhu45ld85rkx.png'}],
        // images: [{url: `open-graph/?slug=${slug}`}],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        site: "@bok_cheza",
         title: "curry enterprise - wedding video editing agency",
          description: "We help wedding videographers save time and scale their business with professional, cinematic video edits delivered fast, polished, and stress-free.",
        images: [{url:'http://res.cloudinary.com/brainpit/image/upload/v1757599932/nn3jovp2uhu45ld85rkx.png',width:1200,height:630,alt:`image for curry entreprise`}],
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
