var gifPreload = new Image();
gifPreload.src = 'opendoor.gif';

document.getElementById('doorImage').addEventListener('click', function() {
    var door = document.getElementById('doorImage');
    door.src = gifPreload.src;

    gifPreload.onload = function() {
        setTimeout(function() {
            door.style.display = 'none'; // Optionally hide the door image
            var companyName = document.getElementById('companyName');
            companyName.style.visibility = 'visible'; // Make the company name visible
            companyName.style.opacity = 1; // Start the fade-in effect for company name
            setTimeout(function() {
                var comingSoon = document.getElementById('comingSoon');
                comingSoon.style.visibility = 'visible'; // Make the 'coming soon' text visible
                comingSoon.style.opacity = 1; // Start the fade-in effect for 'coming soon'
            }, 2000); // Delay for 'coming soon' to start fading in after 'Easy Storage Solutions' appears
        }, 1000); // Adjust this time to match the duration of your GIF
    };

    if (gifPreload.complete) {
        door.src = gifPreload.src;
        setTimeout(function() {
            door.style.display = 'none';
            var companyName = document.getElementById('companyName');
            companyName.style.visibility = 'visible';
            companyName.style.opacity = 1;
            setTimeout(function() {
                var comingSoon = document.getElementById('comingSoon');
                comingSoon.style.visibility = 'visible';
                comingSoon.style.opacity = 1;
            }, 2000);
        }, 1000);
    }
});
