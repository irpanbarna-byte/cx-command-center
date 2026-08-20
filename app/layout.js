import "./globals.css";

export const metadata = {
  title: "CX Command Center | Lion Parcel",
  description: "Customer Experience Command Center - Lion Parcel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
