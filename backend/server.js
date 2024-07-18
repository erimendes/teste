const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

// Verifique se as variáveis de ambiente estão sendo carregadas corretamente
console.log('Environment Variables:');
console.log('JWT_SECRET_KEY:', process.env.JWT_SECRET_KEY);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('PORT:', process.env.PORT);

const db = require("./app/models");
const Role = db.role;

const app = express();
const port = process.env.PORT || 8080;

var corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'x-access-token'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}.`);
});

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

function initial() {
  Role.create({
    id: 3,
    name: "admin"
  });
  
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });

}

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
