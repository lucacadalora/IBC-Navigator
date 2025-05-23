"use server"

import { createClient } from "@supabase/supabase-js"

export async function testSupabaseConnection() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseServiceKey) {
      return {
        success: false,
        error: "Supabase URL or Service Role Key is missing",
        env: {
          hasUrl: !!supabaseUrl,
          hasKey: !!supabaseServiceKey,
        },
      }
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Test a simple query
    const { data, error } = await supabase.from("subscribers").select("count(*)", { count: "exact", head: true })

    if (error) {
      return {
        success: false,
        error: `Database query failed: ${error.message}`,
        details: error,
      }
    }

    return {
      success: true,
      message: "Supabase connection successful",
      data,
    }
  } catch (error: any) {
    return {
      success: false,
      error: `Connection test failed: ${error.message}`,
      stack: error.stack,
    }
  }
}
