import SideForm from "@/components/SideForm";

type LayoutProps = {
  children: React.ReactNode;
};
export default async function Layout({ children }: LayoutProps) {
  
  return (
    <div className="hsidebar w-60 flex flex-row items-stretch py-40 bg-stone-600">
      <SideForm/>
      <div>{children}</div>
    </div>
  );
}