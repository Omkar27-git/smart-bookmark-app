"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import { useRouter } from "next/navigation";
import { LogOut, Bookmark } from "lucide-react";
import BookmarkForm from "../../../components/BookmarkForm";
import BookmarkList from "../../../components/BookmarkList";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.push("/");
      } else {
        setUser(data.session.user);
      }
    };

    getSession();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (!user) return null;

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center mb-6 px-4 sm:px-6 lg:px-8">


        {/* LEFT — Title + Icon */}
        <div className="flex items-center gap-2 min-w-0">
          <Bookmark className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 shrink-0" />

          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 truncate">
            Smart Bookmark Dashboard
          </h1>
        </div>
        {/* RIGHT — Logout */}
        <button
          onClick={handleLogout}
          className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-200 transition shrink-0"
          title="Logout"
        >
          <LogOut className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
        </button>

      </div>

      {/* Welcome Card */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Welcome back, {user.user_metadata?.full_name || user.email.split(" ")[0]} 👋
        </h2>
      </div>

      {/* Bookmark Form */}
      <div className="max-w-2xl mx-auto">
        <BookmarkForm user={user} />
      </div>


      {/* Bookmark List */}
      <BookmarkList user={user} />

    </main>
  );
}
