import express from 'express';
import {body , oneOf,check, validationResult} from 'express-validator';
import { handleInputErros } from './modules/middleware';
import { createProduct, getProducts } from './handlers/product';
import { create } from 'domain';


const router = express.Router();

// product routes

router.get('/product',getProducts)


router.get('/product/:id',()=>{
  
})

router.put('/product/:id',body('name').isString(),handleInputErros,(req,res)=>{
  
    
  })

router.post('/product',
  body('name').isString(),
  handleInputErros,createProduct);
  
router.delete('/product/:id',()=>{
    
  })



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