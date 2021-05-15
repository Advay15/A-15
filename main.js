var reasons=["Advay Goel","Avirat Goel","Shikha Goel","Akashdeep Goel"];
var images=["IMG_20210508_182631.jpg","IMG_20210213_161730.jpg","IMG_20210305_225039__01.jpg","IMG_20200706_114544.jpg"];
var index=0;
function nextslide(){
document.getElementById("reasontext").innerHTML=reasons[index];
document.getElementById("album").src=images[index];
index++;
if(index==4){
index=0;
}
document.getElementById("audio").play();
}