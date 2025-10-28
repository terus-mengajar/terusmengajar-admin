import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm text-center border border-gray-200 p-18 rounded-2xl">
        <img
          src="/images/logo/logo-tm-warna.avif"
          width={80}
          className="mx-auto mb-8"
        />
        <h1 className="mb-6 text-2xl font-semibold">Admin</h1>

        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/dashboard" });
          }}
        >
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 cursor-pointer"
          >
            <FcGoogle className="h-5 w-5" />
            Masuk dengan Google
          </Button>
        </form>
      </div>
    </div>
  );
}
