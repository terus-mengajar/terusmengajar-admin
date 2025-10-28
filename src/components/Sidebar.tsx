// components/sidebar.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Home, Users, Settings } from "lucide-react";

export function Sidebar({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "flex h-full w-64 flex-col border-r bg-background p-4",
        className
      )}
    >
      <div className="mb-6 text-lg font-semibold">My Dashboard</div>
      <nav className="space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
        >
          <Home size={18} /> Home
        </Link>
        <Link
          href="/users"
          className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
        >
          <Users size={18} /> Users
        </Link>
        <Link
          href="/settings"
          className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
        >
          <Settings size={18} /> Settings
        </Link>
      </nav>
    </aside>
  );
}
