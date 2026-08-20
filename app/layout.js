import "./globals.css";

export const metadata = {
  title: "CX Command Center",
  description: "Lion Parcel Customer Experience Command Center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
