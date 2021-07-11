import * as harperive from "harperive";

const DB_CONFIG = {
  harperHost: "http://localhost:9925",
  username: "HDB_ADMIN",
  password: "password",
};

const Client = harperive.Client;
const client = new Client(DB_CONFIG);

await client.createSchema({
  schema: "local",
});

await client.createTable({
  schema: "local",
  table: "dogs",
  hashAttribute: "id",
});

await client.insert({
  schema: "local",
  table: "dogs",
  records: [
    {
      dog_name: "Harper",
    },
    {
      dog_name: "Penny",
    },
    {
      dog_name: "Ruffus",
    },
    {
      dog_name: "Puchy",
    },
  ],
});
