function playOnHover(){
    const video = document.querySelector('.videoplay');
    
    video.addEventListener("mouseover", function(){
        this.play();
    })

    video.addEventListener("mouseleave", function(){
        this.pause();
    })
}

playOnHover();