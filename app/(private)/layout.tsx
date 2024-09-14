import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
