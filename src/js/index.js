const bug = document.querySelector('.ladybird');
const upBtn = document.querySelector('#up');
const downBtn = document.querySelector('#down');
const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');
const homeBtn = document.querySelector('#home');
const turnClockwiseBtn = document.querySelector('#turnClockWise');
const turnAntiClockwiseBtn = document.querySelector('#turnAntiClockWise');

let xPos = 0, yPos = 0, rotation = 0 ;

const transform = () => {
    bug.style.left = `${xPos}px`;
    bug.style.top = `${yPos}px`;
}
const turnLeft = () => {
    xPos > 0 && (xPos -= 10);
    transform();
};
const turnRight = () => {
    xPos < 450 && (xPos += 10);
    transform();
};
const turnUp = () => {
    yPos > 0 && (yPos -= 10);
    transform();
};
const turnDown = () => {
    yPos < 450 && (yPos += 10);
    transform();
};
const home = () => {
    xPos = 0;
    yPos = 0;
    transform();
}
const turnClockWise = () => {
    rotation += 90;
    bug.style.transform = `rotate(${rotation}deg)`;
};

const turnAntiClockwise = () => {
    rotation -= 90;
    bug.style.transform = `rotate(${rotation}deg)`;
};


rightBtn.addEventListener('click', turnRight);
leftBtn.addEventListener('click',turnLeft);
downBtn.addEventListener('click',turnDown);
upBtn.addEventListener('click',turnUp);
homeBtn.addEventListener('click', home);
turnAntiClockwiseBtn.addEventListener('click',turnAntiClockwise);
turnClockwiseBtn.addEventListener('click',turnClockWise);

document.addEventListener('keydown',function(evt){
    const {key} = evt;
    switch(key){
            case 'ArrowLeft' : turnLeft();
            break;
            case 'ArrowRight' : turnRight();
            break;
            case 'ArrowUp' : turnUp();
            break;
            case 'ArrowDown' : turnDown();
            break;
            case 'c':
            case 'C':
                turnClockWise();
                break;
            case 'a':
            case 'A':
                turnAntiClockwise();
                break;
            case 'H':
            case 'h':
                home();
                break;
    }
});

