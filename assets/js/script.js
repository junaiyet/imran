var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Architecture')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Architecture ')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('Architecture')
    .pauseFor(2500)
    .start();