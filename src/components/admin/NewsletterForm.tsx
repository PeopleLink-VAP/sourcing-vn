import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";

interface NewsletterFormProps {
  onCreated?: () => void;
}

export const NewsletterForm = ({ onCreated }: NewsletterFormProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [scheduledAt, setScheduledAt] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!user) return;
    setLoading(true);
    const scheduled = scheduledAt ? new Date(scheduledAt).toISOString() : null;
    const { error } = await (await import("@/integrations/supabase/client")).supabase
      .from("newsletter_campaigns")
      .insert({
        title,
        content,
        status: scheduled ? "scheduled" : "draft",
        scheduled_at: scheduled,
        created_by: user.id,
      });
    setLoading(false);
    if (error) {
      toast({ title: "Failed to create campaign", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Campaign created" });
      setTitle("");
      setContent("");
      setScheduledAt("");
      onCreated?.();
    }
  };

  return (
    <Card className="p-4 space-y-3">
      <div>
        <label className="text-sm">Title</label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Monthly update" />
      </div>
      <div>
        <label className="text-sm">Content (HTML or Markdown)</label>
        <textarea className="w-full min-h-32 rounded-md border p-2" value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div>
        <label className="text-sm">Schedule (optional)</label>
        <Input type="datetime-local" value={scheduledAt} onChange={(e) => setScheduledAt(e.target.value)} />
      </div>
      <Button onClick={handleCreate} disabled={loading || !title}>
        {loading ? "Creating..." : "Create Campaign"}
      </Button>
    </Card>
  );
};
