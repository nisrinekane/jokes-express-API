const express = require("express");
const app = express();
const port = 8000;
    

app.use(express.json(), express.urlencoded({extended: true}));
// req is shorthand for request
// res is shorthand for response
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello World" });
// });

const allJokesRoutes = require('./server/routes/jokes.routes')
allJokesRoutes(app)

app.listen( port, () => console.log(`Listening on port: ${port}`) );
