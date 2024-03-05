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
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        ></link>
      </head>
      <body className={inter.className}>
        <Navegation />
        <div className="container p-4">{children}</div>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          defer
        ></script>
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
