import { loginMemberValidation, logoutValidation, registerMemberValidation } from "../validation/member-validation.js"
import { validate } from "../validation/validation.js"
import { ResponseError } from "../error/response-error.js"
import bcrypt from "bcrypt"
import { prismaClient } from "../app/database.js"
import { v4 as uuid } from "uuid"

const register = async (request) => {
  const member = validate(registerMemberValidation, request)
  const countMember = await prismaClient.member.count({
    where: {
      email: member.email
    }
  })
  if (countMember === 1) {
    throw new ResponseError(400, "Email already exist")
  }
  member.password = await bcrypt.hash(member.password, 10)

  return prismaClient.member.create({
    data: member,
    select: {
      email: true,
      username: true
    }
  })
}

const login = async (req) => {
  const loginRequest = validate(loginMemberValidation, req)
  const user = await prismaClient.member.findUnique({
    where: {
      email: loginRequest.email
    },
    select: {
      email: true,
      password: true
    }
  })
  if (!user) {
    throw new ResponseError(401, "Username or Password is wrong")
  }
  const IsPasswordValid = bcrypt.compare(loginRequest.password, user.password)
  if (!IsPasswordValid) {
    throw new ResponseError(401, "Username or Password is wrong")
  }
  const token = uuid().toString()
  return await prismaClient.member.update({
    data: {
      token: token
    },
    where: {
      email: user.email
    }, select: {
      token: true
    }
  })
}

const logout = async (email) => {
  username = validate(logoutValidation, email)
  const user = await prismaClient.member.findUnique({
    where: {
      email: email
    }
  })
  if (!user) {
    throw new ResponseError(404, "User is Not Found")
  }

  return await prismaClient.member.update({
    where: {
      email: email
    },
    data: {
      token: null
    },
    select: {
      email: true
    }
  })
}


export default { register, login, logout }