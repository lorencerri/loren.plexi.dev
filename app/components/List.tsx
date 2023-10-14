import classes from "./List.module.css";

import {
  IconBrandAppleArcade,
  IconBrandYoutube,
  IconBuildingCommunity,
  IconPackage,
  IconRobot,
} from "@tabler/icons-react";

import { Accordion, Container } from "@mantine/core";
import ListItem from "./ListItem";

export default function List() {
  return (
    <Container className={classes.container}>
      <Accordion maw={400} defaultValue="Quick.db" className={classes.list}>
        <ListItem
          icon={<IconPackage />}
          title={"Quick.db"}
          tags={[
            { color: "green", text: "Active" },
            { color: "blue", text: "Node.js" },
            { color: "yellow", text: "5.7 Million Downloads" },
          ]}
          description={
            <>
              Quick.db is an open-source SQLite wrapper specifically designed
              for Node.js. It was initially created as a complement to my
              programming tutorials on YouTube, providing beginners with an
              easy-to-use drag-and-drop database solution without having to
              worry about setting up a complex system. Currently, Quick.db is
              being used in over 47,000 public GitHub repositories and has been
              downloaded more than 5.7 million times on NPM.
            </>
          }
          link={"https://github.com/plexidev/quick.db"}
        />
        <ListItem
          icon={<IconBuildingCommunity />}
          title={"Plexi Development"}
          tags={[
            { color: "green", text: "Active" },
            { color: "yellow", text: "30,000+ Members" },
          ]}
          description={
            <>
              Plexi Development is a community that I founded to provide support
              for my development projects. Since its inception in 2016, it has
              grown to over 30,000 members primarily on our Discord forum. Our
              community has also established a presence on other platforms such
              as YouTube, GitHub, and Twitter. At present, we have a core team
              of 12 volunteer students and software developers who maintain a
              diverse range of open-source projects.
            </>
          }
          link={"https://github.com/plexidev/quick.db"}
        />
        <ListItem
          icon={<IconRobot />}
          title={"Server Captcha Bot"}
          tags={[
            { color: "yellow", text: "Sold" },
            { color: "blue", text: "Node.js" },
            { color: "yellow", text: "80,000+ Servers (Aug 2021)" },
          ]}
          description={
            <>
              Server Captcha Bot was an automated tool that I created to address
              security and privacy gaps that were not originally covered by
              Discord. It was first developed in 2018 and then sold in 2021 to a
              different development studio. At the time of sale, it was
              safeguarding over 80,000 servers with more than 18 million users.
            </>
          }
          link={"https://top.gg/bot/512333785338216465"}
        />
        <ListItem
          icon={<IconBrandAppleArcade />}
          title={"DOOM In GitHub"}
          tags={[
            { color: "green", text: "Stable" },
            { color: "blue", text: "TypeScript" },
          ]}
          description={
            <>
              Just a fun side project I spent a weekend on, but it allows you to
              play DOOM in a markdown file specifically on GitHub. It uses a web
              server to map endpoints to keyboard inputs, then renders the last
              few frames of the game in an embedded .gif image. You can <a target="_blank" href="https://github.com/lorencerri">play it
              here</a>. According to the
              <a target="_blank" href="https://github.com/lorencerri/play-doom#play-doom">stats</a>, over
              174 games have been played on my GitHub README with 80,000+
              keyboard inputs.
            </>
          }
          author={"lorencerri"}
          link={"https://github.com/lorencerri/play-doom"}
        />
        <ListItem
          icon={<IconRobot />}
          title={"Hypnospace"}
          tags={[
            { color: "green", text: "Active" },
            { color: "blue", text: "TypeScript" },
          ]}
          description={
            <>
              As part of their original launch promotion, I was hired by the
              Hypnospace team (specifically Mike Rose from No More Robots) to develop a Discord bot that mimics the website
              creation system of the game. This bot allows users to create their
              own unique channels (websites) and share them with others within
              the server, just like in the game. It also included a variety of easter eggs from within the game.
            </>
          }
          author={"lorencerri"}
          link={"https://github.com/lorencerri/discord-guardian"}
        />
        <ListItem
          icon={<IconBrandYoutube />}
          title={"YouTube Channel"}
          tags={[
            { color: "red", text: "Inactive" },
            { color: "yellow", text: "5.2k Subscribers" },
          ]}
          description={
            <>
              Previously, I created and uploaded programming tutorials that used
              practical examples like Discord bots and chat applications.
              However, the channel is currently inactive.
            </>
          }
          author={"Plexi Development"}
          link={"https://www.youtube.com/c/TrueXPixels"}
        />
        <ListItem
          icon={<IconRobot />}
          title={"Guardian"}
          tags={[
            { color: "red", text: "Inactive" },
            { color: "blue", text: "Node.js" },
            { color: "yellow", text: "63 Stars" },
          ]}
          description={
            <>
              One of my initial major projects was creating a Discord bot to
              address administrator-level security concerns during the early days of Discord. The
              bot was designed to add an extra layer of rate limits on
              destructive and irreversable actions such as deleting channels, kicking users,
              and more. Since these functionalities are now generally offered by
              Discord, the bot is no longer actively maintained.
            </>
          }
          author={"lorencerri"}
          link={"https://github.com/lorencerri/discord-guardian"}
        />
      </Accordion>
    </Container>
  );
}
