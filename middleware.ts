import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

export const config = {
    matcher: [
        "/users/:path*"
    ]
};

//TimeStamp : - 2.07:21