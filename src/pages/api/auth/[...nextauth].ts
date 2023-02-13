import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GithubProvider({
      clientId: process.env.OAUTH_CLIENT_ID as string,
      clientSecret: process.env.OAUTH_CLIENT_SECRET as string,
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  secret: process.env.NEXT_AUTH_SECRET,
};

export default NextAuth(authOptions);
