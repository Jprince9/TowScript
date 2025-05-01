/*
Key: 
0: City Cleanup : Unauthorized Parking
1: City Cleanup : Unpaid Meter
3: Section 3: Unauthorized Parking
8: Section 8: Unpaid Meter
5: Regulations on Recreational Vehicles
6: Regulations on Mobile Kitchens
{Custom} : Custom Message
*/



const fs = require('fs')
const { copy } = require("copy-paste");

const imageList = fs.readFileSync('imagelinks.txt').toString().split("\n")
const numberOfImages = 10
const staticArgs = 3
const argLength = process.argv.length
addImagesToFile(imageList)
let reasonText = formatReason()
console.dir(reasonText);
copy(reasonText, () => {})






function formatReason(){
    switch(parseInt(process.argv[2])){
        case 1: 
            return createLog("City Cleanup | Unauthorized Parking")
        case 2: 
            return createLog("City Cleanup | Unpaid Meter")
        case 3:
            return createLog("Unauthorized Parking")
        case 5:
            return createLog("Regulation on Recreational Vehicles")
        case 6:
            return createLog("Regulation on Mobile Kitchens")
        case 8:
            return createLog("Unpaid Meter")
        default:
            return createLog(process.argv[2])
    }
}

function createLog(reason){
    return `${reason} | ${insertGoodT(getRandomImages())}`
}

function getRandomImages(){
    let randomList = []
    while(randomList.length < numberOfImages) {
        randomList.push(imageList[Math.floor(Math.random() * imageList.length)])
    }
    return randomList
}

function addImagesToFile(imageList) {
    for(i = 1; i <= argLength - staticArgs; i++){
        let imageLink = process.argv[argLength-i]
        if(!imageList.includes(imageLink) && validateImageLink(imageLink)){
            fs.appendFile('./imagelinks.txt', `\n${process.argv[argLength-i]}`, () => {})
        }
    }
}

function validateImageLink(link) {
    return (link.includes("https://") && (link.includes(".jpeg")|| link.includes(".png")))
}

function insertGoodT(randomlist){
    let numberCorrectImages = argLength - staticArgs
    let correctImageIndex = []
    let rand
    while(correctImageIndex.length < numberCorrectImages){
        rand = Math.floor(Math.random() * numberOfImages)
        if(correctImageIndex.includes(rand)){
            continue;
        }
        else{
            correctImageIndex.push(rand)
        }
    }
    for(i = 0; i < numberCorrectImages; i++){
        if(validateImageLink(process.argv[argLength - i - 1])){
            randomlist[correctImageIndex[i]] = process.argv[argLength - i - 1]
        }
    }
    return randomlist.join(" ").replaceAll("\r","")
}