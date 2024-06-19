// script.js
// /* 1b1a1aca */

let navbar = document.getElementById('navbar')
document.getElementById('hero').addEventListener('scroll', function() {
    const hero = this;
    const scrollPosition = hero.scrollTop;
    
    if(scrollPosition>0){
        // navbar.style.transitionDelay = 
        navbar.style.backgroundColor = "rgb(18, 18, 18)"
        if(scrollPosition>200){
            hero.style.backgroundImage = "linear-gradient(to bottom, #1b1a1aca  0%, rgba(57, 57, 57, 0.237) 60%, rgb(0, 0, 0) 100%)"

    }
}else{
    
    hero.style.backgroundImage = "linear-gradient(to bottom, #302f2fce 0%, rgba(0, 0, 0, 0.527) 60%, rgb(0, 0, 0) 100%)"
    navbar.style.backgroundColor = "transparent"
        
    }
});
