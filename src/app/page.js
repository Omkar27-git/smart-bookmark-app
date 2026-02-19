import LoginButton from "../../components/LoginButton";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 px-4">
      
      <section className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-md sm:max-w-lg text-center">
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Smart Bookmark
        </h1>

        <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
          Organize, manage, and access your favorite links anytime.
          Securely store your bookmarks with real-time updates.
        </p>

        <LoginButton /> 

        <p className="text-xs text-gray-400 mt-6">
          Secure login powered by Google OAuth
        </p>
      </section>
    </main>
  );
}
