import * as gprc from "@grpc/grpc-js";
import { PORT } from "../configs";
import { PACKAGE_SERVICE_URL } from "../configs";
import { listServices } from "../port/main";
import { ConnectDB } from "../configs/database";
const port = PORT;
const url = `${PACKAGE_SERVICE_URL}:${port}`;
const server = new gprc.Server();
ConnectDB();
listServices.forEach((service) => {
  server.addService(service.service, service.implementation);
});

server.bindAsync(url, gprc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Server running at ${url}`);
  server.start();
});
