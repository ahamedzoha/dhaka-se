/* eslint-disable @typescript-eslint/no-non-null-assertion */
import LogtoClient from '@logto/next'

export const logtoClient = new LogtoClient({
  endpoint: process.env.LOGTO_ENDPOINT!,
  appId: process.env.LOGTO_APPID!,
  appSecret: process.env.LOGTO_APP_SECRET!,
  baseUrl: process.env.LOGTO_BASEURL!, // Change to your own base URL
  cookieSecret: process.env.LOGTO_COOKIE_SECRET!, // Auto-generated 32 digit secret
  cookieSecure: process.env.NODE_ENV === 'production',
})
