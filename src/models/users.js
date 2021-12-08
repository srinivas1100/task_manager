const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name: {
        type: String,

    },
    age: {
        type: Number
    },
    device: {
        type: [
            String
        ]
    }
})

module.exports = User