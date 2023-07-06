import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Search from "./pages/Search/Search"
import Channel from "./pages/Channel/Channel"
import Video from "./pages/Video/Video"


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/channel/:id" element={<Channel/>} />
      <Route path="/video/:id" element={<Video/>} />
      <Route path="/search/:id" element={<Search/>} />
    </Routes>
    </>
  )
}

export default App
