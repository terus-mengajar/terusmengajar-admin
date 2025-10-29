"use client";

import { useEffect, useState } from "react";
import { DataTable } from "@/components/data-table";
import { columns, Admin } from "./columns";

export default function Data() {
  const [data, setData] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/admin`);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return <DataTable columns={columns} data={data} loading={loading} />;
}
