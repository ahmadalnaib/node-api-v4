import express from 'express';
import {body , oneOf,check, validationResult} from 'express-validator';
import { handleInputErros } from './modules/middleware';
import { createProduct, deleteProduct, getOneProduct, getProducts,updateProduct } from './handlers/product';



const router = express.Router();

// product routes

router.get('/product',getProducts)


router.get('/product/:id',getOneProduct)

router.put('/product/:id',body('name').isString(),handleInputErros,updateProduct)

router.post('/product',
  body('name').isString(),
  handleInputErros,createProduct);

router.delete('/product/:id',deleteProduct)



  // update


router.get('/update',()=>{

})
router.get('/update/:id',()=>{
  
})

router.put('/update/:id',
  body('title').optional(),
  body('body').optional(),
  oneOf([check('status').equals('IN_PROGRESS'), check('status').equals('SHIPPED'), check('status').equals('DEPRECATED')]),
  body('version').optional(),
  ()=>{
    
  })

router.post('/update', 
body('title').exists().isString(),
body('body').exists().isString(),
body('productId').exists().isString(),
()=>{
    
  })

router.delete('/update/:id',()=>{
    
  })


  // update point

  // product routes

router.get('/updatepoint',()=>{

})
router.get('/updatepoint/:id',()=>{
  
})

router.put('/updatepoint/:id',
  body('name').optional().isString(),
  body('description').optional().isString(),()=>{
    
  })

router.post('/updatepoint',
body('name').isString(),
body('description').isString(),
body('updateId').exists().isString(),
()=>{
    
  })

router.delete('/updatepoint/:id',()=>{
    
  })

  export default router;