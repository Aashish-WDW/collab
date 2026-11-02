import { createFileRoute } from "@tanstack/react-router";
import { About, Closing, Difference, Events, Experiences, Header, Hero, Organizations, Partners, Retreats } from "@/components/brochure/Sections";
import { PageNav } from "@/components/brochure/PageNav";

const title = "GoLookAround | Curated for the curious.";
const description = "Handpicked experiences, retreats and events, chosen so you don't have to search.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "GoLookAround" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Difference />
        <Experiences />
        <Retreats />
        <Events />
        <Organizations />
        <Partners />
        <Closing />
      </main>
      <PageNav />
    </>
  );
}
