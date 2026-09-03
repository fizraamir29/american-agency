import { createFileRoute } from "@tanstack/react-router";
import { GhostWritingPage } from "./services/ghost-writing";

export const Route = createFileRoute("/ghost-writing-services")({
  head: () => ({
    meta: [
      { title: "Ghost Writing Services in USA | Ghost Book Writing Experts" },
      { 
        name: "description", 
        content: "Professional ghost writing services for authors nationwide. From ebook ghostwriting to full manuscripts, our ghost book writing services turn ideas into published books." 
      },
      { property: "og:title", content: "Ghost Writing Services in USA | Ghost Book Writing Experts" },
      { 
        property: "og:description", 
        content: "Professional ghost writing services for authors nationwide. Turn your ideas into published books." 
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GhostWritingPage,
});
