"use client";

import { Toaster } from "react-hot-toast";

export default function GlobalToaster() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          marginTop: "75px",
        },
      }}
    />
  );
}
