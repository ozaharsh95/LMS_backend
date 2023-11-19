const express = require('express')
router = express.Router()

const service = require('../services/login.service')

const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your-secret-key';

// http://127.0.0.1:7000/api/auth/login
router.post('/login',async(req,res)=>{
    const record = await service.getUserByusername(req.body)
    if(!record){
        res.status(404).json('no record with given username');
    }else{
        if(req.body.password==record.password){
            // token = req.body.username;
            const token = jwt.sign(req.body.username, JWT_SECRET);
            res.status(200).json({"token":token});
        }else{
            res.status(401).json('Unauthorized access');
        }
    }
});

// router.get('/zingalala',async(req,res)=>{
//     res.send("testing working testing")
// })

module.exports = router;