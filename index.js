const server = require("./api/server.js");

const port = proccess.env.PORT || 4000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
