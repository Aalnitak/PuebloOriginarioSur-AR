AFRAME.registerComponent('lejos-off', {

    tick: function() {
        let marker = this.el;
        let camPos = new THREE.Vector3();
        let dir = new THREE.Vector3();
        let c = marker.children;
        document.querySelector('a-entity[camera]').object3D.getWorldDirection(camPos);
        let currPos = marker.object3D.position;

        dir.copy(camPos).sub(currPos);

        let distance = dir.length();
        if (distance > 15) {
            marker.firstElementChild.setAttribute('visible', false);
        } else {
            marker.firstElementChild.setAttribute('visible', true);
        }
    }
});
// info de prueba que agrega un texto a un tag <p> en un <div id="hud">
AFRAME.registerComponent('info_p', {
    schema: {
        type: 'string',
        default: "no hay nada"
    },
    init: function() {
        const marker = this.el;
        marker.addEventListener('markerFound', function() {
            let p = document.createElement("p");
            p.id = marker.id;
            p.className = 'estilo';
            p.innerHTML = marker.components.info.attrValue;
            if (marker.firstElementChild.getAttribute('visible') == true) {
                document.getElementById('hud').appendChild(p)
            }
        });
        marker.addEventListener('markerLost', function() {
            document.getElementById(marker.id).remove();
        });

    }
});

AFRAME.registerComponent('infopng', {
    schema: {
        type: 'string',
        default: "no hay nada"
    },
    init: function() {
        const marker = this.el;
        const img = document.getElementById("imagen-txt")
        console.log(img)
        marker.addEventListener('markerFound', function() {
            
            if (marker.firstElementChild.getAttribute('visible') == true) {
                img.setAttribute("src", marker.components.infopng.attrValue ) 
                img.setAttribute("alt", marker.components.infopng.attrValue ) 
                img.style.display = "block";
            }
        });

        marker.addEventListener('markerLost', function() {
            img.setAttribute("src", "" ) 
            img.setAttribute("alt", "" ) 
            img.style.display = "none"
        });

    }
});

AFRAME.registerComponent('popup', {
    init: function() {
        const marker = this.el;
        marker.addEventListener('markerFound', function() {

  
                marker.firstElementChild.setAttribute('animation__rotation', {
                    property: 'rotation',
                    from: '-90 0 0',
                    to: '-50 0 0',
                    dur: 8000,
                    loop: 1
                });
                marker.firstElementChild.setAttribute('rotation', '-25 0 0');
      
        });
        marker.addEventListener('markerLost', function() {
          
                marker.firstElementChild.setAttribute('animation__rotation', {
                    property: 'rotation',
                    from: '-200 0 0',
                    to: '-110 0 0',
                    dur: 4000,
                    loop: 3
                });
                marker.firstElementChild.setAttribute('rotation', '-90 0 0');
        });
    },
});

//para version lookat
AFRAME.registerComponent('popup2', { 
    init: function() {
        const marker = this.el;
        marker.addEventListener('markerFound', function() {

  
                marker.firstElementChild.setAttribute('animation__rotation', {
                    property: 'rotation',
                    from: '-200 0 0',
                    to: '-110 0 0',
                    dur: 4000,
                    loop: 1
                });
                marker.firstElementChild.setAttribute('rotation', '-110 0 0');
      
        });
        marker.addEventListener('markerLost', function() {
          
            marker.firstElementChild.setAttribute('animation__rotation', {
                property: 'rotation',
                from: '-200 0 0',
                to: '-110 0 0',
                dur: 4000,
                loop: 3
            });
            marker.firstElementChild.setAttribute('rotation', '-200 0 0');
        });
    },
});

AFRAME.registerComponent('fade-in', {
    init: function() {
        const marker = this.el;
        // let c = marker.children;

        marker.addEventListener('markerFound', function() {

          
                marker.firstElementChild.setAttribute('animation__fade', {
                    property: 'material.opacity',
                    from: '0.1',
                    to: '1',
                    dur: 4000,
                    loop: 1
                });
                marker.firstElementChild.setAttribute('material.opacity', '1');
            

        });
        marker.addEventListener('markerLost', function() {

          
                marker.firstElementChild.setAttribute('animation__fade', {
                    property: 'material.opacity',
                    from: '1',
                    to: '0',
                    dur: 4000,
                    loop: 3
                });
                marker.firstElementChild.setAttribute('material.opacity', '0');
            

        });
    },

});


AFRAME.registerComponent('fade-in-popup', {
    init: function() {
        const marker = this.el;
        // let c = marker.children;

        marker.addEventListener('markerFound', function() {

          
                marker.firstElementChild.setAttribute('animation__fade', {
                    property: 'material.opacity',
                    from: '0.1',
                    to: '1',
                    dur: 4000,
                    loop: 1
                });
                marker.firstElementChild.setAttribute('material.opacity', '1');
                
                marker.firstElementChild.setAttribute('animation__rotation', {
                    property: 'rotation',
                    from: '-90 0 0',
                    to: '-50 0 0',
                    dur: 8000,
                    loop: 1
                });
                marker.firstElementChild.setAttribute('rotation', '-50 0 0');
            

        });
        marker.addEventListener('markerLost', function() {

          
                marker.firstElementChild.setAttribute('animation__fade', {
                    property: 'material.opacity',
                    from: '1',
                    to: '0',
                    dur: 4000,
                    loop: 3
                });
                marker.firstElementChild.setAttribute('material.opacity', '0');

                marker.firstElementChild.setAttribute('animation__rotation', {
                    property: 'rotation',
                    from: '-90 0 0',
                    to: '-80 0 0',
                    dur: 5000,
                    loop: 5
                });
                marker.firstElementChild.setAttribute('rotation', '0 0 0');
            

        });
    },

});

AFRAME.registerComponent('lookat', {

    tick: function() {
        let marker = this.el;
        let c = marker.children;
        let camPos = new THREE.Vector3();
        document.querySelector('a-entity[camera]').object3D.getWorldDirection(camPos);

        for (let i = 0; i < c.length; i++) {
            marker.firstElementChild.object3D.lookAt(camPos);
        }
        // marker.object3D.lookAt(camPos);
    }

});

AFRAME.registerComponent('olas', {

    init: function() {
        let marker = this.el;
        marker.addEventListener('markerFound', function() {
            marker.children[0].setAttribute('animation__olas', {
                property: 'position',
                from: '-0.03 0.5 0',
                to: '0.03 0.5 0',
                dir: 'alternate',
                dur: 2000,
                loop: 30
            });
        });
        marker.addEventListener('markerLost', function() {
            marker.children[0].setAttribute('animation__olas', {
                property: 'position',
                from: '-0.03 0.5 0',
                to: '0.03 0.5 0',
                dir: 'alternate',
                dur: 2000,
                loop: 1
            });
        });
    }
});




// window.addEventListener('camera-init', (data) => {
//     console.log('camera-init', data);
// })
// window.addEventListener('camera-error', (error) => {
//     console.log('camera-error', error);
// })