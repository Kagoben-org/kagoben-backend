import { prismaClient } from "../app/database.js"
import { ResponseError } from "../error/response-error.js"
import { bahanValidation, getSearchBahanValidation, } from "../validation/bahan-validation.js"
import { validate } from "../validation/validation.js"


//database add only
const addBahan = async (request) => {
  await request.map(async (item) => {
    const toInserted = validate(bahanValidation, item)
    const countBahan = await prismaClient.bahan.count({
      where: {
        name: toInserted.name,
        mode: "insensitive"
      }
    })
    if (countBahan === 1)
    {
      throw new ResponseError(400, "Bahan Already exist")
    }

    return await prismaClient.bahan.create({
      data: item,
    })
  })
}


const getAllBahan = async () => {
  return await prismaClient.bahan.findMany()
}


const searchBahan = async (namaBahan) => {
  const validation = validate(getSearchBahanValidation, namaBahan)
  const bahan = await prismaClient.bahan.findMany({
    where: {
      name: {
        contains: namaBahan,
      }
    },
    select: {
      name: true,
      image: true
    }
  })

  if (!bahan)
  {
    throw new ResponseError(404, "Bahan is Not Found")
  }
  return bahan
}

export default { addBahan, getAllBahan, searchBahan }