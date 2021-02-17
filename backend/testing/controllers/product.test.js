const Server = require("../../server/server");
const request = require("supertest");

const server = new Server();

describe("Endpoint (GET) /api/products ProductController", () => {
  it("respond json list of products", async () => {
    await request(server.app)
      .get("/api/products/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Endpoint (GET) /api/products/:id ProductController", () => {
  it("respond json with single product", async () => {
    const id = "602ba7a9d750f3191457694b";
    await request(server.app)
      .get(`/api/products/${id}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Endpoint (POST) /api/products ProductController", () => {
  it("response status 201 created", async () => {
    await request(server.app)
      .post("/api/products/")
      .send({
        name: "camiseta test",
        description: "camiseta test",
        img: "https://http2.mlstatic.com/",
        priceIn: 15000,
        priceOut: 20000,
        quanty: 30,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
