var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello!')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('Hola!')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('Bonjour!')
    .pauseFor(2500)
    .deleteChars(7)
    .start();