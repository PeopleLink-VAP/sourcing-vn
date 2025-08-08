import { SEO } from "@/components/SEO";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Plus, Edit, Trash } from "lucide-react";

const MembershipsPage = () => {
  const tiersQuery = useQuery({
    queryKey: ["membership_tiers"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("membership_tiers")
        .select("id, name, price, description, features, created_at, updated_at")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <>
      <SEO
        title="Membership Tiers — Admin Portal"
        description="Manage membership tiers and pricing plans."
      />
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Membership Tiers</h1>
            <p className="text-muted-foreground">
              Manage membership tiers and pricing plans for your platform.
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add New Tier
          </Button>
        </div>

        {tiersQuery.isLoading ? (
          <div className="flex items-center justify-center py-8">
            <p className="text-muted-foreground">Loading membership tiers...</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tiersQuery.data?.map((tier: any) => (
              <Card key={tier.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      {tier.name}
                    </CardTitle>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <p className="text-2xl font-bold text-primary">
                        ${tier.price || 0}
                        <span className="text-sm font-normal text-muted-foreground">/month</span>
                      </p>
                    </div>
                    
                    {tier.description && (
                      <p className="text-sm text-muted-foreground">
                        {tier.description}
                      </p>
                    )}
                    
                    {tier.features && tier.features.length > 0 && (
                      <div>
                        <h4 className="font-medium text-sm mb-2">Features</h4>
                        <ul className="space-y-1">
                          {tier.features.map((feature: string, index: number) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-1 h-1 bg-primary rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="pt-4 border-t text-xs text-muted-foreground">
                      Created: {new Date(tier.created_at).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        {!tiersQuery.isLoading && tiersQuery.data?.length === 0 && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-8">
              <Users className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="font-medium text-lg mb-2">No membership tiers yet</h3>
              <p className="text-muted-foreground text-center mb-4">
                Create your first membership tier to get started with subscription management.
              </p>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Create First Tier
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default MembershipsPage;
