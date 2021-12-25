import bcrypt from 'bcryptjs'

const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: "Fazle Rabbi",
        email: "fr@example.com",
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: "F R Ador",
        email: "ador@example.com",
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users