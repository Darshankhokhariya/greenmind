import React from 'react'
import Nav from '../../Components/Nav'
import Carousel from '../../Components/Carousel'
import Hero from '../../Components/Hero'
import About from '../../Components/About'
import Category from '../../Components/Category'
import Testi from '../../Components/Testi'
import Footer from '../../Components/Footer'

function Home() {
    return (
        <>
            <Nav />
            <Carousel />
            <Hero />
            <About />
            <Category />
            <Testi />
            <Footer />
        </>
    )
}

export default Home