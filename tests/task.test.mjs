<<<<<<< HEAD:tests/task.test.js
=======
<<<<<<< HEAD:tests/task.test.js
>>>>>>> 8e1a9c5 (slight modifications in testing files):tests/task.test.mjs
// import {request} from "supertest";
// import mongoose from "mongoose";
// import app from "../src/server.js";
const request = require("supertest")
const mongoose = require("mongoose")
const app = require("../src/server.js")
<<<<<<< HEAD:tests/task.test.js
=======
=======
import {request} from "supertest";
import mongoose from "mongoose";
import app from "../src/server.js";
// const request = require("supertest")
// const mongoose = require("mongoose")
// const app = require("../src/server.js")
>>>>>>> cd80d15 (slight modifications in testing files):tests/task.test.mjs
>>>>>>> 8e1a9c5 (slight modifications in testing files):tests/task.test.mjs

let token;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST);

  // Register user
  await request(app).post("/api/auth/register").send({
    name: "Task Tester",
    email: "tasktester@gmail.com",
    password: "password123",
  });

  // Login to get token
  const login = await request(app).post("/api/auth/login").send({
    email: "tasktester@gmail.com",
    password: "password123",
  });

  token = login.body.token;
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("Task APIs", () => {
  it("should create a new task", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .set("Authorization", `Bearer ${token}`)
      .send({ title: "Test Task", description: "Testing task" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("title", "Test Task");
  });

  it("should fetch tasks", async () => {
    const res = await request(app)
      .get("/api/tasks")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
