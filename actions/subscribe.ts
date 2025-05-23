"use server"

import { createClient } from "@supabase/supabase-js"

// Create a singleton Supabase client for server-side operations
const getSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Supabase URL or Service Role Key is missing")
  }

  return createClient(supabaseUrl, supabaseServiceKey)
}

interface SubscribeData {
  name: string
  email: string
  institution: string
}

export async function subscribeUser(data: SubscribeData) {
  try {
    // Validate input
    if (!data.name || !data.email) {
      return { success: false, error: "Name and email are required" }
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return { success: false, error: "Please enter a valid email address" }
    }

    // Get Supabase client
    const supabase = getSupabaseClient()

    // Insert subscriber into database
    const { data: subscriber, error } = await supabase
      .from("subscribers")
      .insert([
        {
          name: data.name.trim(),
          email: data.email.toLowerCase().trim(),
          institution: data.institution?.trim() || null,
          status: "active",
          verified: false,
        },
      ])
      .select()

    if (error) {
      console.error("Supabase error details:", error)

      // Check if it's a duplicate email error
      if (error.code === "23505" || error.message?.includes("duplicate")) {
        return { success: false, error: "This email is already subscribed to our newsletter" }
      }

      return {
        success: false,
        error: `Failed to subscribe: ${error.message || "Please try again later"}`,
      }
    }

    console.log("Successfully subscribed:", subscriber)
    return { success: true, data: subscriber }
  } catch (error: any) {
    console.error("Subscribe error:", error)
    return {
      success: false,
      error: `An unexpected error occurred: ${error.message || "Please try again later"}`,
    }
  }
}
