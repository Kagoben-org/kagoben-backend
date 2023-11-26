
import { prismaClient } from "../src/app/database"

export const createUser = async () => {
  await prismaClient.member.create({
    data: {
      email: "dafa123@gmail.com",
      username: "Dafasdasfa",
      password: "daffaasda123",
      usia: "203",
      no_telepon: "asdasdsad"
    }
  })
}

export const deleteUser = async () => {
  await prismaClient.member.deleteMany({
    where: {
      email: "dafa123@gmail.com"
    }
  })
}

export const setToken = async () => {
  return await prismaClient.member.update({
    where: {
      email: "dafa123@gmail.com"
    },
    data: {
      token: "1213123"
    },
    select: {
      token: true
    }
  })
}

export const tambahBahan = async () => {
  await prismaClient.bahan.create({
    data: {
      name: "Jeruk",
      image: "Gambar_Jeruk"
    }
  })
}

export const deleteBahan = async () => {
  await prismaClient.bahan.deleteMany({
    where: {
      name: "Jeruk"
    }
  })
}