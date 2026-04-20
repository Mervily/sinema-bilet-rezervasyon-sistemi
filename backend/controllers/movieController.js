export const getAllMovies = (req, res) => {
  res.json({
    message: "Movies route çalışıyor.",
    movies: [
      {
        id: 1,
        title: "Interstellar",
        genre: "Bilim Kurgu",
        duration: "169 dk",
        rating: "8.6",
      },
      {
        id: 2,
        title: "Oppenheimer",
        genre: "Dram / Tarih",
        duration: "180 dk",
        rating: "8.9",
      },
    ],
  });
};

export const getMovieById = (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    title: "Örnek Film",
    genre: "Bilim Kurgu",
    duration: "150 dk",
    rating: "8.5",
    description: "Bu film detay endpoint test verisidir.",
  });
};