import { generateSocialImage } from "./generateSocialImage";
import type { DefaultSeoProps } from "next-seo";

const title = "emmacampbell.dev";
const description =
  "My digital space where I share my growth as a software engineer.";
const domain = "emmacampbell.dev";
const twitter = "@spoonsandcode";
const meta = "Healthcare Software Engineer and Chronic Illness Warrior";

export const seo: DefaultSeoProps = {
  title: `${title} | ${meta}`,
  description,
  openGraph: {
    title,
    type: "website",
    url: `https://${domain}`,
    site_name: title,
    images: [
      {
        url: generateSocialImage({
          title,
          imagePublicId: "social_card.png",
          twitterName: twitter,
        }),
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    handle: twitter,
    cardType: "summary_large_image",
  },
};
