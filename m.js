 let previous=document.querySelector('#pre');
 let play=document.querySelector('#play');
 let forw=document.querySelector('#forw');
 let title=document.querySelector('#title');
 let artist=document.querySelector('#artist');

 let slider=document.querySelector('#duration');
 let track_image=document.querySelector('#track_image');


let timer;
let autoplay=1;
let index_no=0;
let playing_song=false;
let track=document.createElement('audio');


let All_song=[
{
   name:"first song",
   path:"music/rr.mp3",
img:"image/r.jpg",
artist:' "super star"' 


},

{
   name:"second song",
   path:"music/kk.mp3",
  img:"image/k.jpg",
  artist:' "ulaga nayagan"' 


},
{
   name:"third song",
   path:"music/vv.mp3",
img:"image/v.jpg",
artist:' "thalapathy"' ,


}

];
function load_track(index_no)
{

clearInterval(timer);
reset_slider();
track.src=All_song[index_no].path;
title.innerHTML=All_song[index_no].name;
track_image.src=All_song[index_no].img;
artist.innerHTML=All_song[index_no].artist;


timer=setInterval(range_slider,1000);
total.innerHTML=All_song.length;
present.innerHTML=index_no+1;
}

load_track(index_no);


function play()
{
if(playing_song==false)
{
playsong();
}
else
{
pausesong();
}

}

function reset_slider()
{

slider.value=0;
}





