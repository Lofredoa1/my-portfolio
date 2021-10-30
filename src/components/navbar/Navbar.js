import React, { useEffect, useState, useRef } from 'react';
import './navbar.css'


const Navbar = (props) => {
    
    const [isSticky, setSticky] = useState(false);
    let h = window.innerHeight;
    
    const handleScroll = () => {
        //console.log("top:", ref.current.getBoundingClientRect().top)
        let scrollLength = window.scrollY
        console.log("new length:", scrollLength)
        
      if (scrollLength >= h) {
        setSticky(true);
      } else {
          setSticky(false)
    
      }
    };


  

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
       

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
    }, [])

return (
    <div class={`sticky-wrapper${isSticky ? ' sticky fixed' : ''}`} >
        <h1 class="sticky-inner">Navbar Component</h1>
    </div>

)
}

export default Navbar