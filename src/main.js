const http = require("http");

const server = http.createServer((request, response) => {
  // switch (request.url) {
  //   case "/":
  //     response.write("hello ~");
  //     break;
  //   case "/posts":
  //     response.write("posts");
  //     break;
  //   case "signup":
  //     response.write("signup");
  //     break;
  //   default:
  //     response.writeHead(404);
  //     response.write("404");
  //     break;
  // }

  const data = {
    id: 1,
    title: "关山月",
    content: "明月出天山，苍茫云海间",
  };

  const jsonData = JSON.stringify(data);

  response.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
  });

  response.write(jsonData);

  response.end();
});

server.listen(3000, () => {
  console.log("服务器已启动!");
});
