import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
const env = process.env
export default NextAuth({
  providers: [
    GoogleProvider({
        clientId: env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
        clientSecret: env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code"
          }
        },
    })
    // ...add more providers here
  ],
  callbacks: {
    // async signIn({ account, profile }) {
    //   console.log('account')
    //   console.log(account)
    //   console.log(profile)
    //   return false // Do different verification for other providers that don't have `email_verified`
    // },
    jwt: ({ token, account, profile }) => {
      console.log('token')
      console.log(token)
      if(account){
        console.log('account')
        console.log(account)
        console.log(profile)
      }
      return token;
    },
    session: ({ session }) => {
      console.log('session')
      console.log(session);
      // console.log(token);
      return session;
    }
  },
  session: {
    strategy: 'jwt'
  },
  // pages: {
  //   signIn: '/login'
  // },
  secret: env.NEXTAUTH_SECRET,
})