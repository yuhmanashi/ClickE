const order = [];

window.onload = function(){
    const boxes = document.getElementsByClassName('box')
    for (let box of boxes){
        box.onclick = function(){
            if (!(order.includes(box.id))){
                order.push(box.id);
                box.style.backgroundColor = 'red';
                // checkBoxes();
            } 
        }
    }
}

const checkBoxes = () => {
    if (order.length === 11) {
        while (order.length > 0){
            setInterval(clearBoxes, 500)
        }
    }
}

const clearBoxes = () => {
    const id = order.pop();
    const box = document.getElementById(`${id}`)
    box.style.backgroundColor = 'white';
}