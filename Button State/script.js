document.getElementById('button1').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <div class="b1">
            <h1>Button 1 clicked</h1>
        </div>
    `;
    document.getElementById('button1').focus();
    document.getElementById('button2').blur();
});

document.getElementById('button2').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <div class="b2">
            <h1>Button 2 clicked</h1>
        </div>
    `;
    document.getElementById('button2').focus();
    document.getElementById('button1').blur();
});
