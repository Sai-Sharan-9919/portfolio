import "./globals.css";

export const metadata = {
  title: "Mr.26 Portfolio",
  description: "AI & ML Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}