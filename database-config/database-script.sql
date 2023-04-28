DROP DATABASE IF EXISTS gresak;
CREATE DATABASE gresak;
USE gresak;

CREATE TABLE content (
    content_id INT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    genre VARCHAR(50),
    type VARCHAR(50),
    length TEXT,
    image VARCHAR(255)
);

CREATE TABLE user (
    user_id INT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(255),
    pass VARCHAR(255),
	profilepicture VARCHAR(255),
    isAdmin BOOLEAN
);
CREATE TABLE user_content (
    user_id INT,
    content_id INT,
    user_rating INT,
    PRIMARY KEY (user_id, content_id)
);
INSERT INTO user (user_id, username, email, pass, profilepicture, isAdmin)
VALUES 
    (1, 'user1', 'user1@example.com', 'password1', '/path/to/user1/profilepicture.jpg', false),
    (2, 'admin2', 'admin2@example.com', 'password2', '/path/to/user2/profilepicture.jpg', true),
    (3, 'user3', 'user3@example.com', 'password3', '/path/to/user3/profilepicture.jpg', false);
INSERT INTO content (content_id, name, description, genre, type, length, image)
VALUES
    (1, 'The Godfather', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 'Crime', 'Movie', '2h 58m', ''),
    (2, 'The Shawshank Redemption', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 'Drama', 'Movie', '2h 22m', ''),
    (3, 'Game of Thrones', 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.', 'Fantasy', 'TVshow', '8 seasons', '');
