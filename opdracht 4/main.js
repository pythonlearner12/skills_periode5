const container = document.getElementsByTagName('main')[0];
const DIV = document.getElementsByTagName('div')[0];

const shadows = [];






let isLeftButtonDown = false;

//click left click
container.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        isLeftButtonDown = true;
        console.log('Left button pressed down');
    }
});

//release left click
container.addEventListener('mouseup', (event) => {
    if (event.button === 0) {
        isLeftButtonDown = false;
        console.log('Left button released');
    }
});

//check whether still holding left click down
container.addEventListener('mousemove', (event) => {
    if (isLeftButtonDown) {
        console.log('Left button is being held down');
        console.log('x-position of mouse: ' + event.clientX)
        console.log('y-position of mouse: ' + event.clientY)
        shadows.push(`${event.clientX}px ${event.clientY}px 10px black`)
        DIV.style.boxShadow = shadows.join(', ');

    }
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const listAsString = JSON.stringify(shadows);

        const blob = new Blob([listAsString], { type: 'text/plain' });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'list.txt';

        link.click();
    }
});


