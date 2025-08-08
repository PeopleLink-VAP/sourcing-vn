import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

interface Profile {
  id?: string;
  user_id: string;
  email: string;
  full_name?: string | null;
  avatar_url?: string | null;
  role?: string | null; // 'admin' | 'editor' | 'member'
  membership_tier?: string | null;
}

interface AuthContextValue {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  isAdmin: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signUp: (email: string, password: string) => Promise<{ error: string | null }>;
  signInWithGoogle: () => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((event, sess) => {
      setSession(sess);
      setUser(sess?.user ?? null);

      // Defer fetching profile to avoid deadlocks
      if (sess?.user) {
        setTimeout(() => {
          fetchProfile(sess.user.id).catch(() => undefined);
        }, 0);
      } else {
        setProfile(null);
      }
    });

    // Initialize
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(data.session?.user ?? null);
      if (data.session?.user) {
        fetchProfile(data.session.user.id).catch(() => undefined);
      }
      setLoading(false);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const fetchProfile = async (uid: string) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("id, user_id, email, full_name, avatar_url, role, membership_tier")
      .eq("user_id", uid)
      .maybeSingle();

    if (error) return;

    if (!data && user) {
      // Create initial profile if missing
      await supabase.from("profiles").insert({
        user_id: user.id,
        email: user.email || "",
        full_name: user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split("@")[0] || "User",
        role: "member",
        membership_tier: "basic",
      });
      const { data: created } = await supabase
        .from("profiles")
        .select("id, user_id, email, full_name, avatar_url, role, membership_tier")
        .eq("user_id", uid)
        .maybeSingle();
      setProfile(created as Profile | null);
    } else {
      setProfile(data as Profile | null);
    }
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error?.message ?? null };
  };

  const signUp = async (email: string, password: string) => {
    const redirectUrl = `${window.location.origin}/`;
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: redirectUrl },
    });
    return { error: error?.message ?? null };
  };

  const signInWithGoogle = async () => {
    const redirectUrl = `${window.location.origin}/`;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: redirectUrl },
    });
    return { error: error?.message ?? null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const isAdmin = useMemo(() => (profile?.role ?? "") === "admin", [profile?.role]);

  const value: AuthContextValue = {
    user,
    session,
    profile,
    isAdmin,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
