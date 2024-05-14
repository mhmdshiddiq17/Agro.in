import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/moleculs";
import Artikel from './pages/user/Artikel';
import {
  Home,
  LandingPage,
  HargaPangan,
  Analisis,
  ForumDiskusi,
  ForumDiskusiJelajahRuang,
  ForumDiskusiCari,
  ForumDiskusiDetail,
  ForumDiskusiRuang,

} from "./pages";
import { Provider } from "react-redux";
import About from "./pages/user/About";
import HasilAnalisis from "./pages/user/HasilAnalisis";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Artikel />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/harga-pangan" element={<HargaPangan />} />
        <Route exact path="/analisis" element={<Analisis />} />
        <Route exact path="/hasil-analisis" element={<HasilAnalisis />} />
        <Route exact path="/diskusi" element={<ForumDiskusi />} />
        <Route exact path="/diskusi/cari" element={<ForumDiskusiCari />} />
        <Route exact path="/diskusi/detail" element={<ForumDiskusiDetail />} />
        <Route
          exact
          path="/diskusi/jelajah-ruang"
          element={<ForumDiskusiJelajahRuang />}
        />
        <Route exact path="/diskusi/ruang" element={<ForumDiskusiRuang />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
export default App;
