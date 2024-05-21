document.addEventListener('DOMContentLoaded', function() {
    const doorImage = document.getElementById('doorImage');
    const companyName = document.getElementById('companyName');
    const comingSoon = document.getElementById('comingSoon');
    const banner = document.getElementById('banner');
    const gifPreload = new Image();
    gifPreload.src = 'doorfall.gif';

    doorImage.addEventListener('click', function() {
        if (!gifPreload.complete) { // Checks if the GIF is not yet loaded
            gifPreload.onload = showText; // Binds function to onload if GIF hasn't loaded
        } else {
            showText(); // Executes immediately if GIF is already loaded
        }
        doorImage.src = gifPreload.src; // Starts playing the GIF
    });

    function showText() {
        setTimeout(function() {
            doorImage.style.display = 'none'; // Hide the GIF after playing
            companyName.style.visibility = 'visible';
            companyName.style.opacity = 1; // Fade in the company name immediately after GIF
            setTimeout(function() {
                comingSoon.style.visibility = 'visible';
                comingSoon.style.opacity = 1; // Fade in 'coming soon' shortly after
                setTimeout(function() {
                    banner.style.top = '0'; // Slide down the banner
                }, 1600); // Delay for banner to appear after 'coming soon'
            }, 200); // Minimal delay for 'coming soon' to appear after company name
        }, 800); // Assumed GIF duration before text appears
    }
});
