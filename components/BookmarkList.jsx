"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";

export default function BookmarkList({ user }) {
  const [bookmarks, setBookmarks] = useState([]);

  //  Fetch bookmarks
  const fetchBookmarks = async () => {
    const { data, error } = await supabase
      .from("bookmarks")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setBookmarks(data);
  };

  useEffect(() => {
    // ✅ initial load
    fetchBookmarks();

    // ✅ realtime subscription
    const channel = supabase
      .channel("bookmarks-realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "bookmarks",
        },
        () => {
          fetchBookmarks();
        }
      )
      .subscribe();

    // ✅ cleanup
    return () => {
      supabase.removeChannel(channel);
      window.removeEventListener("bookmark-added", handleManualUpdate);
    };
  }, []);


  const handleManualUpdate = ()=>{
    fetchBookmarks();
  }

  window.addEventListener("bookmark-added", handleManualUpdate);

  // 🔹 Delete bookmark
  const handleDelete = async (id) => {
    const { error } = await supabase
      .from("bookmarks")
      .delete()
      .eq("id", id);

    if (!error) {
      toast.success("Bookmark deleted");
      fetchBookmarks();
    } else {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-xl shadow-md">
      
      {/* Title darker */}
      <h2 className="text-xl font-semibold mb-4 text-black">
        Your Bookmarks List
      </h2>

      {/*  Scrollable area */}
      <div className="max-h-[400px] overflow-y-auto">
        <table className="min-w-[600px] w-full border border-gray-200 rounded-lg">
          
          {/*  Sticky header + dark text */}
          <thead className="bg-gray-100 sticky top-0">
            <tr className="text-black">
              <th className="p-3 text-left">SL.No</th>
              <th className="p-3 text-left">Site</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">URL</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {bookmarks.map((bookmark, index) => {
              const domain = bookmark.url
                .replace("https://", "")
                .replace("http://", "")
                .split("/")[0];

              return (
                <tr key={bookmark.id} className="border-t text-black">
                  
                  {/* Serial */}
                  <td className="p-3">{index + 1}</td>

                  {/* Favicon */}
                  <td className="p-3">
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${domain}`}
                      alt="icon"
                      className="w-5 h-5"
                    />
                  </td>

                  {/* Title */}
                  <td className="p-3 font-medium">
                    {bookmark.title}
                  </td>

                  {/* URL */}
                  <td className="p-3 text-blue-700 underline">
                    <a
                      href={bookmark.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {bookmark.url}
                    </a>
                  </td>

                  {/* Delete */}
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(bookmark.id)}
                      className="p-2 rounded-lg cursor-pointer hover:bg-red-50 transition"
                    >
                      <Trash2 className="w-5 h-5 text-red-600" />
                    </button>
                  </td>
                </tr>
              );
            })}

            {bookmarks.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="p-6 text-center text-black"
                >
                  No bookmarks yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
