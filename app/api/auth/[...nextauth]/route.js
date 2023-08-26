import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_API_KEY,
    }),
  ],

  callbacks: {
    //to get the data about the user every single time to keep an existing and running session
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });

      //updating the session id to know which user is under session or online
      session.user.id = sessionUser._id.toString();
      return session;
    },
    // secret: process.env.NEXTAUTH_SECRET,
    //SignIn function which also creates a user automatically in the db in case it doesnot exists
    async signIn({ profile }) {
      try {
        await connectToDB();

        //check if user already exists
        const userExists = await User.findOne({
          email: profile.email,
        });

        //if not, create a new user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
