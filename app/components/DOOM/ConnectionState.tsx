import { Badge } from "@mantine/core";

interface ConnectionInfo {
  color: string;
  text: string;
}

enum ConnectionStates {
  CONNECTING,
  CONNECTED,
  DISCONNECTING,
  DISCONNECTED,
}

const Connections: Record<ConnectionStates, ConnectionInfo> = {
  [ConnectionStates.CONNECTING]: { color: "yellow", text: "Connecting" },
  [ConnectionStates.CONNECTED]: { color: "green", text: "Connected" },
  [ConnectionStates.DISCONNECTING]: { color: "yellow", text: "Disconnecting" },
  [ConnectionStates.DISCONNECTED]: { color: "red", text: "Disconnected" },
};

interface ConnectionStateProps {
  state: ConnectionStates;
  count: number;
}

export default function ConnectionState({
  state,
  count,
}: ConnectionStateProps) {
  return (
    <Badge variant="dot" color={Connections[state].color}>
      {state === ConnectionStates.CONNECTED
        ? `Connections: ${count}`
        : Connections[state].text}
    </Badge>
  );
}
