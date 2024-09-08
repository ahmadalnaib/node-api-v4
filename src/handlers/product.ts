import prisma from "../db"

// get all products

export const getProducts=async(req,res)=>{
  const user=await prisma.user.findUnique({
    where:{
      id:req.user.id
    },
    include:{
      products:true
    }
  })


  res.json({data:user.products})


}


// get single product

export const getOneProduct= async(req,res)=>{
  const id=req.params.id

  const product=await prisma.product.findFirst({
    where:{
      id,
      belongsToId:req.user.id
    }
  })

  res.json({data:product})

}

// create product
export const createProduct=async(req,res)=>{
  const product=await prisma.product.create({
    data: {
      name: req.body.name as string,
      belongsToId: req.user.id as string, 
      description: req.body.description as string,
      price: req.body.price as number

    }
  })

  res.json({data:product})
}

// update product

export const updateProduct=async(req,res)=>{
  const updated=await prisma.product.update({
    where:{
      id_belongsToId:{
        id:req.user.id,
        belongsToId:req.user.id
      },
    },
      
    data:{
      name:req.body.name
    }
  })

  res.json({data:updated})
}


// delete product

export const deleteProduct=async(req,res)=>{
  const deleted=await prisma.product.delete({
    where:{
    id_belongsToId:{
      id:req.user.id,
      belongsToId:req.user.id
    },
    }
    
  })

  res.json({data:deleted})
}


