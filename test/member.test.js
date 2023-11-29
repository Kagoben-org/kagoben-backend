import supertest from "supertest"
import { web } from "../src/app/web"
import { createUser, deleteUser } from "./test-util"

describe('POST /api/register', () => {
  afterAll(async () => {
    await deleteUser()
  })

  it('should can register new member', async () => {
    const result = await supertest(web)
      .post('/api/register')
      .send({
        email: "dafa123@gmail.com",
        username: "Dafasdasfa",
        password: "daffaasda123",
        usia: "203",
        no_telepon: "asdasdsad"
      })
    expect(result.status).toBe(200)
    expect(result.body.data.username).toBe("Dafasdasfa")
    expect(result.body.data.email).toBe("dafa123@gmail.com")
  })

  it('should reject if request is invalid', async () => {
    const result = await supertest(web)
      .post('/api/register')
      .send({
        email: "",
        username: "",
        password: "",
        usia: "",
        no_telepon: ""
      })
    expect(result.status).toBe(400)
    expect(result.body.errors).toBeDefined();
  })


  it('should reject email already exist ', async () => {
    const result = await supertest(web)
      .post('/api/register')
      .send({
        email: "dafa123@gmail.com",
        username: "Dafasdasfa",
        password: "daffaasda123",
        usia: "203",
        no_telepon: "asdasdsad"
      })
    expect(result.status).toBe(400)
    expect(result.body.errors).toBeDefined();
  })
})

describe('POST /api/login', () => {
  beforeAll(async () => {
    await createUser()
  })
  afterAll(async () => {
    await deleteUser()
  })

  it('should can login to the system', async () => {
    const result = await supertest(web)
      .post('/api/login')
      .send({
        email: "dafa123@gmail.com",
        password: "daffaasda123",
      })
    expect(result.status).toBe(200)
    expect(result.body.data.token).toBeDefined()
    expect(result.body.data.token).not.toBe("Test")
  })

  it('should can login to the system', async () => {
    const result = await supertest(web)
      .post('/api/login')
      .send({
        email: "",
        password: "",
      })
    expect(result.status).toBe(400)
    expect(result.body.errors).toBeDefined()
  })
})


