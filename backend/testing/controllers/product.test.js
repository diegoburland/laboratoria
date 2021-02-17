const Server = require("../../server/server");
const request = require("supertest");

describe("Endpoints ProductController", () => {
  const server = new Server();
  server.listen();

  it("respond json list of products", async () => {
    await request(server.app)
      .get("/api/products/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it("respond json with single product", async () => {
    const id = "602ba7a9d750f3191457694b";
    await request(server.app)
      .get(`/api/products/${id}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
  const idError = '123123';
  await request(server.app)
      .get(`/api/products/${idError}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400);
});
