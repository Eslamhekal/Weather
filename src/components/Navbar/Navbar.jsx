import React from 'react'
import style from "../Navbar/navbar.css"

export default function Navbar({menuopen, setmenuopen}) {
  return (
    <div className='navbarrr nav'>
    
<div className={"navbarrr "+(menuopen&&"active")}>
<div className='leftNavbar'>
<div className='logo'>    <h1>genius</h1>    </div>
<div className='itemNavbar'>
<p className='pe-5'> <span><i class="fa-solid fa-user"></i></span> 01065624727</p>
<p> <span><i class="fa-solid fa-message"></i></span> safak@gmail.com</p>

</div>

</div>
<div className='RightNavbar'>
<div className='bar'onClick={()=>setmenuopen(!menuopen)}>

<span className='one'></span>
<span className='two'></span>
<span className='three'></span>

</div>
</div>
</div>
    </div>
  )
}
