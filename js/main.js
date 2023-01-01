let aboutFunctionPressed = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}
  
function enableScroll() {
    window.onscroll = function() {};
}

let runFunction = true;
$(window).scroll(function() {
    var top_of_element = $(".small").offset().top;
    var bottom_of_element = $(".small").offset().top + $(".small").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen - 400 > top_of_element) && (top_of_screen < bottom_of_element - 400)){
        if(runFunction){
            runFunction = false;
            talkAboutSpaceBefore();
        }
    }
});

let textBeforeGalaxy = document.getElementsByClassName('aboutBeforeGalaxy')[0];
let textAstronaut = document.getElementsByClassName('textAstronaut')[0];

let galaxy = document.getElementsByClassName('small')[0];
function talkAboutSpaceBefore(){
    disableScroll();
    aboutFunctionPressed = true;
    sleep(1000).then(() => { 
        textBeforeGalaxy.innerHTML = 'A very long time ago, the universe started as just a single point.'
    });
    sleep(4000).then(() => { 
        createSolarSystem();
        textBeforeGalaxy.innerHTML = 'The universe stretched and expanded to get as big as it is now,';
        galaxy.style.animation = 'galaxyAnimation 5s linear 0ms 1 alternate forwards';
    });
    sleep(8000).then(() => { 
        textBeforeGalaxy.innerHTML = 'and it keeps on stretching. But how long did all of this take?';
    });
    sleep(12000).then(() => { 
        textBeforeGalaxy.innerHTML = 'Well it took around of 13.8 billion years to the universe be totally created';
    });
    sleep(16000).then(() => { 
        textBeforeGalaxy.innerHTML = 'But the earth is just 4.5 bilion years and the first lives were detect';
    });
    sleep(20000).then(() => { 
        enableScroll();
        textBeforeGalaxy.innerHTML = '3.7 billion years from now';
    });
    sleep(24000).then(() => { 
        textBeforeGalaxy.style.visibility = 'hidden';
        document.getElementsByClassName('astronautPhone')[0].style.opacity = "100%";
        document.getElementsByClassName('astronautPhone')[0].style.visibility = "visible";
        document.getElementsByClassName('bubble')[0].style.visibility = "visible";
        document.getElementsByClassName('bubble')[0].style.opacity = "100%";

        document.getElementsByClassName('playPauseBtn')[0].style.visibility = "visible";
        document.getElementsByClassName('playPauseBtn')[0].style.opacity = "100%";

        document.getElementsByClassName('resetPlanetsBtn')[0].style.visibility = "visible";
        document.getElementsByClassName('resetPlanetsBtn')[0].style.opacity = "100%";
        aboutFunctionPressed = false;
    });
}

function createSolarSystem(){
    
    document.getElementsByClassName('planets')[0].style.visibility = "visible";
    document.getElementsByClassName('planets')[1].style.visibility = "visible";
    document.getElementsByClassName('planets')[2].style.visibility = "visible";
    document.getElementsByClassName('planets')[3].style.visibility = "visible";
    document.getElementsByClassName('planets')[4].style.visibility = "visible";
    document.getElementsByClassName('planets')[5].style.visibility = "visible";
    document.getElementsByClassName('planets')[6].style.visibility = "visible";
    document.getElementsByClassName('planets')[7].style.visibility = "visible";
    document.getElementsByClassName('planets')[8].style.visibility = "visible";

    document.getElementsByClassName('planets')[0].style.opacity = "100%";
    document.getElementsByClassName('planets')[1].style.opacity = "100%";
    document.getElementsByClassName('planets')[2].style.opacity = "100%";
    document.getElementsByClassName('planets')[3].style.opacity = "100%";
    document.getElementsByClassName('planets')[4].style.opacity = "100%";
    document.getElementsByClassName('planets')[5].style.opacity = "100%";
    document.getElementsByClassName('planets')[6].style.opacity = "100%";
    document.getElementsByClassName('planets')[7].style.opacity = "100%";
    document.getElementsByClassName('planets')[8].style.opacity = "100%";

    document.getElementsByClassName("test")[0].style.transform = "scale(1)";
}

function talkWithArnold(){
    if(aboutFunctionPressed==false){
        aboutFunctionPressed = true;
        disableScroll();
        textAstronaut.innerHTML = 'Im going to tell you about our solar system.';

        sleep(4000).then(() => { 
            textAstronaut.innerHTML = 'There are many planetary systems like ours in the universe,';
        });
        sleep(8000).then(() => { 
            textAstronaut.innerHTML = 'with planets orbiting a host star. Our planetary system is';
        });
        sleep(12000).then(() => { 
            textAstronaut.innerHTML = 'called the solar system because we use the word solar to';
        });
        sleep(16000).then(() => { 
            textAstronaut.innerHTML = 'describe things related to our star, after the Latin word';
        });
        sleep(20000).then(() => { 
            textAstronaut.innerHTML = 'for Sun, solis.Our planetary system is located in an outer';
        });
        sleep(24000).then(() => { 
            textAstronaut.innerHTML = 'spiral arm of the Milky Way galaxy. Our solar system consists';
        });
        sleep(28000).then(() => { 
            textAstronaut.innerHTML = 'of our star, the Sun, and everything bound to it by gravity,the';
        });
        sleep(32000).then(() => { 
            textAstronaut.innerHTML = 'planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus,';
        });
        sleep(36000).then(() => { 
            textAstronaut.innerHTML = 'and Neptune, dwarf planets such as Pluto, dozens of moons, and';
        });
        sleep(40000).then(() => { 
            textAstronaut.innerHTML = 'millions of asteroids, comets, and meteoroids. Beyond our own';
        });
        sleep(44000).then(() => { 
            textAstronaut.innerHTML = 'solar system, we have discovered thousands of planetary systems';
        });
        sleep(44000).then(() => { 
            textAstronaut.innerHTML = 'orbiting other stars in the Milky Way.';
        });
        sleep(48000).then(() => { 
            textAstronaut.innerHTML = 'Keep exploring and don´t forget my name.';
            aboutFunctionPressed = false;
            enableScroll();
        });
    }
    else{
        alert('Wait the end of the conversation');
    }
}

function aboutSun(){
    if(aboutFunctionPressed==false){
        aboutFunctionPressed = true;
        disableScroll();
        textAstronaut.innerHTML = 'Our Sun is a 4.5 billion-year-old star a hot glowing ball of';
        sleep(4000).then(() => { 
            textAstronaut.innerHTML = 'hydrogen and helium at the center of our solar system.';
        });
        sleep(8000).then(() => { 
            textAstronaut.innerHTML = 'The Sun is about 150 million kilometers from Earth, and';
        });
        sleep(12000).then(() => { 
            textAstronaut.innerHTML = 'without its energy, life as we know it could not exist here';
        });
        sleep(16000).then(() => { 
            textAstronaut.innerHTML = 'on our home planet.';
        });
        sleep(20000).then(() => { 
            textAstronaut.innerHTML = 'Keep exploring and don´t forget my name.';
            aboutFunctionPressed = false;
            enableScroll();
        });
    }
    else{
        alert('Wait the end of the conversation');
    }
}

function aboutMercury(){
    if(aboutFunctionPressed==false){
        aboutFunctionPressed = true;
        disableScroll();
        textAstronaut.innerHTML = 'Mercury the smallest planet in our solar system and closest';
        sleep(4000).then(() => { 
            textAstronaut.innerHTML = 'to the Sun is only slightly larger than Earth´s Moon.';
        });
        sleep(8000).then(() => { 
            textAstronaut.innerHTML = 'Mercury is the fastest planet,';
        });
        sleep(10000).then(() => { 
            textAstronaut.innerHTML = 'zipping around the Sun every 88 Earth days.';
        });
        sleep(12000).then(() => { 
            textAstronaut.innerHTML = 'Keep exploring and don´t forget my name.';
            aboutFunctionPressed = false;
            enableScroll();
        });
    }
    else{
        alert('Wait the end of the conversation');
    }
}

function aboutVenus(){
    if(aboutFunctionPressed==false){
        aboutFunctionPressed = true;
        disableScroll();
        textAstronaut.innerHTML = 'Venus is the second planet from the Sun and is Earth’s closest';
        sleep(4000).then(() => { 
            textAstronaut.innerHTML = 'planetary neighbor.It’s one of the four inner, terrestrial';
        });
        sleep(8000).then(() => { 
            textAstronaut.innerHTML = 'planets,and it’s often called Earth’s twin because it’s similar';
        });
        sleep(12000).then(() => { 
            textAstronaut.innerHTML = 'in size and density. These are not identical twins, however there';
        });
        sleep(16000).then(() => { 
            textAstronaut.innerHTML = 'are radical differences between the two worlds.';
        });
        sleep(18000).then(() => { 
            textAstronaut.innerHTML = 'Keep exploring and don´t forget my name.';
            aboutFunctionPressed = false;
            enableScroll();
        });
    }
    else{
        alert('Wait the end of the conversation');
    }
}

function aboutEarth(){
    if(aboutFunctionPressed==false){
        aboutFunctionPressed = true;
        disableScroll();
        textAstronaut.innerHTML = 'Earth our home planet is the only place we know of so far';
        sleep(4000).then(() => { 
            textAstronaut.innerHTML = 'that’s inhabited by living things. It´s also the only planet';
        });
        sleep(8000).then(() => { 
            textAstronaut.innerHTML = 'in our solar system with liquid water on the surface.';
        });
        sleep(12000).then(() => { 
            textAstronaut.innerHTML = 'Keep exploring and don´t forget my name.';
            aboutFunctionPressed = false;
            enableScroll();
        });
    }
    else{
        alert('Wait the end of the conversation');
    }
}

function aboutMars(){
    if(aboutFunctionPressed==false){
        aboutFunctionPressed = true;
        disableScroll();
        textAstronaut.innerHTML = '​Mars is the fourth planet from the Sun a dusty, cold, desert';

        sleep(4000).then(() => { 
            textAstronaut.innerHTML = 'world with a very thin atmosphere. Mars is also a dynamic';
        });

        sleep(8000).then(() => { 
            textAstronaut.innerHTML = 'planet with seasons, polar ice caps, canyons, extinct volcanoes,';
        });
        sleep(12000).then(() => { 
            textAstronaut.innerHTML = 'and evidence that it was even more active in the past.';
        });
        sleep(12000).then(() => { 
            enableScroll();
            textAstronaut.innerHTML = 'Keep exploring and don´t forget my name.';
            aboutFunctionPressed = false;
        });
    }
    else{
        alert('Wait the end of the conversation');
    }
}

function aboutJupiter(){
    if(aboutFunctionPressed==false){
        aboutFunctionPressed = true;
        disableScroll();
        textAstronaut.innerHTML = 'Jupiter is more than twice as massive than the other planets';

        sleep(4000).then(() => { 
            textAstronaut.innerHTML = 'of our solar system combined. The giant planet´s Great Red spot';
        });

        sleep(8000).then(() => { 
            textAstronaut.innerHTML = 'is a centuries-old storm bigger than Earth.';
        });

        sleep(12000).then(() => { 
            textAstronaut.innerHTML = 'Keep exploring and don´t forget my name.';
            aboutFunctionPressed = false;
            enableScroll();
        });
    }
    else{
        alert('Wait the end of the conversation');
    }
}

function aboutSaturn(){
    if(aboutFunctionPressed==false){
        aboutFunctionPressed = true;
        disableScroll();
        textAstronaut.innerHTML = 'Adorned with a dazzling, complex system of icy rings, Saturn';
        sleep(4000).then(() => { 
            textAstronaut.innerHTML = 'is unique in our solar system. The other giant planets have rings,';
        });
        sleep(8000).then(() => { 
            textAstronaut.innerHTML = 'but none are as spectacular as Saturn´s.';
        });
        sleep(12000).then(() => { 
            textAstronaut.innerHTML = 'Keep exploring and don´t forget my name.';
            aboutFunctionPressed = false;
            enableScroll();
        });
    }
    else{
        alert('Wait the end of the conversation');
    }
}

function aboutUranus(){
    if(aboutFunctionPressed==false){
        aboutFunctionPressed = true;
        disableScroll();
        textAstronaut.innerHTML = 'Uranus seventh planet from the Sun rotates at a nearly 90deg';
        sleep(4000).then(() => { 
            textAstronaut.innerHTML = 'angle from the plane of its orbit. This unique tilt makes';
        });
        sleep(8000).then(() => { 
            textAstronaut.innerHTML = 'Uranus appear to spin on its side.';
        });
        sleep(12000).then(() => { 
            textAstronaut.innerHTML = 'Keep exploring and don´t forget my name.';
            aboutFunctionPressed = false;
            enableScroll();
        });
    }
    else{
        alert('Wait the end of the conversation');
    }
}

function aboutNeptune(){
    if(aboutFunctionPressed==false){
        aboutFunctionPressed = true;
        disableScroll();
        textAstronaut.innerHTML = 'Neptune the eighth and most distant major planet orbiting our';
        sleep(4000).then(() => { 
            textAstronaut.innerHTML = 'Sun is dark, cold and whipped by supersonic winds. It was the';
        });
        sleep(8000).then(() => { 
            textAstronaut.innerHTML = 'first planet located through mathematical calculations, rather';
        });
        sleep(12000).then(() => { 
            textAstronaut.innerHTML = 'than by telescope.';
        });
        sleep(16000).then(() => { 
            textAstronaut.innerHTML = 'Keep exploring and don´t forget my name.';
            aboutFunctionPressed = false;
            enableScroll();
        });
    }
    else{
        alert('Wait the end of the conversation');
    }
}


//MAKING THE PLAY/PLAUSE OF THE PLANETS ANIMATIONS
let countPress = 0;
let mercury = document.querySelector('.mercury');
let venus = document.querySelector('.venus');
let earth = document.querySelector('.earth');
let mars = document.querySelector('.mars');
let jupiter = document.querySelector('.jupiter');
let saturn = document.querySelector('.saturn');
let uranus = document.querySelector('.uranus');
let neptune = document.querySelector('.neptune');

function playPauseAnimation(){
    if(countPress==0){
        countPress=1;
        mercury.style.animation = 'orbitMercury 2s linear infinite';
        venus.style.animation = 'orbitVenus 5.1s linear infinite';
        earth.style.animation = 'orbitEarth 8.3s linear infinite';
        mars.style.animation = 'orbitMars 15.7s linear infinite';
        jupiter.style.animation = 'orbitJupiter 99.5s linear infinite';
        saturn.style.animation = 'orbitSaturn 243s linear infinite';
        uranus.style.animation = 'orbitUranus 696s linear infinite';
        neptune.style.animation = 'orbitNeptune 1368.75s linear infinite';
    } else{
        console.log(countPress)
        mercury.style.animationPlayState  = 'paused';
        venus.style.animationPlayState  = 'paused';
        earth.style.animationPlayState  = 'paused';
        mars.style.animationPlayState  = 'paused';
        jupiter.style.animationPlayState  = 'paused';
        saturn.style.animationPlayState  = 'paused';
        uranus.style.animationPlayState  = 'paused';
        neptune.style.animationPlayState  = 'paused';
        countPress = 0;
    }
}

function resetPlanets(){
    mercury.style.animationPlayState  = 'paused';
    venus.style.animationPlayState  =   'paused';
    earth.style.animationPlayState  =   'paused';
    mars.style.animationPlayState  =    'paused';
    jupiter.style.animationPlayState  = 'paused';
    saturn.style.animationPlayState  =  'paused';
    uranus.style.animationPlayState  =  'paused';
    neptune.style.animationPlayState  = 'paused';

    mercury.style.animationName = 'none';
    venus.style.animationName   = 'none';
    earth.style.animationName   = 'none';
    mars.style.animationName    = 'none';
    jupiter.style.animationName = 'none';
    saturn.style.animationName  = 'none';
    uranus.style.animationName  = 'none';
    neptune.style.animationName = 'none';

    countPress = 0;
}
