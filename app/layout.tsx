'use client'
import "./globals.css";
import { useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    smoothscroll.polyfill() // enables smooth scroll globally
  }, [])
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo+Mono:ital,wght@0,100..900;1,100..900&family=Chivo:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </head>
     
      <body
        
      >
        {children}
      </body>
    </html>

    
  );
}
