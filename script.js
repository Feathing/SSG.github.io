function generateRandomSequence() {
    const length = document.getElementById('length').value;
    const redChars = '125wygnbm,';
    const blueChars = '40ertudjklxc';
    const pinkChars = '8-qazxm';
    const greenChars = '9ophv';
    const otherChars = '367isf';

    let chars = '';

    if (document.getElementById('allColors').checked) {
        chars += redChars + blueChars + pinkChars + greenChars + otherChars;
    } else {
        if (document.getElementById('red').checked) chars += redChars;
        if (document.getElementById('blue').checked) chars += blueChars;
        if (document.getElementById('pink').checked) chars += pinkChars;
        if (document.getElementById('green').checked) chars += greenChars;
        if (document.getElementById('other').checked) chars += otherChars;
    }

    if (!chars) {
        setStatusMessage('Please select at least one color category.', 'error');
        return;
    }

    if (length < 1 || length > 250) {
        setStatusMessage('Please enter a length between 1 and 250.', 'error');
        return;
    }

    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById('result').innerText = result;
    document.getElementById('copyButton').style.display = 'inline-block';
    setStatusMessage('');
}

function copyToClipboard() {
    const resultText = document.getElementById('result').innerText;
    navigator.clipboard.writeText(resultText).then(() => {
        setStatusMessage('Copied to clipboard', 'success');
    }).catch(err => {
        setStatusMessage('Failed to copy: ' + err, 'error');
    });
}

function setStatusMessage(message, type = 'info') {
    const statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = message;
    statusMessage.className = type === 'error' ? 'status-message error' : 'status-message success';
}
