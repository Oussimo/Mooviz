import MovieDetails from "./components/MovieDetails";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

export default function App() {
  return (
    <main className="bg-background w-full min-h-screen text-textPrimary">
      <div className="container mx-auto p-4 max-w-screen-lg flex flex-col gap-4 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<MovieDetails />} />
        </Routes>
      </div>
    </main>
  );
}
