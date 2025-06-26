import React from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-white to-emerald-200 dark:from-slate-900 dark:to-slate-800">
            <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">Sign in to your account</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Welcome back! Please enter your details.</p>
                </div>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <input type="checkbox" className="accent-emerald-500" />
                            Remember me
                        </label>
                        <a href="#" className="text-emerald-600 dark:text-emerald-400 text-sm hover:underline">
                            Forgot password?
                        </a>
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg transition">
                        Sign In
                    </Button>
                </form>
                <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                    Don&apos;t have an account?{" "}
                    <Link to="/register" className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login