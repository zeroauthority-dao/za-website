import { useState } from "react";
import Link from "next/link";
import { supabase } from "../utils/supabaseClient";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Link href="/">
        <a className="text-xl text-primary mb-8">Back to Home</a>
      </Link>
      <h1 className="text-4xl mb-16">Login to ZA</h1>
      <p className="text-2xl mb-8">
        Sign in via magic link with your email below
      </p>
      <div>
        <input
          className="rounded-full shadow-lg px-4 py-2 mb-8 text-2xl"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleLogin(email);
          }}
          className="bg-primary rounded-full px-4 py-2 shadow-lg text-2xl"
          disabled={loading}
        >
          <span>{loading ? "Loading" : "Send magic link"}</span>
        </button>
      </div>
    </div>
  );
}
