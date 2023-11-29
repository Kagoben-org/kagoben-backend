import memberService from "../service/member-service.js"
const register = async (req, res, next) => {
  try {
    const result = await memberService.register(req.body)
    res.status(200).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}
const login = async (req, res, next) => {
  try {
    const result = await memberService.login(req.body)
    res.status(200).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}
const logout = async (req, res, next) => {
  try {
    const result = await memberService.logout(req.member.email)
    res.status(200).json({
      message: "Logout Success"
    })
  } catch (error) {
    next(error)
  }
}


export default { register, login, logout }