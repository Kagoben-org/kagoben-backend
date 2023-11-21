import { prismaClient } from "../app/database.js"

export const authMiddleware = async (req, res, next) => {
  const token = req.get("Authorization")
  if (!token) {
    res.status(401).json({
      errors: "Unauthorized"
    }).end()
  } else {
    const member = await prismaClient.member.findFirst({
      where: {
        token: token.split(" ")[1]
      }
    })
    if (!member) {
      res.status(401).json({
        errors: "Unauthorized"
      }).end()
    } else {
      req.member = member;
      next()
    }
  }
}