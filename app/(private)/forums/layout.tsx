import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};
export default async function Layout({ children }: LayoutProps) {
  return <div>{children}</div>;
}
