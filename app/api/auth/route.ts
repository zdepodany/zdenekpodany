import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    redirect_uri: `${process.env.NEXT_PUBLIC_SITE_URL}/api/callback`,
    scope: 'repo,user',
  })
  return Response.redirect(`https://github.com/login/oauth/authorize?${params}`)
}
