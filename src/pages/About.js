import React, { useEffect } from 'react';
import ProfilePic from '../image/profilePic.jpg'
import { useNavigate } from 'react-router-dom'
import '../css/About.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { SiRubyonrails } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 1.5 }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

function About() {



  return (
    <div>
      <div className='vl'></div>
      <motion.div className='home container'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div>
          <div className='contents'>
            <div className='bio'>
              <h1 className='about-title'>About Me</h1>
              <p>Software Engineer with experience in Ruby on Rails, JavaScript and React and a background as both an educator and a professional violinist. With a love of problem solving, how others experience something and solving technical problems, I have the tenacity and flexibility to adjust to others in order to accomplish a project. </p>
              <h2>Technical Skills</h2>
              <ul className='languages'>
                <li><FaReact color="#02FFF0"/> React</li>
                <li><SiRedux color="#8A2BE2"/> Redux</li>
                <li><SiJavascript color="yellow"/> JavaScript</li>
                <li><DiRuby color="red"/> Ruby</li>
                <li><SiRubyonrails color='red' size={20}/> Ruby on Rails</li>
                <li><AiFillGithub color='black' size={20}/> Github</li>
                <li>Sqlite3</li>
              </ul>
            </div>
            <img src={ProfilePic} alt="Profile Pic" />
          </div>  
          <div className='btn-container-a'>
            <span className='link'><Link to="/experience"><span className='text'><b>Where have I worked?</b></span></Link></span>
          </div>  
      </div>
    </motion.div>
  </div>
  );
}

export default About;
