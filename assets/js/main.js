
//variabili
let difficoltà = document.getElementById('difficult').value;
let box = document.createElement('div');
let grid = document.querySelector('.grid');


//Al click compare il gioco in base alle difficoltà
function play(){
    difficoltà = document.getElementById('difficult').value;

    switch(difficoltà) {
        case 'easy':
            easy();
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
    //Cancella ogni div se c'è bisogno
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }

    //Crea i box nel grid
    for( let i=1; i <= 100; i++){
        box = document.createElement('div');
        box.classList.add('box');
        box.classList.add('box-easy');
        grid.appendChild(box);
        box.innerHTML= i;

        box.addEventListener('click', function(){
            this.classList.add('bg-azzurro');
            console.log(i)
        })
    }
    return box

}

function medium(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }

    for( let i=1; i <= 81; i++){
        box = document.createElement('div');
        box.classList.add('box');
        box.classList.add('box-medium');
        grid.appendChild(box);
        box.innerHTML= i

        box.addEventListener('click', function(){
            this.classList.add('bg-azzurro');
            console.log(i)
        })
    }
    return box
}

function hard(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }

    for( let i=1; i <= 49; i++){
        box = document.createElement('div');
        box.classList.add('box');
        box.classList.add('box-hard');
        grid.appendChild(box);
        box.innerHTML= i

        box.addEventListener('click', function(){
            this.classList.add('bg-azzurro');
            console.log(i)
        })
    }
    return box
}