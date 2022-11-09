import React from 'react'
import Skills from '../../components/Languages/Skills'
import "./About.css"

export default function About() {
    const plang = [
        "JavaScript",
        "Node js",
        "TypeScript",
        "ReactJs",
        "Native",
        "NextJs",
        "MongoDb"]
    return (
        <div>

            <div className='about-cntr'>
                <div className='about-left-cntr'>
                    <div className='skill-cntr'>
                        <div>
                            <Skills />

                        </div>
                    </div>

                </div>

                <div className='about-right-cntr'>
                    <span className='about-heading'>About.</span>
                    <p className='about-subtext'>
                        I'm a <strong className='about-highlighted-text'>Front-End developer</strong> based in <strong className='about-highlighted-text'>Murudeshwar, India</strong>.
                    </p>
                    <div className='about-points'>
                        <p className='about-description-text'> Since <strong className='about-highlighted-text'>2020</strong>, I've enjoyed turning complex problems <br />
                            into simple, beautiful and intuitive designs. When  <br />
                            I'm not pushing pixels, you'll find me cooking,  <br />
                            gardening or working out in the park</p>
                        {/* <p>Assist with production of clean and functional design</p>
                    <p>Bridge communication gap between designers and developers</p> */}
                    </div>
                    <p></p>

                    <p className='about-subtext about-highlighted-text'>The work I provide is of highest quality, fully responsive, and tested in a wide range of devices.</p>
                    <div className='icon-cntr' >
                        {plang?.map((lang, langIndex) => {
                            return (

                                <div onMouseEnter={() => { }} className={langIndex % 2 ? 'skill-even-cntr' : 'skill-odd-cntr '}>
                                    <p className={langIndex % 2 ? 'skill-even' : 'skill-odd '} >{lang}</p>

                                </div>
                            )
                        })}
                    </div>
                    {/* <button>{"Linked In />"}</button> */}
                </div>

            </div>
        </div>
    )
}
// style={langIndex % 2 == 0?{backgroundColor:"red"}:{backgroundColor:"green"}}