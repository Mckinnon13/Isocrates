const mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

let employeeSchema = require("../models/employee");
//create employee
router.route("/add-emp").post(async(req,res,next)=>{
    await employeeSchema
    .create(req.body)
    .then((result)=>{
        res.json({
            data: result,
            message: "New employee added",
            status: 200,
        })
    })
    .catch((err)=>{
        return next(err);
    });
});

//Read employee data
router.route("/").get(async(req,res,next)=>{
    await employeeSchema
    .find()
    .then((result)=>{
        res.json({
            data: result,
            message:"All Employee details fetched successfully",
            status: 200,
        });
    })
    .catch((err)=>{
        return next(err);
    })
});

//Read one employee data
router.route("/get-emp/:id").get(async(req,res,next)=>{
    await employeeSchema
    .findById(req.params.id)
    .then((result)=>{
        res.json({
            data: result,
            message:"one Employee details fetched successfully",
            status: 200,
        });
    })
    .catch((err)=>{
        return next(err);
    })
});

//update one employee data
router.route("/update-emp/:id").put(async(req,res,next)=>{
    await employeeSchema
    .findByIdAndUpdate(req.params.id,{
        $set:req.body,
    })
    .then((result)=>{
        res.json({
            data: result,
            message:"one Employee details updated successfully",
            status: 200,
        });
    })
    .catch((err)=>{
        return next(err);
    })
});

//delete one employee data
router.route("/delete-emp/:id").delete(async(req,res,next)=>{
    await employeeSchema
    .findByIdAndDelete(req.params.id)
    .then((result)=>{
        res.json({
            data: result,
            message:"one Employee details deleted successfully",
            status: 200,
        });
    })
    .catch((err)=>{
        return next(err);
    })
});
module.exports = router;

