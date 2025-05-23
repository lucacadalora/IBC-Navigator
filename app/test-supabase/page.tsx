"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { testSupabaseConnection } from "@/actions/test-supabase"

export default function TestSupabasePage() {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const runTest = async () => {
    setLoading(true)
    try {
      const testResult = await testSupabaseConnection()
      setResult(testResult)
    } catch (error) {
      setResult({ success: false, error: "Client-side error occurred", details: error })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-8 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6">Supabase Connection Test</h1>

      <Button onClick={runTest} disabled={loading} className="mb-6">
        {loading ? "Testing..." : "Test Supabase Connection"}
      </Button>

      {result && (
        <div
          className={`p-4 rounded-md ${result.success ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
        >
          <h2 className="text-lg font-semibold mb-2">
            {result.success ? "✅ Connection Successful" : "❌ Connection Failed"}
          </h2>

          <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96 text-sm">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}

      <div className="mt-8 bg-gray-50 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Troubleshooting Tips</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Verify that your Supabase URL and Service Role Key are correctly set in your environment variables</li>
          <li>
            Check that the <code>subscribers</code> table exists in your Supabase database
          </li>
          <li>Ensure your Supabase service role key has the necessary permissions</li>
          <li>Verify network connectivity to Supabase</li>
          <li>Check for any IP restrictions on your Supabase project</li>
        </ul>
      </div>
    </div>
  )
}
