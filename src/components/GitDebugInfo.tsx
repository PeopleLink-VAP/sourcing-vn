import { useGitInfo } from "@/hooks/useGitInfo";

export const GitDebugInfo = () => {
  const { hash, date, message, loading, error } = useGitInfo();

  // Don't show anything if there's an error, no git info, or still loading
  if (loading || error || !hash) {
    return null;
  }

  return (
    <div className="text-xs text-muted-foreground/50 opacity-50 mt-2 border-t pt-2">
      <div 
        className="cursor-help hover:opacity-80 transition-opacity duration-200"
        title={message ? `Last commit: ${message}` : 'Git commit information'}
      >
        <span className="font-mono text-[10px]">
          {hash}
        </span>
        {date && (
          <span className="ml-2 text-[10px]">
            • {date}
          </span>
        )}
      </div>
    </div>
  );
};
