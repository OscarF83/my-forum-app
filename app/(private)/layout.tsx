import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UserProvider from "@/components/UserProvider";
import { cookies } from "next/headers";
import { serverGetUser } from "@/db/users";


type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export default async function RootLayout({ children }: LayoutProps) {
  const authCookie = cookies().get("auth");
  let user = null;
  if (authCookie) {
    const sessionId = authCookie.value;
    const userArray = await serverGetUser(sessionId);
    if (typeof userArray != "string" && userArray.length != 0) {
      user = userArray[0];
    }
  }
      return (
        <UserProvider user={user}>
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
        </UserProvider>
      );
}
