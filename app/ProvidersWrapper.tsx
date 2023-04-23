"use client";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}