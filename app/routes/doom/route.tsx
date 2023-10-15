import type { MetaFunction } from "@remix-run/node";

import Logo from "~/components/Logo";

import { AdaptiveLayout } from "~/components/adaptive-ui/Layout/AdaptiveLayout";
import { Header } from "~/components/adaptive-ui/Layout/Header";
import DoomGUI from "~/components/DOOM/DoomGUI";

export const meta: MetaFunction = () => {
  return [{ title: "Play DOOM Party!" }];
};

const links = [
  { url: "https://twitter.com/lorencerri", label: "Twitter" },
  { url: "https://youtube.com/c/truexpixels", label: "YouTube" },
  { url: "https://github.com/lorencerri", label: "GitHub" },
];

export default function Route() {
  return (
    <AdaptiveLayout dots={{ seed: "gggg" }}>
      <Header logo={<Logo />} links={links} />
      <DoomGUI />
    </AdaptiveLayout>
  );
}
