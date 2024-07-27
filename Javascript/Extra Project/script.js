// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get all follow/unfollow buttons
    const followButtons = document.querySelectorAll('.artist-card button');

    // Add click event listener to each button
    followButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.classList.contains('following')) {
                button.classList.remove('following');
                button.textContent = 'Follow';
            } else {
                button.classList.add('following');
                button.textContent = 'Following';
            }
        });
    });

    // Music player functionality
    const audioPlayer = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');

    playBtn.addEventListener('click', function() {
        audioPlayer.play();
    });

    pauseBtn.addEventListener('click', function() {
        audioPlayer.pause();
    });
});
