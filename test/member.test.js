import supertest from "supertest"
import { web } from "../src/app/web"
import { prismaClient } from "../src/app/database"



describe('POST /api/member', () => {

  afterEach(async () => {
    await prismaClient.member.delete({
      where: {
        id: 1,
        email: "daffa@gmail.com"
      }
    })
  })

  it('should can register new member', async () => {
    const result = await supertest(web)
      .post('/api/member')
      .send({
        email: "daffa1213123124@gmail.com",
        username: "Dafasdasfa",
        password: "daffaasda123",
        usia: "203",
        no_telepon: "asdasdsad"
      })
    expect(result.status).toBe(200)
  })
})