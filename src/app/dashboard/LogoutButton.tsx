"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";

export default function LogoutButton() {
  // toast.success("Logout berhasil")
  return (
    <Button
      onClick={async () => {
        toast.success("Logout berhasil");
        await signOut({ redirectTo: "/" });
      }}
      className="cursor-pointer"
    >
      Logout
    </Button>
  );
}
