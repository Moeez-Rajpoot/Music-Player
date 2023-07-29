const  progress = document.getElementById('progress');
const  img = document.getElementById('music-img');
const play = document.getElementById('play');
const song = document.getElementById('song');


song.onloadedmetadata = function () {

    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
    progress.max = song.duration;
    progress.value= song.currentTime;
    
}




play.addEventListener('click' , ()=>{
    if (play.classList.contains("fa-pause")) {
        song.pause();
        img.classList.remove("animate");
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
    }
    else
    {
        song.play();
        img.classList.add("animate");
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");

    }  
});

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
      }, 1000);
      
    
  } 


progress.onchange =  function () {
    song.play();
    song.currentTime = progress.value;
    play.classList.remove("fa-play");
        play.classList.add("fa-pause");

}
