window.onload = function () {
    var snake = new Array();
    snake[0] = {
        x: Math.floor(Math.random() * 50) * 10,
        y: Math.floor(Math.random() * 50) * 10
    };
    var
        fruitX = Math.floor(Math.random() * 50) * 10,
        div,
        cell = 10,
        score=0,
        fruitY = Math.floor(Math.random() * 50) * 10;

    var snake = new Array();
    snake[0] = {
        x: Math.floor(Math.random() * 50) * 10,
        y: Math.floor(Math.random() * 50) * 10
    };

    function spawn() {
        document.querySelector('.fruit').style.transform = `translateX(${fruitX}px) translateY(${fruitY}px)`;
        document.querySelector('.snake0').style.transform = `translateX(${snake[0].x}px) translateY(${snake[0].y}px)`;
    }

    spawn()


    document.addEventListener('keydown', move)

    function move(e) {
        if (e.keyCode == 37 && div != "right")
            div = "left";
        if (e.keyCode == 39 && div != "left")
            div = "right";
        if (e.keyCode == 38 && div != "down")
            div = "up";
        if (e.keyCode == 40 && div != "up")
            div = "down";
        console.log(div);
    }
    function eatTail(head, arr){
        for (let i=0; i<arr.length; i++){
            if(head.x== arr[i].x && head.y==arr[i].y){
                clearInterval(mm);
                document.querySelector('h1').style.color="white";
            }
        }
    }

    function events() {
        document.querySelector('h2').innerHTML=score;

        let snakeX=snake[0].x,
            snakeY=snake[0].y;

        snake.pop();
        
        if (div=="left") snakeX-= cell;
        if (div=="right") snakeX+= cell;
        if (div=="up") snakeY-= cell;
        if (div=="down") snakeY+= cell;
        let newHead={
            x:snakeX,
            y:snakeY
        };   

        eatTail(newHead,snake);

        snake.unshift(newHead);

        for (let i = 0; i < snake.length; i++) {
            document.querySelector(`.snake${i}`).style.transform = `translateX(${snake[i].x}px) translateY(${snake[i].y}px)`;
        }

        if(snakeX== fruitX && snakeY==fruitY){
            score++;
            fruitX = Math.floor(Math.random() * 50) * 10;
            fruitY = Math.floor(Math.random() * 50) * 10;
            document.querySelector('.fruit').style.transform = `translateX(${fruitX}px) translateY(${fruitY}px)`;
            document.querySelector(`.snake0`).insertAdjacentHTML('afterend', `<div class="snake${score}" style="position: absolute;width: 10px;height: 10px;background: red;"></div>`)
            snake.unshift(newHead);
            console.log(snake)
        }
        if (snakeX<0 || snakeX>=500 || snakeY<0 ||snakeY>=500){
            clearInterval(mm);
            document.querySelector('h1').style.color="white";
        }
    }
    var mm = setInterval(events, 100)
}