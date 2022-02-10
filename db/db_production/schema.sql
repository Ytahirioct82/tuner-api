-- DROP DATABASE IF EXISTS d938gka1grmnf1;


\c d938gka1grmnf1;
DROP TABLE IF EXISTS song;




CREATE TABLE song (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT NOT NULL,
    time TEXT NOT NULL,
    is_favorite BOOLEAN,
    lyrics TEXT NOT NULL
);