"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { supabase } from "../lib/supabase";


export default function BookmarkForm({ user }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!title || !url){
      toast.error("Please provide both title and URL");
      return;
    }

    const {error} = await supabase.from("bookmarks").insert([
      {
        title: title,
        url: url,
        user_id: user.id
      }
    ]);

    if(!error){
      toast.success("Bookmark added successfully!");
      setTitle("");
      setUrl("");


      // force immediate UI update by refreshing the page
      window.dispatchEvent(new Event("bookmark-added"))
    } 
  };



  return (
    <form onSubmit={handleSubmit} className="space-y-5 mt-13">
      <input
        type="text"
        placeholder="Enter bookmark title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-3 rounded-lg text-black"
      />

      <input
        type="url"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full border p-3 rounded-lg text-black"
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-bold text-xl cursor-pointer  py-3 rounded-lg hover:bg-indigo-700"
      >
        Add Bookmark
      </button>
    </form>
  );
}
