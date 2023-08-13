import React, { useEffect, useState } from 'react'
import style from "./PortoFolio.css"
import cr7 from "../INTRO/download (1).jpeg"
import PortofolioList from '../portofolioList/portofolioList.jsx'
import {featuredPortfolio,webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio}from "../../data"

export default function PortoFolio() {
  const [selected, setselected] = useState("featured")
  const [data, setdata] = useState([])


useEffect(()=>{
  

  switch(selected){
    case "featured":
    setdata(featuredPortfolio)
    break;
    case "web":
    setdata(webPortfolio)
    break;
    case "mobile":
    setdata(mobilePortfolio)
    break;
    case "design":
    setdata(designPortfolio)
    break;
    case "content":
    setdata(contentPortfolio)
    break;

    default:setdata(featuredPortfolio)

  }
},[selected])





  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];



  return (


    
    <div className='PortoFolio'>
    <h2 className='titlePoRTOFOLIO'>PortoFolio</h2>
    <ul className='listPortoFolio'>

{list.map((item)=>(
  <div className='fswlppi'>
<PortofolioList
active={selected===item.id}
title={item.title}
setselected={setselected}
id={item.id}
/>
</div>
))}
    </ul>
    <div className='container'>
   {data.map((d)=>(
    <div className='itemx'>
    <img src={d.img} className='imgportofolio'/>
    <div className='overlay'>
    <h2  className='titleitemx'>{d.title}</h2>
    </div>
    </div>
   ))}
    </div>
    </div>
    
    
  )
}
