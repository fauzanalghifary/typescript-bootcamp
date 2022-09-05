"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// const nums: number[] = [];
var nums = [];
var colors = [];
var inputEl = document.querySelector("#username");
console.log(inputEl);
inputEl.value = "Hacked!";
var btn = document.querySelector(".btn");
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// function identity(item: any): any {
//   return item;
// }
function identity(item) {
    return item;
}
identity(7);
identity("7");
function getRandomElement(list) {
    var randIndx = Math.floor(Math.random() * list.length);
    return list[randIndx];
}
console.log(getRandomElement(["A", "B", "C", "D"]));
console.log(getRandomElement([1, 2, 3, 4]));
function merge(object1, object2) {
    return __assign(__assign({}, object1), object2);
}
var comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
function printDoubleLength(thing) {
    return thing.length * 2;
}
function makeEmptyList() {
    return [];
}
var string = makeEmptyList();
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.queue = [];
    }
    Playlist.prototype.add = function (el) {
        this.queue.push(el);
    };
    return Playlist;
}());
var song = new Playlist();
var video = new Playlist();
