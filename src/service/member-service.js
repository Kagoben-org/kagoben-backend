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

  return await prismaClient.member.create({
    data: member,
    select: {
      email: true,
      username: true
    }
  })
}

const login = async (req) => {
  const loginRequest = validate(loginMemberValidation, req)
  const member = await prismaClient.member.findUnique({
    where: {
      email: loginRequest.email
    },
    select: {
      email: true,
      password: true
    }
  })
  if (!member) {
    throw new ResponseError(401, "Username or Password is wrong")
  }
  const IsPasswordValid = bcrypt.compare(loginRequest.password, member.password)
  if (!IsPasswordValid) {
    throw new ResponseError(401, "Username or Password is wrong")
  }
  const token = uuid().toString()
  return await prismaClient.member.update({
    data: {
      token: token
    },
    where: {
      email: member.email
    }, select: {
      token: true
    }
  })
}

const logout = async (email) => {
  validate(logoutValidation, email)
  const member = await prismaClient.member.findUnique({
    where: {
      email: email
    }
  })
  if (!member) {
    throw new ResponseError(404, "Member is Not Found")
  }

  return await prismaClient.member.update({
    where: {
      email: email
    },
    data: {
      token: null
    }
  })
}


export default { register, login, logout }