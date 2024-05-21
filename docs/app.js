document.addEventListener('DOMContentLoaded', function() {
    const doorImage = document.getElementById('doorImage');
    const companyName = document.getElementById('companyName');
    const comingSoon = document.getElementById('comingSoon');
    const banner = document.getElementById('banner');
    const gifPreload = new Image();
    gifPreload.src = 'opendoor.gif';

    doorImage.addEventListener('click', function() {
        doorImage.src = gifPreload.src;

        function showText() {
            doorImage.style.display = 'none'; // Hide the GIF after playing
            companyName.style.visibility = 'visible';
            companyName.style.opacity = 1; // Fade in the company name immediately after GIF
            setTimeout(function() {
                comingSoon.style.visibility = 'visible';
                comingSoon.style.opacity = 1; // Fade in 'coming soon' shortly after
                setTimeout(function() {
                    banner.style.visibility = 'visible';
                    banner.style.opacity = 1; // Fade in the banner after 'coming soon'
                }, 800); // Delay for banner to appear after 'coming soon'
            }, 200); // Minimal delay for 'coming soon' to appear after company name
        }

        gifPreload.onload = showText;
        if (gifPreload.complete) {
            showText();
        }
    });
});
