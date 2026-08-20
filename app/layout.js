import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata = {
  title: "CX Command Center | Lion Parcel",
  description: "Enterprise Customer Experience Command Center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${jakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
