// import { App } from "./app"

// new App().server.listen(3000);

import { App } from "./app";

const app = new App().server;
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
