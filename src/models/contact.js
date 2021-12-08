const mongoose = require('mongoose')


const contacts = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        validator: function(Number) {
            if (Number < 10) {
                return Error("number must be 10 letters")
            }
        }
    },
    family: {
        type: Boolean,
        default: false
    }
})

const Contact = mongoose.model('Contacts', contacts)

module.exports = Contact