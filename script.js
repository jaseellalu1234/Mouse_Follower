// 1) i need to get the current position of the mouse every time it moves(x axis , y axis)

// 2) i need to set the x and y value to the circualr div 


let circle = document.querySelector('#circle');
window.addEventListener('mousemove', function (details) {
    let xValue = details.clientX;
    let yValue = details.clientY;

    this.setTimeout(function () {
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    },
        100)
})
