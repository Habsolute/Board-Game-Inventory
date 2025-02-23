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
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <div className="flex">
          <SideFiltersBar />
          {children}
        </div>
      </body>
    </html>
  );
}
