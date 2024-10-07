import localFont from "next/font/local";
import "./globals.css";


const moch = localFont({

  src:"./fonts/Mochary.ttf",
  variable:'--fontMon',
  weight:"100 900"

});



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",

  icons:{
    icon:'/favicon.ico'
  }
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${moch.variable}`}>
        {children}
      </body>
    </html>
  );
}
