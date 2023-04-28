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
    (3, 'Game of Thrones', 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.', 'Fantasy', 'TVshow', '8 seasons', ''),
    (4, "The Lord of the Rings: The Return of the King", "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.", 
"adventure", "Movie", "3h 21m", ""),
(5, "Star Wars: Episode III - Revenge of the Sith", "Three years into the Clone Wars, Obi-Wan pursues a new threat, while Anakin is lured by Chancellor Palpatine into a sinister plot to rule the galaxy.",
"Action", "Movie", "2h 20m", ""),
(6, "The Office", "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
"Comedy", "TVshow", "9 seasons", ""),
(7, "Star Wars: Episode IV - A New Hope", "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
"Action", "Movie", "2h 1m", ""),
(8, "Batman: The Animated Series", "The Dark Knight battles crime in Gotham City with occasional help from Robin and Batgirl.", 
"Animation", "TVshow", "4 seasons", ""),
(9, "The X-Files", "Two F.B.I. Agents, Fox Mulder the believer and Dana Scully the skeptic, investigate the strange and unexplained, while hidden forces work to impede their efforts.",
"Crime", "TVshow", "11 seasons", ""),
(10, "The IT Crowd", "The comedic misadventures of Roy, Moss and their grifting supervisor Jen, a rag-tag team of IT support workers at a large corporation headed by a hotheaded yuppie.",
"Comedy", "TVshow", "5 seasons", "");
