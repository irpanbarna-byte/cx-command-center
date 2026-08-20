export const metadata = {
  title: "CX Command Center",
  description: "Internal Customer Experience Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
