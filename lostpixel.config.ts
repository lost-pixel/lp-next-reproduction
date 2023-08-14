import { CustomProjectConfig } from "lost-pixel";

export const config: CustomProjectConfig = {
  pageShots: {
    pages: [{ path: "/", name: "/" }],
    // IP should be localhost when running locally & 172.17.0.1 when running in GitHub action
    baseUrl: "http://172.17.0.1:3000",
  },
  // OSS mode
  generateOnly: true,
  failOnDifference: true,

  // Lost Pixel Platform (to use in Platform mode, comment out the OSS mode and uncomment this part )
  // lostPixelProjectId: "xxxx",
  // process.env.LOST_PIXEL_API_KEY,
};
