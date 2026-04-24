import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "3 Patti Ludo",
    short_name: "3PattiLudo",
    description:
      "Pakistan's favorite Teen Patti + Ludo gaming app. Win real PKR with EasyPaisa & JazzCash payouts.",
    start_url: "/",
    display: "standalone",
    background_color: "#06130B",
    theme_color: "#06130B",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
