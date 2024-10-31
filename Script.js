document.getElementById('animateBtn').addEventListener('click', function() {
    const image = document.getElementById('coolImage');
    if (image.style.transform === 'scale(1.5)') {
        image.style.transform = 'scale(1)';
    } else {
        image.style.transform = 'scale(1.5)';
    }
});
