function iShoot(enemy){
    enemy.classList.add("dead");
    if(!livingEnemies().length){
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
        updateHealthPoints(healthPoints -10);
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
        alert("GAME OVER");
        window.location.reload();
    }

}
var myGunSound = new Audio("./bang.mp3");
var enemyGunSound = new Audio("./bang.mp3");
var music = new Audio("./soundtrack.mp3");
music.loop = true;
enemyGunSound.volume=0.6;
// randomEnemyAttacks();
// var enemy1 =document.querySelector("#enemy1");
// enemyAttacksMe(enemy1)