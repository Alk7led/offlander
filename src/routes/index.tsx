import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$750 SHEIN Gift Card Reward Offer" },
      {
        name: "description",
        content:
          "Claim a $750 SHEIN gift card reward: enter your email, complete a qualifying activity, and get your reward delivered by email.",
      },
      { property: "og:title", content: "$750 SHEIN Gift Card Reward Offer" },
      {
        property: "og:description",
        content:
          "Enter your email, complete a qualifying activity, and get your reward delivered by email.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/offer.html");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <a href="/offer.html" className="text-sm text-muted-foreground underline">
        Open the offer page
      </a>
    </div>
  );
}
