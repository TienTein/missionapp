import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "586486200042-n2gsukec90iep47p3erp515l30m5ar68.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});
