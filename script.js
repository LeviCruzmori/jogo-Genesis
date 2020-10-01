let order = [];
let clickedOder = [];
let score = 0;

//0 - green
//1 - red
//2 - yellow
//3 - blue
// declarando chamado das classes
const blue  = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// cria ordem aleatoria de cores
let shuffleOrder = ()=>{
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length]= colorOrder;
    clickedOder = [];
    //usando o for para percorrer o array
    for(let i in order){///para cada elem,ento color 
        let elementColor = createColorElement(order[i]);
        linghtColor(elementColor, Number(i)+1);
    }
}

// função que vai acendere a proxima cor
let linghtColor = (element, number)=> {
    number = number * 500;
    setTimeout(()=>{
        element.classList.add('selected');
    },number -250)
    //remove a classe fazendo um loop
    setTimeout(()=>{
        element.classList.remove('selected')
    });
}
/// criar variavel que  verifica se foi clicado na mesma order apresentada.
let checkOrder = () =>{
    for(let i in clickedOder){
        if(clickedOder[i] != order[i]){           
            gameOver();
            break;
        } 
    }

    if(clickedOder.length == order.length){
        alert(`Pontuação: ${score}\n Voce acertou! Iniciando o proximo nivel!`)
         nextLevel();
    
}
 }   
//função para o clik do usuario.

let click = (color) => {
    clickedOder[clickedOder.length] = color;
    createColorElement(color).classList.add('selectd');

    setTimeout( ()=>{
        createColorElement(color).classList.remove('selected')

        checkOrder();
    },250);
    
}

//criando a function que retorna a cor
let createColorElement = (color)=>{
    if(color == 0){
        return green;
    }
    else    
        if(color == 1)
        {
            return red;       
        }
    else    
        if(color == 2)
        {
            return yellow;
        }
    else
        if(color == 3)
        {
            return blue;
        }
    }
 //função para o proximo nivel do jogo
  let nextLevel = () => {
      score++;
      shuffleOrder();
  }

  //função game hover
let gameOver = ()=>{
    alert(`Pontuação:${score}!\nvoce perdeu o jogo\n clique em OK para iniciar um novo jogo`);
    order = [];
    clickedOder = [];

    playGame();
}
// função de inicio do jogo
let playGame = ()=>{
    alert('bem vindo ao Gênesis! Iniciando novo jogo!');
    score=0;

    nextLevel();
}

// green.addEventListener('click', click(0));
// red.addEventListener('click', click(1));
// yellow.addEventListener('click', click(2));
// blue.addEventListener('click', click(3));
// eventos de click prar chamar as cores
green.onclick = ()=> click(0);
red.onclick = ()=> click(1)
yellow.onclick = ()=> click(2)
blue.onclick = ()=> click(3)

// inicio do jogo
playGame();