"use client"


import { supabase } from "../lib/supabase"



export const LoginButton = () => {

    const handleLogin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: "http://localhost:3000/dashboard"
            }
        })
    }
    return (
        <button
            onClick={handleLogin}
            className="w-full cursor-pointer flex items-center justify-center gap-3 py-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition duration-200">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5" />

            <span className="text-black ">Continue with Google</span>
        </button>
    )
}

export default LoginButton
