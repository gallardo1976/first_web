import { Inter } from "next/font/google";
import "./globals.css";
import Navegation from "../componentes/navegacion";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mi primera web",
  description: "generado por Gallardoy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/5/flatly/bootstrap.min.css"
        />
      </head>
      <body className={inter.className}>
        <Navegation />
        <div className="container p-4">{children}</div>
      </body>
    </html>
  );
}

//import { Inter } from "next/font/google";
//import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });

//export const metadata = {
//  title: "Create Next App",
// description: "Generated by create next app",
