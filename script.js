let canvas = document.getElementById("snake");/*recebe o id da pagina index*/ 
let context = canvas.getContext("2d");/*aqui criar o desenhor do jogo */
let box = 32;
let snake = [];
snake[0] ={
    x: 8 * box,
    y: 8 * box
}
let direction = "right";/*direcao da cobra */
let food = {/**e a comida da cobra e muda o valor onde ta */
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
function criarBG(){/*essa funcao vai desenhar e definir cor */
    context.fillStyle = "Lightgreen";/*da cor ao context e diferencia do body */
    context.fillRect(0, 0, 16 * box, 16 * box);/*desenha onde vai acontecer o jogo */

}

function criarcobrinha(){
for(i=0 ; i < snake.length; i++){/*vai pecorre todo o ARRay e vai encrementar,  vai pintar a cor da cobra e vai sentar o tamanho */
    context.fillStyle = "black";/**cor da cobra */
    context.fillRect(snake[i].x, snake[i].y ,box ,box);/**tamanho da cobra */
        
}
}
function drawFood(){/**comida da cobra */
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);/*vai pega o keydown que ele pega o evento de clike no teclado e passar para a funcao UPDATE */

function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";

}

function iniciarjogo(){

if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

for(i=1; i < snake.length; i++){/**criar um for que compara se a cabeça da cobra choca com o curpo  */
    if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
        clearInterval(jogo);
        alert('GMAER OVER :(')
    }
}

criarBG();
criarcobrinha();
drawFood();

/**cria a posição da cobra pra ela ter um ponto de partida */
let snakex = snake[0].x;
let snakey = snake[0].y;

/**criando as cordenada da cobra  */
if(direction == "right") snakex += box; /*direita */
if(direction == "left") snakex -= box;/*esquerda */
if(direction == "up") snakey -= box;/**pra cima */
if(direction == "down") snakey += box;/** pra baixo*/

if(snakex != food.x || snakey != food.y){ /** se for diferente continua removendo*/

snake.pop();/**dira o ultimo elemento do array */
}
else{/* recebe uma posicao aleatoria*/
    food.x = Math.floor(Math.random() * 15 + 1) * box;
    food.y = Math.floor(Math.random() * 15 + 1) * box;
}

let newHead = {/**sem vai acresentar a frente o unshift */
    x: snakex,
    y: snakey
}
snake.unshift(newHead);

}

let jogo = setInterval(iniciarjogo, 100);/**passando o intervalo do jogo */







