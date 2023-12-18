const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');

function addtask() {
    if (inputbox.value === '') {
        alert('Enter text, please.');
    } else {
        const li = document.createElement('li');
        li.innerHTML = inputbox.value;

        const editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        li.appendChild(editButton);

        const span = document.createElement('span');
        span.innerHTML = '✖'; // Use '✖' for a remove symbol
        li.appendChild(span);

        listcontainer.appendChild(li);

        // Add event listener for the "Edit" button
        editButton.addEventListener('click', function () {
            const existingText = li.firstChild.textContent;
            const inputBox = document.createElement('input');
            inputBox.type = 'text';
            inputBox.value = existingText;
            li.replaceChild(inputBox, li.firstChild);

            // Add event listener for the input box to save changes on Enter key press
            inputBox.addEventListener('keyup', function (event) {
                if (event.key === 'Enter') {
                    li.replaceChild(document.createTextNode(inputBox.value), inputBox);
                }
            });
        });
    }
    inputbox.value = '';
}

listcontainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
}, false);

