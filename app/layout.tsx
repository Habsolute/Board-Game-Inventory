import { Header } from "components/header/header";
import "./globals.css";
import { SideFiltersBar } from "components/sideFiltersBar/SideFiltersBar";
import { FiltersCollectionProvider } from "providers/FiltersCollectionProvider";

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
        {children}
      </body>
    </html>
  );
}
