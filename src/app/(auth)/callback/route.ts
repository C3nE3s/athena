import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

// TODO: generate types from supabase and import them [https://supabase.com/docs/reference/javascript/typescript-support]
// import type { Database } from '@/libj/database.types'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {

    // TODO: replace any with supabase generated types
    const supabase = createRouteHandlerClient<any>({ cookies })
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(requestUrl.origin)
}
