const userModel = require('../models/userModel')


//post request
exports.addUser = (req, res) => {
    userModel.create(req.body, (err) => {
        if (!err) {
            res.status(200).json({
                success: true,
                message: "User Added Successfully",
            });

        } else {
            res.status(202).json({
                success: false,
                message: err.message,
            })
        }
    });
};


//get request
exports.getUsers = async (req, res) => {
    const users = await userModel.find()

    try {
        res.status(200).json({
            success: true,
            users,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
        })
    }
}


// get single user
exports.getSingleUser = async (req, res) => {
    const user = await userModel.findById(req.params.id);

    try {
        res.status(200).json({
            success: true,
            user,
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
        })
    }

}

//put request
exports.updateUser = async (req, res) => {

    // let user = await userModel.findById(req.params._id)
    // if(!user){
    //     console.log("user not found");
    // }
    user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidator: true,
    });
    try {
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}

//delete request
exports.delUser = async (req, res) => {
    let user = await userModel.findById(req.params.id);

    await user.remove();

    try {
        res.status(200).json({
            success: true,
            message: "User Deleted Successfully",
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
        })
    }

};