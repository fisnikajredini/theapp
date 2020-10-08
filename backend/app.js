const express = require('express')
const app = express()
const port = 5000
const queries = require("./model/queries")
const db = require("./db/db")

db.initDB()

app.get('/hello', (req, res) => {
//   queries.createNew({
//     company_name: "FIRMA 3",
//     date: Date.now()
// })

//     .then(() => {
//         res.json({data:'Hello World!'});
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).send('internal server errorr');
//   })
// queries.remove("5f7f42c8befcb23fb0ce5738").then(()=>res.send("success"))
queries.readAll().then((data)=>{
  res.json({data:data});
  console.log(data)
})
  
})

app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`)
})