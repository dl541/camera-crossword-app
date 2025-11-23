document.addEventListener('DOMContentLoaded', async () => {
    const videoElement = document.getElementById('camera-feed');

    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'environment', // Prefer back camera on mobile
                width: { ideal: 1920 },
                height: { ideal: 1080 }
            },
            audio: false
        });
        
        videoElement.srcObject = stream;
    } catch (error) {
        console.error('Error accessing camera:', error);
        alert('Unable to access camera. Please ensure you have granted camera permissions.');
    }
});
