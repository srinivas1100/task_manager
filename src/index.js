const express = require('express')
require('./db/mongoose')
const User = require('./models/users')
const Task = require('./models/tasks')
const Contact = require('./models/contact')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/tasks', (req, res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks)
    }).catch((e) => {
        res.status(500).send()
    })
})


app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id
    Task.findById({ _id }).then((task) => {
        if (!task) {
            res.status(404).send()
        }
        res.send(task)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.send(user)
    }).catch((err) => {
        res.status(500).send(err)
    })
})

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(300).send(e)
    })
})

app.get('/users/:id', (req, res) => {
    const _id = req.params.id
    User.findById({ _id }).then((user) => {
        if (!user) {
            res.status(404).send("no user is there")
        }
        res.send(user)
    }).catch((e) => {
        res.status(500).send("server error")
    })
})

app.post('/contact', (req, res) => {
    const contact = new Contact(req.body)
    contact.save().then(() => {
        res.status(200).send(contact)
    }).catch((e) => {
        res.status(505).send(e)
    })
})

app.get('/contact', (req, res) => {
    Contact.find({}).then((contacts) => {
        res.send(contacts)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

app.get('/contact/:id', (req, res) => {
    const ids = req.params.id
    Contact.findById({ _id: ids }).then((contact) => {
        if (!contact) {
            res.status(400).send("contact not found")
        }
        res.send(contact)
    }).catch((e) => {
        res.status(500).send("server error")
    })
})

app.listen(port, () => {
    console.log('server is up on port' + port)
})