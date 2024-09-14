import SideForm from "@/components/SideForm";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
  params:{
    forumId: string;
  }
};

export default async function Layout({ children, params }: LayoutProps) {

  const {forumId} = params;

  return (
    <div className="hsidebar w-60 flex flex-row items-stretch py-40 bg-stone-600">
      <SideForm sideForumId={forumId}/>
      <div>{children}</div>
    </div>
  );
}