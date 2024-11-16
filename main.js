
document.addEventListener("DOMContentLoaded", () => {
let array=[]
for(let i=1;i<16;i++){
    let images=document.querySelector(`#img${i}`);
    array.push(images);
}
console.log(array)
let score=document.querySelector("#score")
let retry=document.querySelector("#start")
retry.addEventListener('click',()=>{
    location.reload();
})
let current_score=0
function getRandomIndex(array){
    return Math.floor(Math.random()*array.length);
}
let mines=[]
while(mines.length<4){
    let random_index=getRandomIndex(array)
    if(!mines.includes(array[random_index])){
        mines.push(array[random_index]);
    }
}
let Tiles=[];
while(Tiles.length<8){
    let random_score=getRandomIndex(array);
    if(!mines.includes(array[random_score])&&!Tiles.includes(array[random_score])){
        Tiles.push(array[random_score]);
    }
}
function Ulose(){
    alert("Game Over");
    mines.forEach(mine=>{
        mine.src='disc.svg';
        mine.style.pointerEvents = "none"
    })
    Tiles.forEach(Tile=>{
        Tile.src=`${Tiles.indexOf(Tile)+1}-circle.svg`;
        Tile.style.pointerEvents = "none";
    })

}

function UpdateScore(Tile,points){
    Tile.src=`${points}-circle.svg`
    current_score=current_score+points;
    score.innerHTML=current_score;
    Tile.style.pointerEvents='none'
    console.log(tile)
}
Tiles.forEach((Tile,index)=>{
    Tile.addEventListener('click',()=>{
        UpdateScore(Tile,index+1);

    })
});
mines.forEach(mine=>{
    mine.addEventListener('click', () => {
        mine.src = 'disc.svg';
        Ulose();
    });
})
console.log("Mines:", mines);
console.log("Tiles:", Tiles);
})