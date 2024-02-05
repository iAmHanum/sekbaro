document.addEventListener('DOMContentLoaded', function() {
    let switchLangButton = document.getElementById('switch-lang');
    switchLangButton.addEventListener('click', function() {
        toggleLanguages();
    });
});

function toggleLanguages() {
    var enElements = document.querySelectorAll('[lang="en"]');
    var msElements = document.querySelectorAll('[lang="ms"]');

    enElements.forEach(function(element) {
        element.style.display = (element.style.display === 'none') ? 'block' : 'none';
    });

    msElements.forEach(function(element) {
        element.style.display = (element.style.display === 'none') ? 'block' : 'none';
    });
}
