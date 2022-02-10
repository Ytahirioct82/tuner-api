-- DROP DATABASE IF EXISTS d938gka1grmnf1;
DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;
\c songs_dev;
DROP TABLE IF EXISTS song;

-- \c d938gka1grmnf1;

-- \
CREATE TABLE song (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT NOT NULL,
    time TEXT NOT NULL,
    is_favorite BOOLEAN,
    lyrics TEXT NOT NULL
);