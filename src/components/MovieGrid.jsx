import React, { useEffect, useState } from "react";

const MovieGrid = ({ search }) => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const url = search
          ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(search)}`
          : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
        console.log(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);

        setError(true);
        setLoading(false);
      }
    };
    fetchMovies();
  }, [search]);

  if (loading)
    return (
      <div className="min-h-screen w-full bg-[#0f0f0f] flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-white/10 border-t-amber-400 animate-spin" />
        <p className="text-white/60 text-sm tracking-wide">Loading movies...</p>
      </div>
    );
     if (error) return <div className="text-black p-10">Error Loading movies</div>;
     
  if (!movies.length)
    return (
      <div className="min-h-screen w-full bg-[#0f0f0f] flex flex-col items-center justify-center gap-3 px-6 text-center">
        <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-2xl">
          🎬
        </div>
        <h2 className="text-white font-bold text-lg">No movies found</h2>
        <p className="text-white/50 text-sm">Try a different search term.</p>
      </div>
    );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:p-10 bg-[#0f0f0f] min-h-screen w-full">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="group relative bg-[#1c1c1c] rounded-xl overflow-hidden shadow-lg cursor-pointer w-full transform 
            hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="movie.title"
            className="w-full h-87.5 object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
            ⭐{movie.vote_average.toFixed(1)}
          </div>

          <div
            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity
                duration-300 flex flex-col justify-end p-4"
          >
            <h3 className="text-white font-bold text-lg">{movie.title}</h3>
            <p className="text-gray-400 text-sm">
              {movie.release_date?.slice(0, 4)}
            </p>
            <p className="text-gray-300 text-xs mt-2 line-clamp-3">
              {movie.overview}
            </p>
            <button
              className="mt-3 bg-red-600 hover:bg-red-700 text-white py-1.5 rounded-lg text-sm 
                    font-semibold "
            >
              Watch Now
            </button>
          </div>

          <div className="p-3 group-hover:hodden">
            <h3 className="text-white font-semibold truncate">{movie.title}</h3>
            <p className="text-gray-500 text-xs">{movie.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
