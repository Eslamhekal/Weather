import React from 'react'
import style from './portofolioList.css'

export default function PortofolioList({active,title,setselected,id}) {
  return (
    <li  className={active?"portofolioList active":"portofolioList" }    onClick={()=>setselected(id)}>{title}</li>
  )
}
