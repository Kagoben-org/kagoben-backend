import supertest from "supertest"
import { web } from "../src/app/web"
import { createUser, deleteBahan, deleteUser, setToken, tambahBahan } from "./test-util"

describe('GET /api/bahan', () => {
  let token;

  beforeAll(async () => {
    await createUser()
    await tambahBahan()
    await setToken()
  })

  afterAll(async () => {
    await deleteBahan()
    await deleteUser()
  })

  it('should get all bahan in database', async () => {
    const result = await supertest(web)
      .get('/api/bahan')
      .set('Authorization', "Bearer 1213123");
    expect(result.status).toBe(200)
    expect(result.body.data).toBeDefined()
  })

  it('should get all bahan in database', async () => {
    const result = await supertest(web)
      .get('/api/bahan')

    expect(result.status).toBe(401)
    expect(result.body.errors).toBe("Unauthorized")
    // expect(result.body.data).toBeDefined()
  })
})