import type { MetaFunction } from "@remix-run/node";

import Logo from "~/components/Logo";
import Hero from "~/components/Hero";
import List from "~/components/List";

import { AdaptiveLayout } from "~/components/adaptive-ui/Layout/AdaptiveLayout";
import { Header } from "~/components/adaptive-ui/Layout/Header";
import { Footer } from "~/components/adaptive-ui/Layout/Footer";
import DoomGUI from "~/components/DoomGUI";
import { Heading } from "~/components/adaptive-ui/Text/Heading";

export const meta: MetaFunction = () => {
  return [{ title: "Loren Cerri" }];
};

const links = [
  { url: "https://twitter.com/lorencerri", label: "Twitter" },
  { url: "https://youtube.com/c/truexpixels", label: "YouTube" },
  { url: "https://github.com/lorencerri", label: "GitHub" },
];

export default function Index() {
  return (
    <AdaptiveLayout dots={{ seed: "gggg" }}>
      <Header logo={<Logo />} links={links} />
      <Hero />
      <List />
      <Heading text={"DOOM Party"} highlight="DOOM" />
      <DoomGUI />
      <Footer logo={<Logo />} links={links} />
    </AdaptiveLayout>
  );
}
