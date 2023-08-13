import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Menu from '../menu/Menu'
import Intro from '../INTRO/Intro'

import style from './main.css'
import PortoFolio from '../Portofolio/PortoFolio'
import Testmonial from '../testmonial/Testmonial'
import ContactUs from '../ContactUs/ContactUs'

export default function Main() {

    const [menuopen, setmenuopen] = useState(false)


  return (
   <>
   <Navbar menuopen={menuopen} setmenuopen={setmenuopen}/>
   <Menu menuopen={menuopen} setmenuopen={setmenuopen}/>
<div className='sectionssss'>
<Intro/>
<Testmonial/>
<PortoFolio/>

<ContactUs/>

</div>

   </>
 )

}
