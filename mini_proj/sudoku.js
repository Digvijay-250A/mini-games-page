var digi_s=null;
var tile=null;

var error_count=0;
window.onload =function(){
    gamestart();
    boardgame();
}
var data=
[
    [
    "___8____9",
    "_19__583_",
    "_43_1___7",
    "4__15___3",
    "__27_4_1_",
    "_8__9_6__",
    "_7___63__",
    "_3__7__8_",
    "9_45____1"
],
[
    "53__7____",
    "6__195___",
    "_98____6_",
    "8___6___3",
    "4__8_3__1",
    "7___2___6",
    "_6____28_",
    "___419__5",
    "____8__79"
],
[
    "12__8____",
    "_4__5_39_",
    "_38_____1",
    "__5_7_4__",
    "_9___3___",
    "7____6_5_",
    "_6____87_",
    "5__3_4___",
    "__7__2_46"
],
[
    "____8_3__",
    "5_4__1___",
    "__9___2_7",
    "_8_4____1",
    "__5_2____",
    "6____7_5_",
    "7_3___6__",
    "___6__4_2",
    "__1_9____"
],
[
    "8__6__4__",
    "_31_9__2_",
    "__7___6__",
    "_5_4_3___",
    "___25____",
    "__3_8_1_4",
    "__6___9__",
    "_4__2_85_",
    "__9__6__1"
],
[
    "3__6__9__",
    "__9__4__7",
    "____73___",
    "__7_5_4__",
    "_2_6_3_8_",
    "__1_8_9__",
    "___91____",
    "4__3__8__",
    "__6__2__1"
]
]
var solution=
[
    [
    "256837149",
    "719425836",
    "843619257",
    "467158923",
    "392764518",
    "581392674",
    "178246395",
    "635971482",
    "934583761"
],
[
    "534678912",
    "672195348",
    "198342567",
    "859761423",
    "426853791",
    "713924856",
    "961537284",
    "287419635",
    "345286179"
],
[
    "126487593",
    "748156392",
    "938529741",
    "265971438",
    "491638257",
    "753842615",
    "362415879",
    "514793826",
    "879264153"
],
[
    "126587349",
    "574329861",
    "389461257",
    "782453916",
    "945126738",
    "631798524",
    "753214689",
    "298675413",
    "417932875"
],
[
    "825671493",
    "431895726",
    "967432658",
    "256143879",
    "784259361",
    "193786254",
    "512348967",
    "649127385",
    "378964512"
],
[
    "318647925",
    "529138467",
    "476293781",
    "937854216",
    "124673589",
    "685921374",
    "853419652",
    "741362895",
    "296785143"
]
]
var rand_index=Math.floor(Math.random()*data.length);
var selectboard=data[rand_index];
var selectsol=solution[rand_index];

function gamestart(){
    for(let i=0;i<9;i++){
    const tile= document.createElement("div");
    tile.classList.add("tiles"); 
    tile.id=i+1;
    tile.innerText=i+1;
    tile.addEventListener("click",function(){
        document.querySelectorAll(".digits .tiles").forEach(t => t.classList.remove("selected"));
        tile.classList.add("selected");
        digi_s=tile.innerText;
    });
    
    document.querySelector(".digits").appendChild(tile);
   
    
}

}
function resetGame(){
    error_count=0;
    document.getElementById("error_count").innerText="Errors:"+ error_count;
    digi_s=null;
    document.querySelectorAll(".digits .tiles").forEach(t =>t.classList.remove("selected"));
    rand_index=Math.floor(Math.random()*data.length);
    selectboard=data[rand_index];
    selectsol=solution[rand_index];
    document.querySelector(".board").innerHTML="";
    boardgame();
}
function boardgame(){
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            const tile =document.createElement("div");
            tile.classList.add("tiles");
            tile.id=i+" "+j;
            if(selectboard[i][j]!="_"){
                tile.innerText=selectboard[i][j];
                tile.classList.add("fixed");
            }
            else{
                tile.addEventListener("click",function(){
                    if(!tile.classList.contains("fixed") && digi_s !== null){
                        if(selectsol[i][j]===digi_s.toString()){
                        tile.textContent=digi_s;
                        tile.classList.add("fixed");
                        tile.style.color="black";
                    }
                    else{
                        tile.textContent=digi_s;
                        tile.style.color="red";
                        error_count++;
                        document.getElementById("error_count").innerText = "Errors: " + error_count;
                    if(error_count>=5){
                        setTimeout(() => {
                            alert("You reached 5 errors! Try again.");
                            resetGame(); 
                            }, 100);
                    }
                    }
                    }
                    document.querySelectorAll(".board .tiles").forEach(t => t.classList.remove("selected"));
                    tile.classList.add("selected");
                });
            }
            if(i===2||i===5){
                tile.style.borderBottom = "2px solid black";
            }
             if(j===2||j===5){
                tile.style.borderRight= "2px solid black";
            }
            
            document.querySelector(".board").appendChild(tile);
        }
    }
    
}