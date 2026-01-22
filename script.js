const generateBtn = document.getElementById('generate-btn');
const clearBtn = document.getElementById('clear-btn');
const urlInput = document.getElementById('url-input');
const qrResult = document.getElementById('qr-result');
const qrImage = document.getElementById('qr-image');
const placeholder = document.getElementById('placeholder-text');
const qrLinkDisplay = document.getElementById('qr-link-display');

// GENERATE QR CODE
generateBtn.addEventListener('click', () => {
    const url = urlInput.value.trim();

    if (url === "") {
        alert("Please enter a valid link!");
        return;
    }

    // Use free QR API
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(url)}`;
    
    qrImage.src = apiUrl;
    qrLinkDisplay.textContent = url;
    
    qrResult.classList.remove('hidden');
    placeholder.classList.add('hidden');
});

// CLEAR EVERYTHING
clearBtn.addEventListener('click', () => {
    urlInput.value = "";
    qrResult.classList.add('hidden');
    placeholder.classList.remove('hidden');
});

// DOWNLOAD HANDLER
document.getElementById('download-btn').addEventListener('click', () => {
    window.open(qrImage.src, '_blank');
});