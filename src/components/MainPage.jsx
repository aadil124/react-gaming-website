import React from 'react'
import SearchBox from './subcomponent/SearchBox'
import Hero from './subcomponent/Hero'
import Brand from './subcomponent/Brand'
import LastestGame from './subcomponent/LastestGame'
import LiveMatch from './subcomponent/LiveMatch'
import FeaturedGame from "./subcomponent/FeaturedGame"
import Shop from "./subcomponent/Shop"
import Blog from './subcomponent/Blog'
import NewsLetter from './subcomponent/NewsLetter'

const MainPage = () => {
    return (
        <>
            <SearchBox />
            <main>
                <article>
                    <Hero />
                    <Brand />
                    <div class="section-wrapper">
                        <LastestGame />
                        <LiveMatch />
                    </div>
                    <FeaturedGame />
                    <Shop />
                    <Blog />
                    <NewsLetter />
                </article>
            </main>
        </>
    )
}

export default MainPage