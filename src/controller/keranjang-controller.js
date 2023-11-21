import keranjangService from "../service/keranjang-service.js";

const getAllKeranjang = async (req, res, next) => {
  try {
    const result = await (keranjangService.getAllKeranjang(req))
    res.status(200).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const createKeranjang = async (req, res, next) => {
  try {
    const result = await keranjangService.createKeranjang(req)
    res.status(200).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const findKeranjang = async (req, res, next) => {
  try {
    const result = await keranjangService.findKeranjang(req)
    res.status(200).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}

export default { getAllKeranjang, createKeranjang, findKeranjang }