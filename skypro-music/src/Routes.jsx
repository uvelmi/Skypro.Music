import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/main/MainPage'
import { FavouritesPage } from './pages/favourites/FavouritesPage'
import { MyPlaylist } from './pages/MyPlaylist/MyPlaylist'
import { LoginPage } from './pages/login/LogIn'
import { RegisterPage } from './pages/register/RegisterPage'
import { Category } from './pages/category/Category.jsx'
import { ProtectedRoute } from './pages/components/protected-route/ProtectedRoute'

import { NotFound } from './pages/not-found/NotFound'

export const AppRoutes = ({ user }) => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route path="/favourites" element={<FavouritesPage />} />
                <Route path="/myplaylist" element={<MyPlaylist />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/" element={<MainPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
