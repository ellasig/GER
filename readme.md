# Movie rating / Info website
This is a movie and TV show information website that provides users with a list of movies and TV shows added by the administrators. Users can browse through the available movies and TV shows and view their ratings, favorites and other information.

Adding movies, implementing the favorites and ratings features are currently in progress.

## Setting up the application
	Create database with script found in /database-config
	Run in mariadb with source /path/to/database-script.sql
	.env-example file has base of .env file to create 

## User functions 
	Normal user - not logged in:
		Can see a list of movies and tv shows.
	Normal user - logged in:
		Can add movies to favourites and add a profile picture.
		(currently not working still work in progress)
	Admin user - logged in:
		Can add and remove movies and tv shows.
		(currently not working still work in progress)
