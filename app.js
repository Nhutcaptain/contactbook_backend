const express = require('express');
const cors = require("cors");

const contactsRouter = require("./app/routes/contact.route")

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: "wellcome to contact book aplication."});
});

app.use("/api/contacts", contactsRouter); //Khi tới đường dẫn này rồi mới sử dụng file contact.route.js

module.exports = app;