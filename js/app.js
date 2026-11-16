
/* ==========================================
   CINEVERSE - PREMIUM MOVIE EXPLORER
   REACT APPLICATION
========================================== */

const {
    HashRouter,
    Switch,
    Route,
    Link,
    useLocation
} = ReactRouterDOM;

const { useState, useEffect } = React;

/* ==========================================
   MOVIE DATABASE
========================================== */

const movies = [
    {
        id: 1,
        title: "Dune: Part Two",
        year: 2024,
        genre: "Sci-Fi",
        rating: 8.5,
        director: "Denis Villeneuve",
        cast: "Timothée Chalamet, Zendaya, Rebecca Ferguson",
        poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
        description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against those who destroyed his family."
    },
    {
        id: 2,
        title: "Oppenheimer",
        year: 2023,
        genre: "Drama",
        rating: 8.3,
        director: "Christopher Nolan",
        cast: "Cillian Murphy, Emily Blunt, Robert Downey Jr.",
        poster: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        description: "The story of J. Robert Oppenheimer and his role in developing the atomic bomb."
    },
    {
        id: 3,
        title: "Interstellar",
        year: 2014,
        genre: "Sci-Fi",
        rating: 8.7,
        director: "Christopher Nolan",
        cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
        description: "A team of explorers travels beyond this galaxy to discover whether mankind has a future among the stars."
    },
    {
        id: 4,
        title: "The Batman",
        year: 2022,
        genre: "Action",
        rating: 7.8,
        director: "Matt Reeves",
        cast: "Robert Pattinson, Zoë Kravitz, Paul Dano",
        poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
        description: "Batman investigates corruption in Gotham City while pursuing a mysterious criminal known as the Riddler."
    },
    {
        id: 5,
        title: "Avatar: The Way of Water",
        year: 2022,
        genre: "Adventure",
        rating: 7.5,
        director: "James Cameron",
        cast: "Sam Worthington, Zoe Saldaña, Sigourney Weaver",
        poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
        description: "Jake Sully and his family explore the oceans of Pandora and face new threats."
    },
    {
        id: 6,
        title: "Joker",
        year: 2019,
        genre: "Drama",
        rating: 8.1,
        director: "Todd Phillips",
        cast: "Joaquin Phoenix, Robert De Niro, Zazie Beetz",
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        description: "A struggling comedian descends into madness and becomes the infamous Joker."
    },
    {
        id: 7,
        title: "Avengers: Endgame",
        year: 2019,
        genre: "Action",
        rating: 8.4,
        director: "Anthony Russo, Joe Russo",
        cast: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
        description: "The Avengers assemble for one final mission to reverse the devastating consequences of Thanos."
    },
    {
        id: 8,
        title: "Spider-Man: No Way Home",
        year: 2021,
        genre: "Action",
        rating: 8.2,
        director: "Jon Watts",
        cast: "Tom Holland, Zendaya, Benedict Cumberbatch",
        poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
        description: "Peter Parker asks Doctor Strange for help, but the spell creates unexpected multiverse consequences."
    },
    {
        id: 9,
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        rating: 9.0,
        director: "Christopher Nolan",
        cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
        description: "Batman faces his greatest challenge when the Joker unleashes chaos across Gotham City."
    },
    {
        id: 10,
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.8,
        director: "Christopher Nolan",
        cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
        poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
        description: "A skilled thief enters people's dreams to steal secrets and receives an unusual mission."
    },
    {
        id: 11,
        title: "Top Gun: Maverick",
        year: 2022,
        genre: "Action",
        rating: 8.2,
        director: "Joseph Kosinski",
        cast: "Tom Cruise, Miles Teller, Jennifer Connelly",
        poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
        description: "Maverick trains a new generation of pilots for a dangerous and challenging mission."
    },
    {
        id: 12,
        title: "Everything Everywhere All at Once",
        year: 2022,
        genre: "Adventure",
        rating: 7.7,
        director: "Daniel Kwan, Daniel Scheinert",
        cast: "Michelle Yeoh, Stephanie Hsu, Ke Huy Quan",
        poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/5YM26wq6X3b3p2J2J5gR7X9G7gH.jpg",
        description: "An ordinary woman discovers that she must connect with alternate versions of herself across the multiverse."
    }
];

/* ==========================================
   IMAGE FALLBACK
========================================== */

const fallbackImage =
    "https://placehold.co/500x750/171725/ffffff?text=CineVerse";

/* ==========================================
   LOCAL STORAGE
========================================== */

function getSavedFavorites() {
    try {
        const saved = localStorage.getItem("cineverseFavorites");
        const ids = saved ? JSON.parse(saved) : [];

        return Array.isArray(ids)
            ? ids.filter(id =>
                Number.isInteger(id) &&
                movies.some(movie => movie.id === id)
            )
            : [];

    } catch (error) {
        return [];
    }
}

/* ==========================================
   HEADER COMPONENT
========================================== */

function Header({ favorites }) {

    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const closeMenu = () => setMenuOpen(false);

    return (

        <header className="header">

            <div className="container navbar">
<Link to="/" className="logo" onClick={closeMenu}>
    <span className="logo-icon">
        <img
            src="../assets/image.webp"
            alt="CineVerse Logo"
        />
    </span>
   
</Link>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
                </button>

                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

                    <li>
                        <Link
                            to="/"
                            className={location.pathname === "/" ? "active" : ""}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/explore"
                            className={location.pathname === "/explore" ? "active" : ""}
                            onClick={closeMenu}
                        >
                            Explore Movies
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/favourites"
                            className={`nav-fav ${location.pathname === "/favourites" ? "active" : ""}`}
                            onClick={closeMenu}
                        >
                            <i className="bi bi-heart"></i>
                            Favourites

                            <span className="fav-count">
                                {favorites.length}
                            </span>
                        </Link>
                    </li>

                </ul>

                <Link to="/explore" className="nav-action">
                    <i className="bi bi-compass"></i>
                    Discover Movies
                </Link>

            </div>

        </header>
    );
}

/* ==========================================
   MOVIE CARD COMPONENT
========================================== */

function MovieCard({
    movie,
    favorites,
    toggleFavorite,
    openDetails,
    index = 0
}) {

    const isFavorite = favorites.includes(movie.id);

    return (

        <article
            className="movie-card"
            data-aos="fade-up"
            data-aos-delay={Math.min(index % 5, 4) * 60}
        >

            <div
                className="poster-wrap"
                onClick={() => openDetails(movie)}
            >

                <img
                    src={movie.poster}
                    alt={`${movie.title} poster`}
                    loading="lazy"
                    onError={e => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = fallbackImage;
                    }}
                />

                <span className="movie-rating">
                    <i className="bi bi-star-fill"></i>
                    {movie.rating}
                </span>

                <button
                    className={`favorite-btn ${isFavorite ? "selected" : ""}`}
                    onClick={e => {
                        e.stopPropagation();
                        toggleFavorite(movie.id);
                    }}
                    aria-label={isFavorite ? "Remove favourite" : "Add favourite"}
                    title={isFavorite ? "Remove favourite" : "Add favourite"}
                >
                    <i className={`bi ${isFavorite ? "bi-heart-fill" : "bi-heart"}`}></i>
                </button>

            </div>

            <div
                className="movie-info"
                onClick={() => openDetails(movie)}
            >

                <h3>{movie.title}</h3>

                <p>
                    <span>{movie.year}</span>
                    <span>•</span>
                    <span>{movie.genre}</span>
                </p>

            </div>

        </article>
    );
}

/* ==========================================
   MOVIE GRID COMPONENT
========================================== */

function MovieGrid({
    movieList,
    favorites,
    toggleFavorite,
    openDetails
}) {

    if (movieList.length === 0) {

        return (

            <div className="empty-state">

                <div className="empty-icon">
                    <i className="bi bi-camera-reels"></i>
                </div>

                <h2>No Movies Found</h2>

                <p>
                    We couldn't find any movies matching your search.
                    Try another title or change your filters.
                </p>

                <Link to="/explore" className="btn btn-primary">
                    <i className="bi bi-search"></i>
                    Explore Movies
                </Link>

            </div>
        );
    }

    return (

        <div className="movie-grid">

            {movieList.map((movie, index) => (

                <MovieCard
                    key={movie.id}
                    movie={movie}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                    openDetails={openDetails}
                    index={index}
                />

            ))}

        </div>
    );
}

/* ==========================================
   MOVIE DETAILS MODAL
========================================== */

function MovieModal({
    movie,
    closeModal,
    favorites,
    toggleFavorite
}) {

    if (!movie) return null;

    const isFavorite = favorites.includes(movie.id);

    return (

        <div
            className="modal-overlay"
            onClick={closeModal}
        >

            <div
                className="movie-modal"
                onClick={e => e.stopPropagation()}
            >

                <button
                    className="modal-close"
                    onClick={closeModal}
                    aria-label="Close"
                >
                    <i className="bi bi-x-lg"></i>
                </button>

                <img
                    className="modal-poster"
                    src={movie.poster}
                    alt={movie.title}
                    onError={e => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = fallbackImage;
                    }}
                />

                <div className="modal-content">

                    <div className="section-kicker">
                        MOVIE DETAILS
                    </div>

                    <h2>{movie.title}</h2>

                    <div className="modal-meta">

                        <span>
                            <i className="bi bi-star-fill"></i>
                            {movie.rating}/10
                        </span>

                        <span>{movie.year}</span>

                        <span>{movie.genre}</span>

                    </div>

                    <p>{movie.description}</p>

                    <p>
                        <strong>Director:</strong> {movie.director}
                    </p>

                    <p>
                        <strong>Cast:</strong> {movie.cast}
                    </p>

                    <button
                        className="btn btn-primary"
                        onClick={() => toggleFavorite(movie.id)}
                    >
                        <i className={`bi ${isFavorite ? "bi-heart-fill" : "bi-heart"}`}></i>

                        {isFavorite
                            ? "Remove Favourite"
                            : "Add To Favourites"
                        }

                    </button>

                </div>

            </div>

        </div>
    );
}

/* ==========================================
   HOME PAGE
========================================== */

function Home({
    favorites,
    toggleFavorite,
    openDetails
}) {

    const trendingMovies = [
        movies[0],
        movies[1],
        movies[4],
        movies[7],
        movies[10]
    ];

    const popularMovies = [...movies]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    const categories = [
        {
            name: "Action",
            count: "Action & Adventure",
            image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
        },
        {
            name: "Sci-Fi",
            count: "Science Fiction",
            image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
        },
        {
            name: "Drama",
            count: "Drama & Stories",
            image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
        },
        {
            name: "Adventure",
            count: "Adventure Movies",
            image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
        }
    ];

    return (

        <>

            {/* HERO SECTION */}

            <section className="hero">

                <div className="container">

                    <div className="hero-content" data-aos="fade-up">

                        <span className="hero-label">
                            <i className="bi bi-stars"></i>
                            YOUR CINEMATIC UNIVERSE
                        </span>

                        <h1>
                            Discover a World of
                            <span>Cinema.</span>
                        </h1>

                        <p className="hero-description">
                            Experience extraordinary stories, iconic characters
                            and unforgettable adventures. Explore the movies
                            you love and discover your next favourite film.
                        </p>

                        <div className="hero-meta">

                            <span>
                                <i className="bi bi-film"></i>
                                Dune: Part Two
                            </span>

                            <span>2024</span>

                            <span className="rating">
                                <i className="bi bi-star-fill"></i>
                                8.5/10
                            </span>

                            <span>Sci-Fi</span>

                        </div>

                        <div className="hero-buttons">

                            <button
                                className="btn btn-primary"
                                onClick={() => openDetails(movies[0])}
                            >
                                <i className="bi bi-play-fill"></i>
                                Explore Featured
                            </button>

                            <Link to="/explore" className="btn btn-outline">
                                View All Movies
                                <i className="bi bi-arrow-right"></i>
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="hero-side-card" data-aos="fade-left">

                    <img
                        src={movies[2].poster}
                        alt="Interstellar movie poster"
                    />

                    <p>Interstellar</p>
                    <small>★ 8.7 / 10</small>

                </div>

            </section>

            {/* QUICK SEARCH */}

            <section className="search-strip">

                <div className="container">

                    <div className="search-panel">

                        <div className="search-main">

                            <i className="bi bi-search"></i>

                            <input
                                type="text"
                                placeholder="Search your favourite movies..."
                                onKeyDown={e => {
                                    if (e.key === "Enter" && e.target.value.trim()) {
                                        window.location.hash =
                                            "/explore?search=" +
                                            encodeURIComponent(e.target.value.trim());
                                    }
                                }}
                                aria-label="Search movies"
                            />

                        </div>

                        <span className="search-hint">
                            Press Enter to explore
                        </span>

                        <Link to="/explore" className="btn btn-primary">
                            Search Movies
                        </Link>

                    </div>

                </div>

            </section>

            {/* TRENDING MOVIES */}

            <section className="section">

                <div className="container">

                    <div className="section-heading" data-aos="fade-up">

                        <div>
                            <div className="section-kicker">
                                WHAT'S POPULAR
                            </div>

                            <h2>
                                <i className="bi bi-fire" style={{ color: "#f05aab" }}></i>
                                Trending Movies
                            </h2>

                            <p>Discover the movies everyone is watching.</p>
                        </div>

                        <Link to="/explore" className="view-all">
                            View All
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                    </div>

                    <MovieGrid
                        movieList={trendingMovies}
                        favorites={favorites}
                        toggleFavorite={toggleFavorite}
                        openDetails={openDetails}
                    />

                </div>

            </section>

            {/* CATEGORY SECTION */}

            <section className="section" style={{ paddingTop: 0 }}>

                <div className="container">

                    <div className="section-heading" data-aos="fade-up">

                        <div>
                            <div className="section-kicker">
                                EXPLORE BY CATEGORY
                            </div>

                            <h2>Browse Genres</h2>

                            <p>Find movies based on your favourite genres.</p>
                        </div>

                    </div>

                    <div className="category-grid">

                        {categories.map((category, index) => (

                            <Link
                                to={`/explore?genre=${encodeURIComponent(category.name)}`}
                                key={category.name}
                                className="category-card"
                                style={{
                                    backgroundImage: `url("${category.image}")`
                                }}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >

                                <div className="category-card-content">

                                    <h3>{category.name}</h3>

                                    <p>{category.count}</p>

                                </div>

                            </Link>

                        ))}

                    </div>

                </div>

            </section>

            {/* TOP RATED */}

            <section className="section" style={{ paddingTop: 0 }}>

                <div className="container">

                    <div className="section-heading" data-aos="fade-up">

                        <div>
                            <div className="section-kicker">
                                EDITOR'S CHOICE
                            </div>

                            <h2>
                                <i className="bi bi-trophy" style={{ color: "#ffc66e" }}></i>
                                Top Rated Movies
                            </h2>

                            <p>Outstanding movies with incredible ratings.</p>
                        </div>

                        <Link to="/explore" className="view-all">
                            Explore More
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                    </div>

                    <MovieGrid
                        movieList={popularMovies}
                        favorites={favorites}
                        toggleFavorite={toggleFavorite}
                        openDetails={openDetails}
                    />

                </div>

            </section>

            {/* BOTTOM CTA */}

            <section className="section" style={{ paddingTop: 0 }}>

                <div className="container">

                    <div
                        style={{
                            background: "linear-gradient(120deg,#30205c,#5b2864)",
                            padding: "45px 25px",
                            borderRadius: "15px",
                            textAlign: "center",
                            border: "1px solid rgba(255,255,255,.12)"
                        }}
                        data-aos="zoom-in"
                    >

                        <div className="section-kicker">
                            YOUR NEXT MOVIE STARTS HERE
                        </div>

                        <h2 style={{
                            fontFamily: "Outfit",
                            fontSize: "clamp(27px,4vw,38px)",
                            marginBottom: "13px"
                        }}>
                            Ready for your next adventure?
                        </h2>

                        <p style={{
                            color: "#ddd2f2",
                            fontSize: "13px",
                            marginBottom: "23px"
                        }}>
                            Explore our movie collection and find something amazing.
                        </p>

                        <Link to="/explore" className="btn btn-primary">
                            Explore Collection
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                    </div>

                </div>

            </section>

        </>
    );
}

/* ==========================================
   EXPLORE PAGE
========================================== */

function Explore({
    favorites,
    toggleFavorite,
    openDetails
}) {

    const [search, setSearch] = useState("");
    const [genre, setGenre] = useState("All");
    const [year, setYear] = useState("All");
    const [sort, setSort] = useState("default");

    // Read search and genre from navigation URL.

    const location = useLocation();

    useEffect(() => {

        const params = new URLSearchParams(location.search);

        setSearch(params.get("search") || "");
        setGenre(params.get("genre") || "All");

    }, [location.search]);

    const genres = [
        "All",
        ...new Set(movies.map(movie => movie.genre))
    ];

    const years = [
        "All",
        ...new Set(movies.map(movie => movie.year))
    ].sort((a, b) => b - a);

    // Search, filter and sort movies.

    const filteredMovies = movies

        .filter(movie =>
            movie.title.toLowerCase().includes(search.toLowerCase().trim())
        )

        .filter(movie =>
            genre === "All" || movie.genre === genre
        )

        .filter(movie =>
            year === "All" || movie.year === Number(year)
        )

        .sort((a, b) => {

            if (sort === "rating") {
                return b.rating - a.rating;
            }

            if (sort === "newest") {
                return b.year - a.year || b.id - a.id;
            }

            if (sort === "oldest") {
                return a.year - b.year || a.id - b.id;
            }

            return a.id - b.id;

        });

    const clearFilters = () => {

        setSearch("");
        setGenre("All");
        setYear("All");
        setSort("default");

        window.history.replaceState(
            null,
            "",
            window.location.pathname + "#/explore"
        );

    };

    return (

        <>

            <section className="page-banner">

                <div className="container page-banner-content">

                    <div className="page-label">
                        <i className="bi bi-compass"></i>
                        DISCOVER YOUR NEXT FAVOURITE
                    </div>

                    <h1>
                        Explore <span>Movies.</span>
                    </h1>

                    <p>
                        Search, discover and explore an amazing collection
                        of cinematic experiences.
                    </p>

                </div>

            </section>

            <section className="section">

                <div className="container">

                    {/* SEARCH AND FILTER */}

                    <div className="filter-area">

                        <div className="search-box">

                            <i className="bi bi-search"></i>

                            <input
                                type="text"
                                placeholder="Search movies by title..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />

                        </div>

                        {/* GENRE */}

                        <select
                            className="filter-select"
                            value={genre}
                            onChange={e => setGenre(e.target.value)}
                        >

                            {genres.map(item => (

                                <option key={item} value={item}>
                                    {item === "All" ? "All Genres" : item}
                                </option>

                            ))}

                        </select>

                        {/* YEAR */}

                        <select
                            className="filter-select"
                            value={year}
                            onChange={e => setYear(e.target.value)}
                        >

                            {years.map(item => (

                                <option key={item} value={item}>
                                    {item === "All" ? "All Years" : item}
                                </option>

                            ))}

                        </select>

                        {/* SORT */}

                        <select
                            className="filter-select"
                            value={sort}
                            onChange={e => setSort(e.target.value)}
                        >

                            <option value="default">Default Sorting</option>
                            <option value="rating">Highest Rating</option>
                            <option value="newest">Newest Release</option>
                            <option value="oldest">Oldest Release</option>

                        </select>

                        <button
                            className="clear-btn"
                            onClick={clearFilters}
                        >
                            <i className="bi bi-x-circle"></i>
                            Clear Filters
                        </button>

                    </div>

                    <p className="results-count">
                        Showing <strong>{filteredMovies.length}</strong> of {movies.length} movies
                    </p>

                    <MovieGrid
                        movieList={filteredMovies}
                        favorites={favorites}
                        toggleFavorite={toggleFavorite}
                        openDetails={openDetails}
                    />

                </div>

            </section>

        </>
    );
}

/* ==========================================
   FAVOURITES PAGE
========================================== */

function Favourites({
    favorites,
    toggleFavorite,
    openDetails
}) {

    const favoriteMovies = movies.filter(movie =>
        favorites.includes(movie.id)
    );

    return (

        <>

            <section className="page-banner">

                <div className="container page-banner-content">

                    <div className="page-label">
                        <i className="bi bi-heart-fill"></i>
                        YOUR PERSONAL COLLECTION
                    </div>

                    <h1>
                        My <span>Favourites.</span>
                    </h1>

                    <p>
                        All the movies you love, collected in one place.
                    </p>

                </div>

            </section>

            <section className="section">

                <div className="container">

                    <div className="section-heading">

                        <div>

                            <div className="section-kicker">
                                SAVED COLLECTION
                            </div>

                            <h2>
                                <i className="bi bi-heart-fill" style={{ color: "#f05aab" }}></i>
                                Favourite Movies
                            </h2>

                            <p>
                                {favoriteMovies.length} movies in your collection.
                            </p>

                        </div>

                        <Link to="/explore" className="view-all">
                            Add More Movies
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                    </div>

                    {favoriteMovies.length > 0 ? (

                        <MovieGrid
                            movieList={favoriteMovies}
                            favorites={favorites}
                            toggleFavorite={toggleFavorite}
                            openDetails={openDetails}
                        />

                    ) : (

                        <div className="empty-state">

                            <div className="empty-icon">
                                <i className="bi bi-heart"></i>
                            </div>

                            <h2>No Favourites Yet!</h2>

                            <p>
                                Your favourite collection is waiting for you.
                                Explore movies and tap the heart icon to save
                                the movies you love.
                            </p>

                            <Link to="/explore" className="btn btn-primary">
                                <i className="bi bi-film"></i>
                                Explore Movies
                            </Link>

                        </div>

                    )}

                </div>

            </section>

        </>
    );
}


/* ==========================================
   FOOTER
========================================== */

function Footer() {
    return (
        <footer className="footer">

            <div className="container">

                <div className="footer-top">

                    {/* BRAND */}
                    <div className="footer-brand">

                        <Link to="/" className="logo">
                            <img
                                src="assets/image.webp"
                                alt="CineVerse Logo"
                                className="logo-image"
                            />
                           
                        </Link>

                        <p>
                            Your ultimate destination for discovering movies,
                            exploring cinematic stories and saving your
                            favourite films. Experience the world of cinema
                            with CineVerse.
                        </p>

                        <div className="footer-socials">
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
                                <i className="bi bi-youtube"></i>
                            </a>
                            <a href="https://www.x.com/" target="_blank" rel="noreferrer" aria-label="X">
                                <i className="bi bi-twitter-x"></i>
                            </a>
                        </div>

                    </div>

                    {/* QUICK LINKS */}
                    <div className="footer-links">
                        <h4><i className="bi bi-compass"></i> Quick Links</h4>

                        <Link to="/"><i className="bi bi-house-door"></i> Home</Link>
                        <Link to="/explore"><i className="bi bi-camera-reels"></i> Explore Movies</Link>
                        <Link to="/favourites"><i className="bi bi-heart"></i> Favourites</Link>
                    </div>

                    {/* EXPLORE */}
                    <div className="footer-links">
                        <h4><i className="bi bi-film"></i> Explore</h4>

                        <Link to="/explore"><i className="bi bi-fire"></i> Trending Movies</Link>
                        <Link to="/explore"><i className="bi bi-star"></i> Popular Movies</Link>
                        <Link to="/explore"><i className="bi bi-trophy"></i> Top Rated Movies</Link>
                    </div>

                    {/* CONTACT */}
                    <div className="footer-links footer-contact">
                        <h4><i className="bi bi-chat-dots"></i> Contact Us</h4>

                        <a href="mailto:hello@cineverse.com">
                            <i className="bi bi-envelope"></i> hello@cineverse.com
                        </a>

                        <a href="tel:+911234567890">
                            <i className="bi bi-telephone"></i> +91 12345 67890
                        </a>

                        <span>
                            <i className="bi bi-geo-alt"></i> India
                        </span>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="footer-bottom">

                    <span>
                        © {new Date().getFullYear()} Stackly. All Rights Reserved.
                    </span>

                    <span className="footer-made">
                        Made with <i className="bi bi-heart-fill"></i> for Movie Lovers
                    </span>

                    <div className="footer-bottom-icons">
                        <i className="bi bi-film"></i>
                        <i className="bi bi-camera-reels"></i>
                        <i className="bi bi-ticket-perforated"></i>
                    </div>

                </div>

            </div>

        </footer>
    );
}

/* ==========================================
   MAIN APPLICATION
========================================== */

function App() {

    const [favorites, setFavorites] = useState(getSavedFavorites);
    const [selectedMovie, setSelectedMovie] = useState(null);

    // SAVE FAVOURITES

    useEffect(() => {

        try {
            localStorage.setItem(
                "cineverseFavorites",
                JSON.stringify(favorites)
            );
        } catch (error) {
            console.error("Unable to save favourites:", error);
        }

    }, [favorites]);

    // TOGGLE FAVOURITE

    const toggleFavorite = (movieId) => {

        setFavorites(previous => {

            if (previous.includes(movieId)) {
                return previous.filter(id => id !== movieId);
            }

            return [...previous, movieId];

        });

    };

    // OPEN MODAL

    const openDetails = (movie) => {
        setSelectedMovie(movie);
    };

    // CLOSE MODAL

    const closeModal = () => {
        setSelectedMovie(null);
    };

    // ESCAPE KEY

    useEffect(() => {

        const handleKeyDown = (event) => {

            if (event.key === "Escape") {
                closeModal();
            }

        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };

    }, []);

    // INITIALIZE AOS

    useEffect(() => {

        if (window.AOS) {

            AOS.init({
                duration: 800,
                easing: "ease-out-cubic",
                once: true,
                offset: 65
            });

        }

    }, []);

    return (

        <HashRouter>

            <Header favorites={favorites} />

            <main>

                <Switch>

                    <Route exact path="/">

                        <Home
                            favorites={favorites}
                            toggleFavorite={toggleFavorite}
                            openDetails={openDetails}
                        />

                    </Route>

                    <Route path="/explore">

                        <Explore
                            favorites={favorites}
                            toggleFavorite={toggleFavorite}
                            openDetails={openDetails}
                        />

                    </Route>

                    <Route path="/favourites">

                        <Favourites
                            favorites={favorites}
                            toggleFavorite={toggleFavorite}
                            openDetails={openDetails}
                        />

                    </Route>

                    <Route>

                        <section className="section">

                            <div className="container empty-state">

                                <div className="empty-icon">
                                    <i className="bi bi-exclamation-circle"></i>
                                </div>

                                <h2>404 - Page Not Found</h2>

                                <p>
                                    The page you are looking for does not exist.
                                </p>

                                <Link to="/" className="btn btn-primary">
                                    Back To Home
                                </Link>

                            </div>

                        </section>

                    </Route>

                </Switch>

            </main>

            <Footer />

            <MovieModal
                movie={selectedMovie}
                closeModal={closeModal}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
            />

        </HashRouter>
    );
}

/* ==========================================
   RENDER APPLICATION
========================================== */

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<App />);
