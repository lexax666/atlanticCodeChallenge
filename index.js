const express = require('express');
const articlesRoutes = require("./src/routes/articles.routes");

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send('Hello World')
});

app.use("/api/v1/articles", articlesRoutes);

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})