import { Header } from "components/header/header";
import "./globals.css";
import { SideFiltersBar } from "components/sideFiltersBar/SideFiltersBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen">
        <Header />
        <div className="flex">
          <SideFiltersBar />
          {children}
        </div>
      </body>
    </html>
  );
}
