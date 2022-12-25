
let songIndex=0
let audioElement=new Audio('songs/1.mp3')
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar')
let songItems=document.getElementsByClassName('songName')


console.log("Hello")
let songs=[
    {songname:'Warriyo - Mortals' , filePath:'songs/1.mp3' , coverPath:'covers/1.jpg' },
    {songname:'Cielo - Huma-Huma' , filePath:'songs/2.mp3' , coverPath:'covers/2.jpg' },
    {songname:'DEAF KEV - Invincible' , filePath:'songs/3.mp3' , coverPath:'covers/3.jpg' },
    {songname:'Different Heaven EH!DE - My Heart' , filePath:'songs/4.mp3' , coverPath:'covers/4.jpg' },
    {songname:'Janji-Heroes-Tonight-feat-Johnning' , filePath:'songs/5.mp3' , coverPath:'covers/5.jpg' },
    {songname:'Rabba' , filePath:'songs/6.mp3' , coverPath:'covers/6.jpg' },
    {songname:'Sakhiyaan' , filePath:'songs/7.mp3' , coverPath:'covers/7.jpg' },
    {songname:'Dont let me down' , filePath:'songs/8.mp3' , coverPath:'covers/8.jpg' },
    {songname:'Friends' , filePath:'songs/9.mp3' , coverPath:'covers/9.jpg' },
    {songname:'Dream' , filePath:'songs/10.mp3' , coverPath:'covers/10.jpg'}
]

// songItems.forEach((element,i)=>{
//     element.getElementByTagName('img')[0].src=songs[i].coverPath
//     element.getElementsByClassName('span')[0].innerText=songs[i].songname
// })


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play()
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
        document.getElementById('songInfo').innerText=songs[songIndex].songname
        document.getElementById('playing').style.opacity=1
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause')
        masterPlay.classList.add('fa-play')
        document.getElementById('playing').style.opacity=0
    }
})

audioElement.addEventListener('timeupdate',()=>{
    // console.log(audioElement.currentTime+' --- '+audioElement.duration)
    myProgressBar.value=parseInt((audioElement.currentTime/audioElement.duration)*100)
    // myProgressBar.value=progress
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays()
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src=`songs/${songIndex+1}.mp3`
        audioElement.currentTime=0
        document.getElementById('songInfo').innerText=songs[songIndex].songname
        audioElement.play()
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
    }) 
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex+=1
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    audioElement.currentTime=0
    audioElement.play()
    document.getElementById('songInfo').innerText=songs[songIndex].songname
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    audioElement.currentTime=0
    audioElement.play()
    document.getElementById('songInfo').innerText=songs[songIndex].songname
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
})