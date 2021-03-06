window.onload = function() {
    canv = document.getElementById("ground");
    gtx = canv.getContext("2d");
    starter_player();
    setInterval(game,80);
}

function game() {
    gtx.fillStyle = "black";
    gtx.fillRect(0,0,680,680);

    gtx.fillStyle = "white";

    /*for column*/
    gtx.fillRect(220,20,20,640);
    gtx.fillRect(440,20,20,640);

    /* for row */
    gtx.fillRect(20,220,640,20);
    gtx.fillRect(20,440,640,20);

    gtx.font = "200px Georgia";
    draw_text();
}

box1 = ' ';
box2 = ' ';
box3 = ' ';
box4 = ' ';
box5 = ' ';
box6 = ' ';
box7 = ' ';
box8 = ' ';
box9 = ' ';
compeletebox = 0;
main_player = 'O';
start_player = 0;

function starter_player() {
    starter_player = Math.floor(Math.random()*2);
    if(starter_player === 0) {
        main_player = 'O';
    }
    else {
        main_player = 'X';
    }
}

function next_player() {
    if(main_player === 'O') {
        main_player = 'X';
    }
    else {
        main_player = 'O';
    }
}

var x = 0;
var y = 0;
function cursor_position(event) {
    x = event.clientX;
    y = event.clientY;
}




function draw_text() {
    if((x > 20 && x < 220) && (y > 20 && y < 220))
    {
        if (box1 === ' ') {
            gtx.fillText(main_player,40,200);
            box1 = main_player;
            check_winner();
            next_player();
            compeletebox = compeletebox + 1;
        }
    }
    else if((x > 240 && x < 440) && (y > 20 && y < 220))
    {
        if (box2 === ' ') {
            gtx.fillText(main_player,260,200);
            box2 = main_player;
            check_winner();
            next_player();
            compeletebox = compeletebox + 1;
        }
    }
    else if((x > 460 && x < 660) && (y > 20 && y < 220))
    {
        if (box3 === ' ') {
            gtx.fillText(main_player,480,200);
            box3 = main_player;
            check_winner();
            next_player();
            compeletebox = compeletebox + 1;
        }
    }
    else if((x > 20 && x < 220) && (y > 240 && y < 440))
    {
        if (box4 === ' ') {
            gtx.fillText(main_player,40,420);
            box4 = main_player;
            check_winner();
            next_player();
            compeletebox = compeletebox + 1;
        }
    }
    else if((x > 240 && x < 440) && (y > 240 && y < 440))
    {
        if (box5 === ' ') {
            gtx.fillText(main_player,260,420);
            box5 = main_player;
            check_winner();
            next_player();
            compeletebox = compeletebox + 1;
        }
    }
    else if((x > 460 && x < 660) && (y > 240 && y < 440))
    {
        if (box6 === ' ') {
            gtx.fillText(main_player,480,420);
            box6 = main_player;
            check_winner();
            next_player();
            compeletebox = compeletebox + 1;
        }
    }
    else if((x > 20 && x < 220) && (y > 460 && y < 660))
    {
        if (box7 === ' ') {
            gtx.fillText(main_player,40,640);
            box7 = main_player;
            check_winner();
            next_player();
            compeletebox = compeletebox + 1;
        }
    }
    else if((x > 240 && x < 440) && (y > 460 && y < 660))
    {
        if (box8 === ' ') {
            gtx.fillText(main_player,260,640);
            box8 = main_player;
            check_winner();
            next_player();
            compeletebox = compeletebox + 1;
        }
    }
    else if((x > 460 && x < 660) && (y > 460 && y < 660))
    {
        if (box9 === ' ') {
            gtx.fillText(main_player,480,640);
            box9 = main_player;
            check_winner();
            next_player();
            compeletebox = compeletebox + 1;
        }
    }
    gtx.fillText(box1,40,200);
    gtx.fillText(box2,260,200);
    gtx.fillText(box3,480,200);
    gtx.fillText(box4,40,420);
    gtx.fillText(box5,260,420);
    gtx.fillText(box6,480,420);
    gtx.fillText(box7,40,640);
    gtx.fillText(box8,260,640);
    gtx.fillText(box9,480,640);
    x=0;
    y=0;
}

function check_winner() {
    if(box1 === main_player && box2 === main_player && box3 === main_player) {
        document.getElementById("statement").innerHTML = "player "+main_player+" won this game.";
    }
    else if(box4 === main_player && box5 === main_player && box6 === main_player) {
        document.getElementById("statement").innerHTML = "player "+main_player+" won this game.";
    }
    else if(box7 === main_player && box8 === main_player && box9 === main_player) {
        document.getElementById("statement").innerHTML = "player "+main_player+" won this game.";
    }
    else if(box1 === main_player && box4 === main_player && box7 === main_player) {
        document.getElementById("statement").innerHTML = "player "+main_player+" won this game.";
    }
    else if(box2 === main_player && box5 === main_player && box8 === main_player) {
        document.getElementById("statement").innerHTML = "player "+main_player+" won this game.";
    }
    else if(box3 === main_player && box6 === main_player && box9 === main_player) {
        document.getElementById("statement").innerHTML = "player "+main_player+" won this game.";
    }
    else if(box1 === main_player && box5 === main_player && box9 === main_player) {
        document.getElementById("statement").innerHTML = "player "+main_player+" won this game.";
    }
    else if(box3 ===  main_player && box5 === main_player && box7 === main_player) {
        document.getElementById("statement").innerHTML = "player "+main_player+" won this game.";
    }
    else if(compeletebox === 9) {
        document.getElementById("statement").innerHTML = "Game over!";
    }
}

function restartgame() {
    box1 = ' ';
    box2 = ' ';
    box3 = ' ';
    box4 = ' ';
    box5 = ' ';
    box6 = ' ';
    box7 = ' ';
    box8 = ' ';
    box9 = ' ';
    compeletebox = 0;
    main_player = 'O';
    start_player = 0;
    x = 0;
    y = 0;
    document.getElementById("statement").innerHTML = "";
}
