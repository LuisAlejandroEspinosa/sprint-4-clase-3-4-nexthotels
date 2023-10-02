import { CurrentPageProvider } from './store/currentProvider';
import { Menu } from '../../components/molecules/menu/Menu';
import './globals.css';
import {Inter } from "next/font/google";


const fonts = Inter ({
  subsets: ["latin"],
  weigth: ["400", "500", "700", "800", "900"]
});

export const metadata = {
  title: 'Hoteles travelling',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CurrentPageProvider>
        <body className={fonts.className}>
          <Menu />
          {children}
        </body>
      </CurrentPageProvider>
    </html>
  )
}
