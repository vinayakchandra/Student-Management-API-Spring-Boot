function toggleSemester(semesterId) {
    const content = document.getElementById(semesterId);
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
    } else {
        content.classList.add('hidden');
    }
}

