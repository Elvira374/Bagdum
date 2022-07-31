'use strict';

window.addEventListener('load', function () {
    // появление
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }
    let elements = document.querySelectorAll('.element-animation');
    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);


    for (let elem of elements) {
        observer.observe(elem);
    }

    if (document.documentElement.clientWidth < 900) {
        for (let elem of elements) {
            elem.classList.remove('element-animation');
        }
    }

    //menu
    document.getElementById('openBtn').addEventListener('click', function () {
        document.getElementById("mySidenav").style.width = "100%";
    });
    document.getElementById('closeBtn').addEventListener('click', function () {
        document.getElementById("mySidenav").style.width = "0";
    });

    //images 
    let images = document.querySelectorAll('.work-img');
    if (document.documentElement.clientWidth < 830) {
        for (let i = 0; i < images.length; i++) {
            images[i].src = 'img/work-mobile/' + (i + 1) + '.png'
        }
    }
});