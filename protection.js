// Image protection script - prevents right-click on profile image
document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.profile-image-container');

    if (profileImage) {
        // Disable right-click context menu
        profileImage.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });

        // Disable drag start
        profileImage.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });
    }
});
