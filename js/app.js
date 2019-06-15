particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 100,
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "image",
            "image": {
                "src": "img/gift.jpg",

            }
        },
        "size": {
            "value": 50,
            "anim": {
                "enable": true
            }
        },
        "line_linked": {
            "enable": "true",
            "distance": "300",
            "color": "#111",
            "opacity": ".5"
        },
        "move":{
            "speed":3,
            "random":"true",
            "attract":{
                "enable":"false",
                "rotateX": 600,
                "rotateY": 600
            }
        }

    },

    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
})
