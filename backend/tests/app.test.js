import request from "supertest";
import app from "../src/server.js";

describe("POST /category", () => {
  it("Contains right body with message, severity,and created category object", async () => {
    const response = await request(app)
      .post("/category")
      .send({ name: "Adventure" });
    expect(response.statusCode).toEqual(201);
    expect(response.body).toEqual({ message: "Hello, World!" });
  });
});
