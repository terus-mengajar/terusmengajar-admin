import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import toast from "react-hot-toast";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/", // opsional — sesuaikan halaman login-mu
    error: "/", // redirect kalau gagal
  },
  callbacks: {
    async signIn({ user }) {
      try {
        // cek apakah email terdaftar di D1
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/check`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: user.email }),
        });

        const data = await res.json();

        // misal API /api/users/check kembalikan { exists: true } kalau ada
        if (!data.exists) {
          console.error("Email tidak terdaftar:", user.email);
          toast.error("Email tidak terdaftar!");
          return false; // tolak login
        }

        return true; // izinkan login
      } catch (e) {
        console.error("Gagal cek ke D1:", e);
        return false; // kalau error, tolak juga
      }
    },

    async jwt({ token, account }) {
      if (account) {
        token.provider = account.provider;
      }
      return token;
    },

    async session({ session, token }) {
      if (token?.provider) {
        (session).provider = token.provider;
      }
      return session;
    },
  },
});
