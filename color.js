const colorSet=["#52327A","#D6C7E9","#C7E9D6","blue","pink","skyblue"];
const clicking=document.getElementById("clicking");
// const fliping=document.querySelector(".fliping");
const color=document.getElementById("fliping") 
clicking.addEventListener("click" ,function (){
    const randomNumber= getRandomNumber();
    document.body.style.backgroundColor=colorSet[randomNumber];
    color.textContent=colorSet[randomNumber];
    // console.log("working")
});
function getRandomNumber(){
    return Math.floor(Math.random()*colorSet.length);
    }