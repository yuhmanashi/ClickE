const order = [];

window.onload = function(){
    const boxes = document.getElementsByClassName('box')
    for (let box of boxes){
        box.onclick = function(){
            if (!(order.includes(box.id))){
                order.push(box.id);
                box.style.backgroundColor = 'red';
                
                if (order.length === 11){
                    setTimeout(clearBoxes, 500);
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