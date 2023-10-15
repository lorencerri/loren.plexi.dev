import classes from "./DoomGUI.module.css";

import { Center, Container } from "@mantine/core";
import usePartySocket from "partysocket/react";
import ConnectionState from "./ConnectionState";
import { useCounter } from "@mantine/hooks";

export default function DoomGUI() {
  const [count, handlers] = useCounter();
  const ws = usePartySocket({
    host:
      process.env.NODE_ENV === "development"
        ? "localhost:1999"
        : "https://doom-party.lorencerri.partykit.dev",
    room: "doom",
    onMessage: (message) => {
      const data = JSON.parse(message.data);
      console.log(data);
      switch (data.action) {
        case "connectionCountUpdate":
          handlers.set(data.connectionCount);
      }
    },
  });

  return (
    <Container className={classes.container} size={1400}>
      <Center>
        <ConnectionState state={ws.readyState} count={count} />
      </Center>
    </Container>
  );
}
