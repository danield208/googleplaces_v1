import {server} from "./_server/server"
import express from "express";

//routes
import {gpRoutes} from "./_googlePlaces/googlePlaces.routes";

//public folder/static file
server.use("/public", express.static('public'))

//routes
server.use("/googleplaces", gpRoutes)

server.get("/", (req, res)=> {
    res.send("Server Online :)")
})

//404 handler
server.use((req, res)=>{
    res.status(404).json({
        path: "Page not found! ERROR: 404"
    })
})
