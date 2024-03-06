import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { Home } from './Home'

export const PagesRouting = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/home' element={<Home/>}/>
            </Route>
        </Routes>
    )
}