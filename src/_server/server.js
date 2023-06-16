import express from "express"
const port = 3000
export const server = express()

server.listen(port, ()=>{
    console.log(`Server listen to port: ${port}`)
})
