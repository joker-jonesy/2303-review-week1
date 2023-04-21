// const data =[["blue", "blue","blue"],"blue", "etc"]
const game ={
    score:0,
    players:["luke", "prof"],
    board:[
        [],
        [],
        []
    ]
}

document.body.querySelector("#main").addEventListener("click", (ev)=>{
    if(ev.target.id!=="main"){
        // how would i modify the element from an array
        ev.target.style.backgroundColor="red";
    }
})