"use client";

import { ColumnDef } from "@tanstack/react-table";

export type FunpaperCalistung = {
  id: number;
  created_at: string;
  name: string;
  slug: string;
  link: string;
  image_url: string;
  downloaded: number;
};

export const columns: ColumnDef<FunpaperCalistung>[] = [
  {
    accessorKey: "created_at",
    header: "Created At",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
  {
    accessorKey: "link",
    header: "Link",
  },
  {
    accessorKey: "image_url",
    header: "Image",
  },
  {
    accessorKey: "downloaded",
    header: "Downloaded",
  },
];
