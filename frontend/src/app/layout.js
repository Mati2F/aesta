import {Inter} from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin']});

export const metadata = {
  title: 'Galería de Gráficos',
  description: 'Galería responsive que muestra visualización de datos.',
};

export default function RootLayout({children}){
  return(
    <html lang="es" className='bg-slate-950 text-white'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}