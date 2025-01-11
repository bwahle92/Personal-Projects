
document.addEventListener("keydown", event => {
    console.log(event.key)
});

const moveAmount = 5;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount
                break;
            case "ArrowDown":
                y += moveAmount
                break;
            case "ArrowLeft":
                x -= moveAmount
                break;
            case "ArrowRight":
                x += moveAmount
                    break;
        }

        myBepis.style.top = `${y}px`;
        myBepis.style.left = `${x}px`;



    }
});

const myBepis = document.getElementById("Bepis");