
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata ={
  title:"Smart Bookmark App",
  descriptions:"Bookmark Manager with Supabase and Next.js",
  icons:{
    icon:"/bookmark.png"
  }

};


export default function RootLayout({children}){
  return(
    <html>
      <body>{children}

        
      <Toaster position="top-right" autoClose={1000}  />
      </body>

    </html>
  )
}