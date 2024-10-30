// Add fade-in effect when page loads
window.onload = () => {
    document.body.classList.add('fade-in');
};

function navigateToPage(cardId, pageUrl) {
    document.getElementById(cardId).addEventListener("click", function () {
        document.body.classList.remove('fade-in');
        setTimeout(() => {
            window.location.href = pageUrl;
        }, 500); // Match the duration of the fade-out
    });
}

navigateToPage("achievementCard", "achievements.html");
navigateToPage("gradesCard", "grades.html");
navigateToPage("internshipCard", "internships.html"); 