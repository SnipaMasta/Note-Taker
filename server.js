const htmlRoutes = require ('./routes')
const apiRoutes = require ('./routes')
const PORT = process.env.PORT || 3001;
const express = require ('express')

const app = express();

//middleware

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.use(htmlRoutes)
app.use(apiRoutes)

// app.listen(PORT, () => {
//     console.log('Server running on http://localhost:')
// })