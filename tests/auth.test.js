// const request = require("supertest")
// const mongoose = require("mongoose")
// const app = require("../src/server.js")
import request from "supertest";
import mongoose from "mongoose";
import app from "../src/server.js";

let token;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST);

  // Register user (ignore if already exists)
  await request(app).post("/api/auth/register").send({
    name: "Test User",
    email: "test@gmail.com",
    password: "password123",
  });

  // Login to get JWT token
  const res = await request(app).post("/api/auth/login").send({
    email: "test@gmail.com",
    password: "password123",
  });

  token = res.body.token;
});

afterAll(async () => {
  await mongoose.connection.dropDatabase(); // cleanup test DB
  await mongoose.connection.close();
});

describe("Auth APIs", () => {
  it("should login the user", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "test@gmail.com",
      password: "password123",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });

  it("should get user profile", async () => {
    const res = await request(app)
      .get("/api/auth/profile")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("email", "test@gmail.com");
  });
});
