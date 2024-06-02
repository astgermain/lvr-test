"use client";

import { useState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { createClient } from "../../utils/supabase/client";

export function SignOutButton() {
  const router = useRouter();
  const supabase = createClient();
  const [user, setUser] = useState(null);
  const [signout, setSignout] = useState(false);
  const getUser = async () => {
    const userData = await supabase.auth.getUser();
    setUser(userData?.data?.user);
    if (!userData?.data?.user) {
      router.push("/login");
    }
    return userData;
  };
  useEffect(() => {
    getUser();
  }, [signout]);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    setSignout(true);
  };

  return (
    <button
      onClick={signOut}
      className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
      style={{ background: "#0061e0", color: "white" }}
      type="submit"
    >
      Sign Out
    </button>
  );
}
