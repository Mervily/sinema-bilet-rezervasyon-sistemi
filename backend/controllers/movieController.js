import { getMovieByIdFromTMDB } from "../services/tmdbService.js";

const movieIds = [
  687163, // Project Hail Mary
  872585, // Oppenheimer
  157336, // Interstellar
  414906, // The Batman
  1325734, // The Drama
  693134, // Dune: Part Two
  969681, // Spider-Man: Brand New Day
  858024, // Hamnet
];

export const getAllMovies = async (req, res) => {
  try {
    const movies = await Promise.all(
      movieIds.map(async (id) => {
        const movie = await getMovieByIdFromTMDB(id);

        return {
          id: movie.id,
          title: movie.title,
          genre: movie.genres?.map((genre) => genre.name).join(" / ") || "Film",
          duration: movie.runtime ? `${movie.runtime} dk` : "Bilinmiyor",
          rating: movie.vote_average ? movie.vote_average.toFixed(1) : "N/A",
          image: movie.poster_path
            ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
            : "",
          description: movie.overview || "Açıklama yok",
          releaseDate: movie.release_date || "Bilinmiyor",
        };
      })
    );

    res.json({ movies });
  } catch (error) {
    console.error("Filmler alınamadı:", error.message);
    res.status(500).json({ message: "Filmler alınamadı." });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const movie = await getMovieByIdFromTMDB(req.params.id);

    res.json({
      id: movie.id,
      title: movie.title,
      genre: movie.genres?.map((genre) => genre.name).join(" / ") || "Film",
      duration: movie.runtime ? `${movie.runtime} dk` : "Bilinmiyor",
      rating: movie.vote_average ? movie.vote_average.toFixed(1) : "N/A",
      image: movie.poster_path
        ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
        : "",
      description: movie.overview || "Açıklama yok",
      releaseDate: movie.release_date || "Bilinmiyor",
      backdrop: movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : "",
    });
  } catch (error) {
    console.error("Film detayı alınamadı:", error.message);
    res.status(500).json({ message: "Film detayı alınamadı." });
  }
};