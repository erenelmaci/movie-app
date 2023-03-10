import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "../pages/Main"
import Login from "../pages/Login"
import Register from "../pages/Register"
import MovieDetail from "../pages/MovieDetail"
import NotFound from "../pages/NotFound"

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movie-detail" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
