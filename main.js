// Heart
const heart = document.querySelector(".heart");
let gambar2 = false;

heart.addEventListener("click", function(){
    if(gambar2){
        heart.src = "img/heart3.png";
        gambar2 = false;
    } else {
        heart.src="img/heart2.png";
        gambar2 = true;
    }
});
// HeartPost
const heartPost = document.querySelector(".heartPost");
let ubahHeart = false;

heartPost.addEventListener("click", function(){
    if(ubahHeart){
        heartPost.src = "img/heart3.png";
        ubahHeart = false;
    } else {
        heartPost.src="img/heart2.png";
        ubahHeart = true;
    }
});
// Save/tag post
const tag = document.getElementById("tagPost");
let tag2 = false;

tag.addEventListener("click", function(){
    if(tag2){
        tag.src = "postClone/tag.png";
        tag2=false;
    }else{
        tag.src = "postClone/tag2.png";
        tag2=true;
    }
})