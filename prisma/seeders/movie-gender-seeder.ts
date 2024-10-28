import { GENRE_ACTION, GENRE_ADVENTURE, GENRE_ANIMATION, GENRE_COMEDY, GENRE_CRIME, GENRE_DOCUMENTARY, GENRE_DRAMA, GENRE_FAMILY, GENRE_FANTASY, GENRE_HISTORY, GENRE_HORROR, GENRE_MISTERY, GENRE_MUSIC, GENRE_ROMANCE, GENRE_SCIENCE_FICTION, GENRE_THRILLER, GENRE_TV_MOVIE, GENRE_WAR, GENRE_WESTERN } from "../../constants/movie_genres";
import dbClient from "../../src/dbClient";

export const movieGenderSeeder = async () => {
    const data = getDataMovieGenre();
    await dbClient.movieGenre.createMany({
        data,
        skipDuplicates: true
    });
}

const getDataMovieGenre = () => {
    return [
          {
            "id": GENRE_ACTION,
            "name": "Action"
          },
          {
            "id": GENRE_ADVENTURE,
            "name": "Adventure"
          },
          {
            "id": GENRE_ANIMATION,
            "name": "Animation"
          },
          {
            "id": GENRE_COMEDY,
            "name": "Comedy"
          },
          {
            "id": GENRE_CRIME,
            "name": "Crime"
          },
          {
            "id": GENRE_DOCUMENTARY,
            "name": "Documentary"
          },
          {
            "id": GENRE_DRAMA,
            "name": "Drama"
          },
          {
            "id": GENRE_FAMILY,
            "name": "Family"
          },
          {
            "id": GENRE_FANTASY,
            "name": "Fantasy"
          },
          {
            "id": GENRE_HISTORY,
            "name": "History"
          },
          {
            "id": GENRE_HORROR,
            "name": "Horror"
          },
          {
            "id": GENRE_MUSIC,
            "name": "Music"
          },
          {
            "id": GENRE_MISTERY,
            "name": "Mystery"
          },
          {
            "id": GENRE_ROMANCE,
            "name": "Romance"
          },
          {
            "id": GENRE_SCIENCE_FICTION,
            "name": "Science Fiction"
          },
          {
            "id": GENRE_TV_MOVIE,
            "name": "TV Movie"
          },
          {
            "id": GENRE_THRILLER,
            "name": "Thriller"
          },
          {
            "id": GENRE_WAR,
            "name": "War"
          },
          {
            "id": GENRE_WESTERN,
            "name": "Western"
          }
      ];
}