document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
    chrome.storage.local.get('enabled', function (result) {
        if (result.enabled != null) {
            checkbox.checked = result.enabled;
        }
    });
    checkbox.addEventListener('click', function () {
        console.log(checkbox.checked);
        chrome.storage.local.set({ 'enabled': checkbox.checked }, function () {
            console.log("confirmed");
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("start").addEventListener('click', process_video);
});


function process_video() {
    chrome.tabs.executeScript(null, {file: 'content.js'});
}