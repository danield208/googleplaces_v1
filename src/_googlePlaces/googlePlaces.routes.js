import express from "express";
const request = require('superagent')
export const gpRoutes = express.Router()

//google api infos
const apiKey = "AIzaSyAyJrRpDMXMHjm3nAIJS7x02D2nPT9E9Kk";

gpRoutes.route("/placeInfo").get(async (req, result)=>{
    const cityname = JSON.stringify(req.headers.locationname);
    let placeInfo = await getPlaceInfo(cityname);
    console.log(placeInfo);
    let placeImage = await getPlacePicture(placeInfo.body.candidates[0].photos[0].photo_reference);
    console.log(placeImage);
    result.send(placeImage.body);
})

async function getPlaceInfo(location) {
    let res = await request.post("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + location + "&inputtype=textquery&fields=photos,name&key=" + apiKey)
    return res
}

async function getPlacePicture(photoReference) {
    let res = await request.post(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=1920&maxheight=1080&photo_reference=${photoReference}&key=${apiKey}`)
    return res
}
