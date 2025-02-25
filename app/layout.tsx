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
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <div className="w-60">
            <SideFiltersBar />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
