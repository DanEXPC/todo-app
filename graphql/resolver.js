const Todo = require('../models/todo');

const users = [
    { name: 'Igor', age: 36, email: 'igor@mail.ru'},
    { name: 'Elena', age: 32, email: 'elena@mail.ru'}
]

module.exports = {
    test() {
        return {
            count: Math.trunc(Math.random() * 10),
            users: users
        }
    },
    random({min, max, count}) {
        const arr = []
        for (let i = 0; i < count; i++) {
            const random = Math.random() * (max - min) + min
            arr.push(random)
        }
        return arr
    },
    addTestUser({user: {name, email}}) {
        const user = {
            name, email,
            age: Math.ceil(Math.random() * 30)
        }
        users.push(user)
        return user
    },
    async getTodos() {
        try {
            return await Todo.findAll()
        } catch (err) {
            throw new Error('Fetch todos is not available')
        }
    },
    async createTodo({todo}) {
        try {
            const newTodo = await Todo.create({
                title: todo.title,
                done: false
            })
            return newTodo
        } catch (err) {
            throw new Error('Title is required')
        }
    }
}