const conversionForm = document.getElementById('conversionForm');
const inputFile = document.getElementById('inputFile');
const convertType = document.getElementById('convertType');
const outputDiv = document.getElementById('output');
const loadingScreen = document.getElementById('loading');

conversionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const file = inputFile.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('convertType', convertType.value);

    showLoadingScreen();

    fetch('/convert', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.blob())
        .then(blob => {
            const fileURL = URL.createObjectURL(blob);
            setTimeout(() => {
                hideLoadingScreen();
                outputDiv.innerHTML = `<a href="${fileURL}" download="convertedFile">Download Converted File</a>`;
            }, 2000); // 2 seconds delay
        })
        .catch(error => {
            console.error('Error converting file:', error);
            setTimeout(() => {
                hideLoadingScreen();
                outputDiv.innerHTML = '<p>Conversion failed.</p>';
            }, 2000); // 2 seconds delay
        });
});

function showLoadingScreen() {
    loadingScreen.style.display = 'flex';
}

function hideLoadingScreen() {
    loadingScreen.style.display = 'none';
}