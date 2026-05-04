import React, { useState, useEffect } from 'react'
import AIPlansLogo from '../assets/images/logo.svg'
import me from '../assets/images/profilepicture.jpeg'
import heroImage1 from '../assets/images/newHeroImage1.png'
import heroImage2 from '../assets/images/newHeroImage2.png'
import heroImage3 from '../assets/images/newHeroImage3.png'

const heroImages = [heroImage1, heroImage2, heroImage3]

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [ready, setReady] = useState(false)

    useEffect(() => {
        let interval
        Promise.all(
            heroImages.map(src => {
                const img = new Image()
                img.src = src
                return img.decode()
            })
        ).then(() => {
            setReady(true)
            interval = setInterval(() => {
                setCurrentIndex(prev => (prev + 1) % heroImages.length)
            }, 150)
        })

        return () => clearInterval(interval) // cleanup must be outside .then()
    }, [])

    return (
        <>
            <div className="custom:mx-auto xxs:mx-3.5 pointer-events-none absolute inset-0 z-1 max-w-6xl [background-image:url('/assets/framer-noise.png')] [bg-size:128px] bg-repeat opacity-6 md:mx-5 lg:mx-8"></div>
            <div className='px-64! py-6!'>
                <p className='text-[5.5vmin] font-inter leading-[1.3]'>
                    Hi, I am Karan!
                    <img 
                        src={me} 
                        alt="Karan" 
                        className='h-[1.5em] w-[1.5em] rounded-full inline-block align-middle object-cover mx-3! -my-[0.3em]! -translate-y-[0.15em]' 
                    />
                    a Frontend Engineer and Designer who's passionate about creating beautiful user experiences.
                    Currently I am working at{' '}
                    <span className='inline-flex items-center gap-2 align-middle leading-none -translate-y-[0.15em]'>
                        <img src={AIPlansLogo} className='h-[0.9em] w-auto shrink-0 -translate-y-[-0.09em]!' alt='AI Plans logo' />
                        <a href='https://beta.ai-plans.com' target='_blank' className='leading-none'>AI Plans</a>,
                    </span>{" "}driving a full website redesign,
                    focused on better user experience &amp; feedback-driven improvements.
                    In my free time, I like to draw, read a book or listen to music.
                </p>
            </div>

            <div className="w-full px-64! py-6!">
                <div className="bg-[#cac6cb] p-2! shadow-[inset_-1.5px_-1.5px_0_0_#263238,inset_1.5px_1.5px_0_0_#dedcde,inset_-3px_-3px_0_0_#a099a1,inset_3px_3px_0_0_#fcfcfc]">

                <div className='relative w-full h-8 flex bg-[#cac6cb]'>
                    <div className='relative w-full h-8 m-auto! mx-0.5! bg-[#000080] flex gap-1 items-center justify-end px-1.25!'>
                        <div className='w-5 h-5 bg-[#c0c0c0] flex items-end justify-center font-ms text-[10px] text-black leading-none font-bold select-none' style={{boxShadow: 'inset -1.5px -1.5px 0 0 #263238, inset 1.5px 1.5px 0 0 #fcfcfc, inset -3px -3px 0 0 #a099a1, inset 3px 3px 0 0 #cac6cb'}}><div className='w-2.75 mb-1! border-b-3 border-black'></div></div>
                        <div className='w-5 h-5 pr-px! bg-[#c0c0c0] flex items-center justify-center text-[10px] text-black leading-none font-bold select-none' style={{boxShadow: 'inset -1.5px -1.5px 0 0 #263238, inset 1.5px 1.5px 0 0 #fcfcfc, inset -3px -3px 0 0 #a099a1, inset 3px 3px 0 0 #cac6cb'}}><div className='w-2.75 h-2.75 border border-t-3 border-black'></div></div>
                        <div className='w-5 h-5 bg-[#c0c0c0] flex items-center justify-center font-ms text-[10px] text-black leading-none font-bold select-none' style={{boxShadow: 'inset -1.5px -1.5px 0 0 #263238, inset 1.5px 1.5px 0 0 #fcfcfc, inset -3px -3px 0 0 #a099a1, inset 3px 3px 0 0 #cac6cb'}}>✕</div>
                    </div>
                </div>
                <div className='relative w-full h-8 flex justify-start items-center gap-8  pl-2! font-ms text-black font-medium bg-[#cac6cb]'>
                    <div><span className='underline'>R</span>esume</div>
                    <div><span className='underline'>G</span>itHub</div>
                    <div><span className='underline'>L</span>inkedIn</div>
                </div>
                <div >

                <div className="relative w-full aspect-918/511 overflow-hidden" style={{boxShadow: 'inset -1.5px -1.5px 0 0 #fcfcfc, inset 1.5px 1.5px 0 0 #a099a1, inset -3px -3px 0 0 #cac6cb, inset 3px 3px 0 0 #263238'}}>
                    {ready && heroImages.map((img, i) => (
                        <img
                        key={i}
                        src={img}
                        decoding="sync"
                        fetchpriority="high"
                        className={`absolute inset-0 w-full h-full object-cover ${
                            i === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        alt="Image of User sitting at the desktop looking at the laptop"
                        />
                        ))}
                </div>
                </div>
            </div>
            </div>
            <div>
                <h2 className='px-64! text-[5.5vmin] font-'>Latest Projects</h2>
            </div>
        </>
    )
}

export default Home