import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "../layout/AppLayout"
import SingleFilm from "../pages/SingleFilm"
import Home from "../pages/Home"
import GlobalContext from "../contexts/GlobalContext"
function App() {
  const [loading, setLoading] = useState(false)
  const values = {
    loading,
    setLoading
  }

  return (
    <>
      <GlobalContext.Provider value={values}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="movies/:id" element={<SingleFilm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
