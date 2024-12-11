import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "../layout/AppLayout"
import SingleFilm from "../pages/SingleFilm"
import Home from "../pages/Home"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="movies/:id" element={<SingleFilm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
