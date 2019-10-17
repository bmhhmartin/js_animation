 var canvas = document.getElementById("demoaa");
       var ctx = canvas.getContext("2d");
       var balls = [
            {x: 50, y: 90, color: "red", dx: 2, dy: 2},
            {x: 700, y: 10, color: "pink", dx: 4, dy: 2},
            {x: 270, y: 200, color: "blue", dx: 2, dy: 2},
            {x: 60, y: 350, color: "yellow", dx: 4, dy: 2},
            {x: 540, y: 300, color: "#ff6f32", dx: -2, dy: 2},
            {x: 500, y: 30, color: "#abb1ba", dx: -2, dy: -2},
            {x: 210, y: 90, color: "#6e31ff", dx: -2, dy: -2},
            {x: 10, y: 70, color: "#b6ff0a", dx: -2, dy: -2},
        ]
       function animation() {
            ctx.clearRect(0,0,800,500);
        for(var i = 0; i<balls.length; i ++){
            
            var ball = balls[i];
            if (ball.y == 400 || ball.y==0) {
                    ball.dy = -ball.dy;
                }
                else if (ball.x== 700 || ball.x==0) {
                    ball.dx = -ball.dx;
                }
        
                   ball.x = ball.x + ball.dx;
                   ball.y = ball.y + ball.dy;
                   ctx.fillStyle = ball.color;
                   ctx.fillRect(ball.x, ball.y, 100, 100);
                }
        }
       setInterval(animation, 10);