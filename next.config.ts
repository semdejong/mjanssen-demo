import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // Demo's: nooit indexeren, op elke route.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async redirects() {
    const rules: { source: string; destination: string }[] = [
      { source: "/muren-stuken", destination: "/sausklaar" },
      { source: "/stuken/muren-stucen", destination: "/sausklaar" },
      { source: "/stuken/muren-stuken", destination: "/sausklaar" },
      { source: "/wanden-stuken", destination: "/wanden" },
      { source: "/stuken/wanden-stuken", destination: "/wanden" },
      { source: "/plafond-stuken", destination: "/wanden" },
      { source: "/stuken/plafond-stuken", destination: "/wanden" },
      { source: "/buitenmuur-stuken", destination: "/buitenmuur" },
      { source: "/stuken/buitenmuur-stuken", destination: "/buitenmuur" },
      { source: "/badkamer-stuken", destination: "/badkamer" },
      { source: "/stuken/badkamer-stuken", destination: "/badkamer" },
      { source: "/beton-cire-betonstuc", destination: "/beton-cire" },
      { source: "/stuken/beton-cire-stukwerk", destination: "/beton-cire" },
      { source: "/airless-latex-spuiten", destination: "/airless" },
      { source: "/stuken/airless-latex-spuiten", destination: "/airless" },
      { source: "/stuken/sausen", destination: "/sausen" },
      { source: "/stuken/spachtelputz", destination: "/spachtelputz" },
      { source: "/plafondlijsten-en-ornamenten", destination: "/lijsten" },
      { source: "/stuken/plafondijsten-en-ornamenten", destination: "/lijsten" },
      { source: "/plafondijsten-en-ornamenten", destination: "/lijsten" },
      { source: "/onze-diensten", destination: "/diensten" },
      { source: "/onze-projecten", destination: "/projecten" },
      { source: "/projecten/:slug", destination: "/projecten" },
    ];
    return rules.map((rule) => ({ ...rule, permanent: false }));
  },
};

export default nextConfig;
