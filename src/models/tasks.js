const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    task: {
        type: String,
        required: true
    },
    des: {
        type: String
    }
})

module.exports = Task