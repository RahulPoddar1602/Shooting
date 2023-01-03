function iShoot(enemy){
    enemy.classList.add("dead");
    enemyHealth(enemyhealthpoints -5);
    if(!livingEnemies().length){
        win.play();
        music.pause();
        alert("YOU WIN");
        window.location.reload();
    }
}
function newGame(){
    randomEnemyAttacks();
    document.querySelector("button").style.display="none";
    music.play();
}
function enemyAttacksMe(enemy){
    enemy.classList.add("showing");
    let time1  = Math.random()*2000 ;
    let time2  = Math.random()*4000 ;
    setTimeout(()=>{
        enemyShootsMe(enemy);
    },time1);
    setTimeout(()=>{
        enemy.classList.remove("showing");
    },time2);
}
function enemyShootsMe(enemy){
    if(!enemy.classList.contains("dead"))
    {
        enemyGunSound.play();
        enemy.classList.add("shooting");
        updateHealthPoints(healthPoints -5);
        let time3 = Math.random()*400 ;
        setTimeout(()=>{
            enemy.classList.remove("shooting");
        },time3);
    }
}
function livingEnemies(){
    return document.querySelectorAll(".enemy:not(.dead)"); 
}
function randomEnemyAttacks(){
    let enemies = livingEnemies();
    let randomEnemy = enemies[Math.floor(Math.random()*enemies.length)];
    var randomDelay = Math.random()*2000 + 1000;
    setTimeout(()=>{
        enemyAttacksMe(randomEnemy);
        randomEnemyAttacks();
    },randomDelay); 
}
var healthPoints =100;
function updateHealthPoints(points){
    healthPoints =points;
    var healthBar = document.querySelector("#healthBar");
    healthBar.style.width = points + "%";
    if(healthPoints <1)
    {
        music.pause();
        end.play();
        setTimeout(()=>{
            alert("GAME OVER");
            window.location.reload();
        },5000);
    }

}
var enemyhealthpoints =100;
function enemyHealth(points)
{
    enemyhealthpoints=points;
    var enemyhealthBar = document.querySelector("#Score");
    enemyhealthBar.style.width = points + "%";
    if(enemyhealthpoints <1)
    {
        music.pause();
        win.play();
        setTimeout(()=>{
            alert("You Win");
            window.location.reload();
        },5000);
    }
}
var myGunSound = new Audio("./bang.mp3");
var enemyGunSound = new Audio("./bang.mp3");
var music = new Audio("./soundtrack.mp3");
var end = new Audio("./gameOver.mp3");
var win = new Audio("./win.mp3");
music.loop = true;
// win.loop=true;
enemyGunSound.volume=0.6;
// randomEnemyAttacks();
// var enemy1 =document.querySelector("#enemy1");
// enemyAttacksMe(enemy1)
