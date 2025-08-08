import { SEO } from "@/components/SEO";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Plus, Eye, Edit, Trash, Send } from "lucide-react";
import { NewsletterForm } from "@/components/admin/NewsletterForm";

const NewslettersPage = () => {
  const campaignsQuery = useQuery({
    queryKey: ["newsletter_campaigns"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("newsletter_campaigns")
        .select("id, title, status, scheduled_at, created_at, updated_at")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'sent':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <SEO
        title="Newsletter Campaigns — Admin Portal"
        description="Manage newsletter campaigns and email marketing."
      />
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Newsletter Campaigns</h1>
            <p className="text-muted-foreground">
              Create and manage email campaigns for your subscribers.
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Campaign
          </Button>
        </div>

        {/* Create Campaign Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Create New Campaign
            </CardTitle>
          </CardHeader>
          <CardContent>
            <NewsletterForm onCreated={() => campaignsQuery.refetch()} />
          </CardContent>
        </Card>

        {/* Campaigns List */}
        <Card>
          <CardHeader>
            <CardTitle>All Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            {campaignsQuery.isLoading ? (
              <div className="flex items-center justify-center py-8">
                <p className="text-muted-foreground">Loading campaigns...</p>
              </div>
            ) : campaignsQuery.data?.length ? (
              <div className="space-y-4">
                {campaignsQuery.data.map((campaign: any) => (
                  <div key={campaign.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium">{campaign.title}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                          {campaign.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Created: {new Date(campaign.created_at).toLocaleDateString()}</span>
                        {campaign.scheduled_at && (
                          <span>Scheduled: {new Date(campaign.scheduled_at).toLocaleDateString()}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" title="View">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Edit">
                        <Edit className="h-4 w-4" />
                      </Button>
                      {campaign.status === 'draft' && (
                        <Button variant="ghost" size="icon" title="Send" className="text-blue-600 hover:text-blue-700">
                          <Send className="h-4 w-4" />
                        </Button>
                      )}
                      <Button variant="ghost" size="icon" title="Delete" className="text-red-600 hover:text-red-700">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8">
                <Mail className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="font-medium text-lg mb-2">No campaigns yet</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Create your first newsletter campaign to engage with your subscribers.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default NewslettersPage;
