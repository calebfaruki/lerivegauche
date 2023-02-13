import { ModuleOptions } from "simple-oauth2";

const client = {
  id: process.env.OAUTH_CLIENT_ID,
  secret: process.env.OAUTH_CLIENT_SECRET,
};

const auth = {
  tokenHost: "https://github.com",
  tokenPath: "/login/oauth/access_token",
  authorizePath: "/login/oauth/authorize",
};

const config: ModuleOptions = {
  client: {
    id: process.env.OAUTH_CLIENT_ID as string,
    secret: client.secret as string,
  },
  auth: {
    tokenHost: auth.tokenHost,
    tokenPath: auth.tokenPath,
    authorizePath: auth.authorizePath,
  },
};

export default config;
