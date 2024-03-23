import express from "express"
import Reverso from "reverso-api"
import cors from "cors"
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 2366
const reverso = new Reverso()

app.use(express.json())
app.use(cors())

app.post("/query", (req, res) => {
    const {text} = req.body
    if (!text) return res.status(403).json({error: "Bad credits"})
    reverso.getContext(
    text,
    'english',
    'russian',
    (err, response) => {
        if (err) return res.status(500).json({error: err.message})

        res.status(200).json({
            success: true,
            response
        })
    }
)
})

app.listen(port, () => console.log("listening on port " + port))