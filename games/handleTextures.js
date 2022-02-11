
const boomImage = require("../public/textures/boom.jpg")  //require("../public/textures/boom.jpg");
const treasureImage = require("../public/textures/treasure.png");


// <Image className='rounded-xl' id='placehere' src={getBoomImage()} ></Image>
// example of image ^^^^ 


export function getBoomImage(){

    return boomImage;
}

export function getTreasureImage(){
    return treasureImage;
}


