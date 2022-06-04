//images
const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

const doorImage1 = document.querySelector('#door1');
const doorImage2 = document.querySelector('#door2');
const doorImage3 = document.querySelector('#door3');


const startButton = document.querySelector('#start')

const numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;


const isClicked = (door) => {
  if (door.src === closedDoorPath){
    return false;
  }else{
    return true;
 }
}

const playDoor = (door) => {
    numClosedDoors -= 1;
    if (numClosedDoors === 0){
      gameOver('win');
    }
}

const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0){
      openDoor1 = botDoorPath;
      openDoor2 = spaceDoorPath;
      openDoor3 = beachDoorPath;
    }else if (choreDoor === 1){
      openDoor2 = botDoorPath;
      openDoor1 = spaceDoorPath;
      openDoor3 = beachDoorPath;
    }else if (choreDoor === 2){
      openDoor3 = botDoorPath;
      openDoor1 = spaceDoorPath;
      openDoor2 = beachDoorPath;
    }
  
  }

// door one 
door1.onclick = () => {
  if(!isClicked(doorImage1)) {
      doorImage1.src = openDoor1;
      playDoor();
  }
}

//door two
door2.onclick = () => {
  if(!isClicked(doorImage2)) {
      doorImage2.src = openDoor2;
      playDoor();
  }
}

//door three
door3.onclick = () => {
  if(!isClicked(doorImage3)) {
      doorImage3.src = openDoor3;
      playDoor();
  }
}

const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = "You win, idiot! Play again!?";
  }
}


randomChoreDoorGenerator()



