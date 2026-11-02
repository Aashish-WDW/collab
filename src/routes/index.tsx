import { createFileRoute } from "@tanstack/react-router";
import { About, Closing, Difference, Events, Experiences, PhotoGallery, Header, Hero, Organizations, Partners, Retreats, SiteFooter } from "@/components/brochure/Sections";
import { PageNav } from "@/components/brochure/PageNav";
import { Splash } from "@/components/brochure/ui";

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
      <a href="#main" className="sr-only z-[60] rounded-full bg-gradient-brand px-4 py-2 font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <Splash />
      <Header />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <About />
        <Difference />
        <Experiences />
        <Retreats />
        <Events />
        <PhotoGallery />
        <Organizations />
        <Partners />
        <Closing />
      </main>
      <SiteFooter />
      <PageNav />
    </>
  );
}
