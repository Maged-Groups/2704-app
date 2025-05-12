import { lazy, Suspense } from 'react'

import Header from './layouts/Header';
import TopNavbar from './layouts/TopNavbar';
import Footer from './layouts/Footer';

import { Route, Routes } from 'react-router'


import P404 from './pages/P404';
import Home from './pages/Home';
import Contact from './pages/Contact';
import SingleProduct from './pages/SingleProduct';
import EditProduct from './pages/EditProduct';
import LoadingFullScreen from './components/LoadingFullScreen';

// Lazy imports

const Users = lazy(() => import('./pages/Users'));
const Products = lazy(() => import('./pages/Products'));

// import Products from './pages/Products';
console.log('App.jsx file');

export default function App() {
    console.log('App Component rendered');

    return (

        <div className="h-screen">

            <Header />
            <TopNavbar />

            <Suspense fallback={<LoadingFullScreen />} >
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/users' element={<Suspense fallback={<LoadingFullScreen />}><Users /></Suspense>} />
                    <Route path='/marketplace' element={<Suspense fallback={<LoadingFullScreen />}><Products /></Suspense>} />
                    <Route path='/marketplace/:id' element={<SingleProduct />} />
                    <Route path='/marketplace/:id/edit' element={<EditProduct />} />
                    <Route path='/contacts' element={<Contact />} />
                    <Route path='*' element={<P404 />} />
                </Routes>
            </Suspense>


            <Footer />
        </div >
    )
}