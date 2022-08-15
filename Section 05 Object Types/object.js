function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Thomas", last: "Frank" });
// YANG INI ERROR, GAK BOLEH ADA AGE.
// printName({ first: "Mick", last: "Jagger", age: 473 });
var singer = { first: "Mick", last: "Jagger", age: 473 };
printName(singer);
var coordinate = {
    x: 34,
    y: 2
};
function randomCoordinate() {
    return {
        x: Math.random(),
        y: Math.random()
    };
}
function doublePoint(point) {
    return {
        x: point.x * 2,
        y: point.y * 2
    };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Colt Steele",
    numStreams: 124632,
    credits: {
        producer: "Blue",
        writer: "Max"
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
var myPoint = { x: 2, y: 2 };
var user = {
    id: 1287,
    username: "pojan"
};
console.log(user.id);
