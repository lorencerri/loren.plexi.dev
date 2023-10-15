import type * as Party from "partykit/server";

type ConnectionCountUpdate = {
  action: "connectionCountUpdate";
  connectionCount: number;
};

export default class Server implements Party.Server {
  // eslint-disable-next-line no-useless-constructor
  constructor(readonly party: Party.Party) {}

  onConnect(_conn: Party.Connection, _ctx: Party.ConnectionContext) {
    this.sendConnectionCountUpdate();
  }

  onClose(_conn: Party.Connection) {
    this.sendConnectionCountUpdate();
  }

  onMessage(_message: string, _sender: Party.Connection) {}

  // Helper Methods
  sendConnectionCountUpdate() {
    let count = [...this.party.getConnections()].length;

    const update = JSON.stringify({
      action: "connectionCountUpdate",
      connectionCount: count,
    } satisfies ConnectionCountUpdate);

    for (const connection of this.party.getConnections()) {
      connection.send(update);
    }
  }
}

Server satisfies Party.Worker;
