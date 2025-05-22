"use server"

import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

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
      // Check if it's a duplicate email error
      if (error.code === "23505") {
        return { success: false, error: "This email is already subscribed to our newsletter" }
      }
      console.error("Supabase error:", error)
      return { success: false, error: "Failed to subscribe. Please try again." }
    }

    return { success: true, data: subscriber }
  } catch (error) {
    console.error("Subscribe error:", error)
    return { success: false, error: "An unexpected error occurred. Please try again." }
  }
}
