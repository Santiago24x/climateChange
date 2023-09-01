document.getElementById('next').onclick = function (){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);}
document.getElementById('prev').onclick = function (){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);}
    /* ******************************* */
    const card =document.querySelector('.cardvideo');
    const video =document.querySelector('.video');
    card.addEventListener('mouseover', ()=>{video.play})
    card.addEventListener('mouseleave', ()=>{video.pause})