let difficoltà = document.getElementById('difficult').value;
let box = document.createElement('div');
const easy_game= easy();
const medium_game= medium();
const hard_game= hard();


function play(){
    difficoltà = document.getElementById('difficult').value;

    switch(difficoltà) {
        case 'easy':
            
            break;
        case 'medium':
            medium();
            break;
        case 'hard':
            hard();
        default:
    }
}












/*--------------------------------------------Funzioni------------------------------------------------------*/
function easy(){

    for( let i=1; i <= 100; i++){
        box = document.createElement('div');
        box.classList.add('box');
        box.classList.add('box-easy');
        document.querySelector('.grid').appendChild(box);
        box.innerHTML= i;
    }
    return box
}
function medium(){

    for( let i=1; i <= 81; i++){
        box = document.createElement('div');
        box.classList.add('box');
        box.classList.add('box-medium');
        document.querySelector('.grid').appendChild(box);
        box.innerHTML= i
    }
    return box
}
function hard(){

    for( let i=1; i <= 49; i++){
        box = document.createElement('div');
        box.classList.add('box');
        box.classList.add('box-hard');
        document.querySelector('.grid').appendChild(box);
        box.innerHTML= i
    }
    return box
}

function cancella(){
    
}