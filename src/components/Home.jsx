import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* Container */}
            <div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#058590]'>Hello World, je m'appelle</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Kevin Maillard</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Je suis développeur FullStack</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Développeur FullStack spécialisé JavaScript et je code des trucs</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#058590] hover:border-[#058590]'>
                        <Link to="work" smooth={true} duration={500} >
                            Portfolio
                        </Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Home