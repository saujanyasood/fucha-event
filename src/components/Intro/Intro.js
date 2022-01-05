import React, {useState} from 'react'
import HeroSection from '../HeroSection/HeroSection';
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

const Intro = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Navbar toggle={toggle}/>
            <Sidebar toggle={toggle} isOpen={isOpen}/>
            <HeroSection/>
        </div>
    )
}

export default Intro
