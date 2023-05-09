import React from 'react'

const About = () => {
    return (
        <div name='about' className=' w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#058590]'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className=' sm:text-right text-4xl font-bold'>
                        <p>Bonjour, moi c'est Kevin, enchanté. N'hesitez pas à vous balader.</p>
                    </div>
                    <div>
                        <p>
                            Après une quinzaine d'années dans la gestion de portefeuilles et le management, 
                            j'ai décidé de m'éclater dans ma vie professionnelle. 
                            Développeur depuis environ 3 ans, je suis spécialisé en JavaScript et plus précisement la stack MERN. 
                            J'aime coder des trucs, autant pour des Start-Ups que sur des gros projets. 
                            Actuellement en poste en tant qu'ingénieur logiciel chez Cap Gemini, je travaille également sur le projet personnel <a href='https://www.linkedin.com/company/appspot'>SPOT</a>  
                            <br></br>N'hésitez pas à me contacter afin d'échanger sur un projet ou simplement pour boire un café.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About