import React from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import DetailMe from './DetailMe';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
    return (
        <div className='mx-auto bg-purple-100'>

           <DetailMe></DetailMe>

            <AboutMe></AboutMe>
            <Skills></Skills>
            <Services></Services>
            <Projects></Projects>
            <ContactMe></ContactMe>
            
        </div>
    );
};

export default Home;