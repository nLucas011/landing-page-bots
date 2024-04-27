/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.discordapp.com",
          port: "",
          pathname: "/icons/**",
        },
        {
          protocol: "https",
          hostname: "cdn.discordapp.com",
          port: "",
          pathname: "/avatars/**",
        },
        {
          protocol: "https",
          hostname: "media.discordapp.net",
          port: "",
          pathname: "/attachments/**",
        },
        {
          protocol: "https",
          hostname: "cdn.discordapp.com",
          port: "",
          pathname: "/attachments/**",
        },
        {
          protocol: "https",
          hostname: "i.postimg.cc",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "cdn.ggmax.com.br",
          port: "",
          pathname: "/images/**",
        },
        {
          protocol: "https",
          hostname: "images.ctfassets.net",
          port: "",
          pathname: "/y2ske730sjqp/**",
        },
        {
          protocol: "https",
          hostname: "images-ext-1.discordapp.net",
          port: "",
          pathname: "/external/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  