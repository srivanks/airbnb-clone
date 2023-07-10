import "./globals.css";
import { Nunito } from "next/font/google";
import NavBar from "./components/navbar/NavBar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/modal";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal isOpen/>
          <NavBar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
