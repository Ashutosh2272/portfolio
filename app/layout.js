import { Outfit, Ovo, Roboto,  } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

 const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto",
 })
 
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Portfolio- Ashutosh",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${ovo.variable} ${roboto.variable} antialiased leading-5 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
