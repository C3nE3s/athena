import { createMiddlewareClient} from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

// TODO: generate types from supabase and import them [https://supabase.com/docs/reference/javascript/typescript-support]
// import type { Database } from '@/libj/database.types'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  // imported supabase gen types replaces any below
  const supabase = createMiddlewareClient<any>({ req, res })
  await supabase.auth.getSession()
  return res
}
