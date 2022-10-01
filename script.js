const order = [];
let animation = false;

window.onload = function(){
    const boxes = document.getElementsByClassName('box')
    for (let box of boxes){
        box.onclick = function(){
            if (!animation){
                if (!(order.includes(box.id))){
                    console.log(box.id);
                    order.push(box.id);
                    box.style.backgroundColor = 'red';
                    
                    if (order.length === 11){
                        animation = true;
                        setTimeout(clearBoxes, 500);
                        setTimeout(() => {
                            animation = false;
                        }, 12 * 500)
                    }
                }
            }
        }
    }
}

const clearBox = () => {
    const id = order.pop();
    const box = document.getElementById(`${id}`)
    box.style.backgroundColor = 'white';
}


const clearBoxes = () => {
    for (let i = 0; i < order.length; i++){
        setTimeout(clearBox, i * 500)
    }
}