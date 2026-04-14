import "./Home.css";
import movies from "../../data/movies";
import MovieCard from "../../components/movie/MovieCard";

const Home = () => {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero__container">
          <div className="home-hero__content">
            <span className="home-hero__badge">Yeni Nesil Sinema Deneyimi</span>
            <h1 className="home-hero__title">
              En Sevdiğin Filmler İçin
              <span> Koltuğunu Hemen Ayırt</span>
            </h1>
            <p className="home-hero__text">
              Vizyondaki filmleri keşfet, sana uygun seansı seç ve birkaç adımda
              rezervasyonunu tamamla.
            </p>

            <div className="home-hero__actions">
              <button className="home-hero__primary-btn">Bilet Al</button>
              <button className="home-hero__secondary-btn">Vizyondakiler</button>
            </div>
          </div>

          <div className="home-hero__visual">
            <div className="home-hero__card">
              <p className="home-hero__card-label">Bugünün Öne Çıkanı</p>
              <h3 className="home-hero__card-title">Dune: Part Two</h3>
              <p className="home-hero__card-info">IMAX • 19:30 • Salon 3</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-movies">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-header__subtitle">Vizyondakiler</p>
              <h2 className="section-header__title">Öne Çıkan Filmler</h2>
            </div>
            <button className="section-header__button">Tümünü Gör</button>
          </div>

          <div className="featured-movies__grid">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container features__container">
          <div className="feature-box">
            <h3 className="feature-box__title">Hızlı Rezervasyon</h3>
            <p className="feature-box__text">
              Sadece birkaç adımda film, seans ve koltuk seçimini tamamla.
            </p>
          </div>

          <div className="feature-box">
            <h3 className="feature-box__title">Güvenli Deneyim</h3>
            <p className="feature-box__text">
              Kullanıcı dostu arayüz ile rezervasyonlarını kolayca yönet.
            </p>
          </div>

          <div className="feature-box">
            <h3 className="feature-box__title">Modern Tasarım</h3>
            <p className="feature-box__text">
              Karanlık tema ve sinema atmosferine uygun premium görünüm.
            </p>
          </div>
        </div>
      </section>

      <section className="promo">
        <div className="container promo__container">
          <div>
            <p className="promo__subtitle">Sinema Keyfini Kaçırma</p>
            <h2 className="promo__title">Haftanın En Popüler Filmleri Seni Bekliyor</h2>
          </div>
          <button className="promo__button">Hemen İncele</button>
        </div>
      </section>
    </>
  );
};

export default Home;