import connectDB from "@/app/lib/db";
import User from "@/app/lib/user";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
export const authOption: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.CLIENT_SECRET as string
        })
    ],
    callbacks: {
        async signIn(data) {
            console.log(data);
            await connectDB()
            const isExist = await User.findOne({ email: data.user.email })
            if (!isExist) {
                await User.create({
                    name: data.user.name,
                    email: data.user.email,
                    image: data.user.image,
                })
            }
            return true
        }
    }
}
const handler = NextAuth(authOption)

export { handler as GET, handler as POST } 