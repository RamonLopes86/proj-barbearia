import localFont from "next/font/local";
import "./globals.css";


export const moch = localFont({

  src:"./fonts/Mochary.ttf",
  variable:'--fontMon',
  weight:"100 900"

});



export const metadata = {
  title: "Barbearia",
  description: "Barbearia com tratamento profissional especializado",

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
