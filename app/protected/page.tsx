import { createClient } from "../../utils/supabase/server";
import { redirect } from "next/navigation";
import { SignOutButton } from "../../components/Auth/signout-button";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <span>Your email: {user?.email}</span>
      <SignOutButton />
    </div>
  );
}
