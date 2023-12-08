const sleepingList = document.getElementById('sleepingList');
let intervalId;

function startSleeping() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value;

    const startTime = new Date().getTime();

    const listItem = document.createElement('li');
    listItem.textContent = `${name} is sleeping.`;

    const timerDisplay = document.createElement('div');
    timerDisplay.className = 'timer';
    listItem.appendChild(timerDisplay);

    const stopButton = document.createElement('button');
    stopButton.textContent = 'Stop Sleeping';
    stopButton.onclick = function() {
        clearInterval(intervalId);
        const elapsedTime = (new Date().getTime() - startTime) / 1000;
        listItem.textContent = `${name} slept for ${Math.floor(elapsedTime / 60)} minutes and ${Math.floor(elapsedTime % 60)} seconds.`;
        stopButton.remove();
    };

    listItem.appendChild(stopButton);
    sleepingList.appendChild(listItem);

    intervalId = setInterval(function() {
        const elapsedTime = (new Date().getTime() - startTime) / 1000;
        timerDisplay.textContent = `Elapsed Time: ${Math.floor(elapsedTime / 60)}m ${Math.floor(elapsedTime % 60)}s`;
    }, 1000);
}
