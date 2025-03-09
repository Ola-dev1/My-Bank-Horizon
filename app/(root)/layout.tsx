import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Godzilla", lastName: "Kush" };

  return (
    <main className="flex h-screen w-full f}ont-inter ">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.png" width={30} height={30} alt="menu icon" />
          <MobileNav user={loggedIn} />
        </div>
        {children}
      </div>
    </main>
  );
}
