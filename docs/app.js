document.addEventListener('DOMContentLoaded', function() {
    const doorImage = document.getElementById('doorImage');
    const doorVideo = document.getElementById('doorVideo');
    const companyName = document.getElementById('companyName');
    const comingSoon = document.getElementById('comingSoon');
    const banner = document.getElementById('banner');

    doorImage.addEventListener('click', function() {
        doorImage.style.display = 'none';
        doorVideo.style.display = 'block';
        doorVideo.play();
    });

    doorVideo.addEventListener('ended', function() {
        showText();
        doorVideo.style.display = 'none';
    });

    function showText() {
        setTimeout(function() {
            companyName.style.visibility = 'visible';
            companyName.style.opacity = 1;
            setTimeout(function() {
                comingSoon.style.visibility = 'visible';
                comingSoon.style.opacity = 1;
                setTimeout(function() {
                    banner.style.top = '0';
                }, 1600);
            }, 200);
        }, 800);
    }
});
