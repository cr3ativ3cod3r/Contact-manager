const mongoose = require('mongoose');

const contactschema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user",
    },
    name: {
        type: String,
        require: [true, "Please enter name"],
    },
    email: {
        type: String,
        require: [true, "Please enter email"],
    },
    phoneno: {
        type: String,
        require: [true, "Please enter phoneno"],
    },
    
    
},
{
    timestamps: true,//gives createdAt and updatedAt timestamps
},
)

module.exports = mongoose.model("Contact",contactschema);