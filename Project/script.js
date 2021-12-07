"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотреи?', '');

const personaleMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personaleMovieDB.movies[a] = b;
personaleMovieDB.movies[c] = d;

console.log(personaleMovieDB);
