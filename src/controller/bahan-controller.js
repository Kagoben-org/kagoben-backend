import bahanService from "../service/bahan-service.js"
const addBahan = async (req, res, next) => {
  try {
    const result = await bahanService.addBahan(req.body)
    res.status(200).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const getAllBahan = async (_req, res, next) => {
  try {
    const result = await bahanService.getAllBahan()
    res.status(200).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const searchBahan = async (req, res, next) => {
  try {
    const namaBahan = req.params.namaBahan
    const result = await bahanService.searchBahan(namaBahan)
    res.status(200).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}

export default { addBahan, getAllBahan, searchBahan }
