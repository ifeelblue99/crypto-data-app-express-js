const router = require("express").Router()
const https = require("https")

router.get("/top10", (req, res)=>{
    
    https.get(process.env.TOP_10_CRYPTO, resp=>{
        let data = ""

        resp.on("data", chunk=>{
            data+=chunk
        })
        resp.on("end", ()=>{
            res.json(JSON.parse(data))
        })
    }).on("error", err=> console.log(err))

})

module.exports = router
