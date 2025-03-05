import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container flex justify-between bg-red-300 sm:bg-blue-300 bg-red">
          <div>
            <LeftBar/>
          </div>
          <div>{children}</div>
          <div>
            <RightBar/>
          </div>
        </div>
      </body>
    </html>
  );
}