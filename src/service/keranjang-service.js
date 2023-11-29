import { prismaClient } from "../app/database.js"
import { ResponseError } from "../error/response-error.js"
import { createKeranjangValidation, findKeranjangValidation, getAllKeranjangValidation } from "../validation/keranjang-validation.js"
import { validate } from "../validation/validation.js"


const getAllKeranjang = async (req) => {
  const member_id = req.member.id // member_id
  validate(getAllKeranjangValidation, member_id) // member_id
  return await prismaClient.keranjang.findMany({
    where: {
      member_id: member_id
    },
    include: {
    }
  })
}

const createKeranjang = async (req) => {
  const keranjang = validate(createKeranjangValidation, req.body) //name, date
  return await prismaClient.keranjang.create({
    data: {
      ...keranjang,
      member_id: req.member.id
    }
  })
}

const findKeranjang = async (req) => {
  const keranjang_id = req.params.keranjangId
  validate(findKeranjangValidation, keranjang_id) //id keranjang
  return await prismaClient.keranjang.findFirst({
    where: {
      id: parseInt(keranjang_id),
      member_id: req.member.id
    },
    include: {
      bahan
    }
  })
}

const addBahanToKeranjang = async (req) => {
  const bahanInKeranjang = await prismaClient.bahanOnKeranjang.findFirst({
    where: {
      keranjang_id: req.keranjang_id,
      bahan_id: req.bahan_id,
    }
  })
  if (bahanInKeranjang)
  {
    throw new ResponseError(409, "Resource Already Exist")
  }
  return await prismaClient.bahanOnKeranjang.create({
    data: req
  })
}

const updateKeranjang = async (req) => {
  await req.body.map(async (item) => {
    const bahanInKeranjang = await prismaClient.bahanOnKeranjang.update({
      where: {
        keranjang_id_bahan_id: {
          keranjang_id: item.keranjang_id,
          bahan_id: item.bahan_id,
        }
      },
      data: {
        jumlah: item.jumlah,
        harga: item.harga
      }
    })
  })
}

export default { getAllKeranjang, createKeranjang, findKeranjang, addBahanToKeranjang, updateKeranjang }