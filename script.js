const title=document.querySelector('.logoText');
const songName=document.querySelector(".songList")

const songsNames=[
    "dsad",
    "Sondsdasg 2",
    "Song dsadsa3",
    "Song 4",
    "Song 5",
    "Song 6",
    "Song 6",
    "Song 6",
    "Song 6",
    "Song 6",
    "Song 6",
    "Song 6",
    "Song 6",
    "Song 6",
    "Song 6",
]
songsNames.map((song)=>{
    const liTage=document.createElement('li');
    liTage.classList.add('song');
    liTage.textContent=song;
    songName.appendChild(liTage);
    liTage.textContent=song;
   
})
title.textContent="Music App";
title.style.color="green";

