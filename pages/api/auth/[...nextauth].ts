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
  secret: "94d25574656a8ee61f1adb9d18435c36",
});

// clientId:"222976448496-cb46irpvt50119r1fkh20pff16a3oen3.apps.googleusercontent.com"
// clientSecret: "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"
// Tein
//clientId:586486200042-n2gsukec90iep47p3erp515l30m5ar68.apps.googleusercontent.com
//clientSecret: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
