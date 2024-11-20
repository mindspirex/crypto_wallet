import "@/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#e2dffe]">{children}</body>
    </html>
  );
}
