import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate, useLocation } from "react-router-dom";

const Auth = () => {
  const { signIn, signUp, signInWithGoogle, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || "/";

  const [emailIn, setEmailIn] = useState("");
  const [passIn, setPassIn] = useState("");
  const [emailUp, setEmailUp] = useState("");
  const [passUp, setPassUp] = useState("");
  const [loading, setLoading] = useState(false);

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSignIn = async () => {
    setLoading(true);
    const { error } = await signIn(emailIn, passIn);
    setLoading(false);
    if (error) toast({ title: "Login failed", description: error, variant: "destructive" });
    else toast({ title: "Welcome back" });
  };

  const handleSignUp = async () => {
    setLoading(true);
    const { error } = await signUp(emailUp, passUp);
    setLoading(false);
    if (error) toast({ title: "Sign up failed", description: error, variant: "destructive" });
    else toast({ title: "Check your email to confirm" });
  };

  const handleGoogle = async () => {
    const { error } = await signInWithGoogle();
    if (error) toast({ title: "Google sign-in failed", description: error, variant: "destructive" });
  };

  return (
    <main className="container mx-auto py-10">
      <SEO title="Login / Sign up — sourcing.vn" description="Access your sourcing.vn account to manage membership and newsletter preferences." />
      <h1 className="sr-only">Login or create account</h1>

      <div className="mx-auto max-w-md">
        <Card className="p-6">
          <Tabs defaultValue="login">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign up</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4 pt-4">
              <div className="space-y-2">
                <label className="text-sm">Email</label>
                <Input type="email" value={emailIn} onChange={(e) => setEmailIn(e.target.value)} placeholder="you@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm">Password</label>
                <Input type="password" value={passIn} onChange={(e) => setPassIn(e.target.value)} placeholder="••••••••" />
              </div>
              <Button className="w-full" onClick={handleSignIn} disabled={loading}>
                {loading ? "Please wait..." : "Login"}
              </Button>
              <Button variant="secondary" className="w-full" onClick={handleGoogle}>
                Continue with Google
              </Button>
            </TabsContent>

            <TabsContent value="signup" className="space-y-4 pt-4">
              <div className="space-y-2">
                <label className="text-sm">Email</label>
                <Input type="email" value={emailUp} onChange={(e) => setEmailUp(e.target.value)} placeholder="you@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm">Password</label>
                <Input type="password" value={passUp} onChange={(e) => setPassUp(e.target.value)} placeholder="At least 6 characters" />
              </div>
              <Button className="w-full" onClick={handleSignUp} disabled={loading}>
                {loading ? "Please wait..." : "Create account"}
              </Button>
              <p className="text-xs text-muted-foreground">We will email you a confirmation link.</p>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </main>
  );
};

export default Auth;
