"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Admin = {
  id: number;
  email: string;
  role: string;
};

export const columns: ColumnDef<Admin>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
];
