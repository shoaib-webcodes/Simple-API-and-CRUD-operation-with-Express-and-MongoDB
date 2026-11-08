
import express from "express";
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
res.send("simple CRUD operation is running");
})


app.listen(port, () => {
    console.log(`Simple CRUD operation is running on port ${port}`)
})