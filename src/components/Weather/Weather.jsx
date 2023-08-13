import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Weather() {

  const [location, setlocation] = useState("")

const [data, setdata] = useState({})

let url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=30e3151713310e67bccaf9bf64486343`


function search(event){

  if(event.key==="Enter"){
    axios.get(url).then((response)=>{
      setdata(response.data)
    })
    setlocation("")
  }
}




// const search=(event)=>{
// if(event.key==="Enter"){
//   axios.get(url)
//   .then((respo)=>{
//     setdata(respo.data)
//     console.log(respo.data)
//   })
//   setlocation("")
// }
// }


return (


<div className='main'>
<div className='search'>
<input onKeyPress={search} 
onChange={event=>setlocation(event.target.value)}
 value={location} placeholder='Enter cities'/>


</div>
<div className='weather'>

<div className='top ms-5'>
<div className='location'>
<h2>{data.name}</h2>
</div>
<div className='temp'>
{data.main?<h4  className=''>{((data.main.temp-32)/1.8).toFixed(2)} °c </h4>:null}

</div>


<div className='tempdesc'>
{data.weather?<p  className=''>{data.weather[0].main} </p>:null}
</div>

</div>

<div className='bottom mb-5'>

<div className='feels'>
{data.main?<p className='text-white'>feels_like</p>:null}

{data.main?<p className='bg-white me-1'>{data.main.feels_like} °F</p>:null}


</div>

<div className='humditiy'>
{data.main?<p className='text-white'>humidity</p>:null}

{data.main?<p className='bg-white me-1'>{data.main.humidity} %</p>:null}

</div>

<div className='wind'>

{data.wind?<p className='text-white'>wind.speed</p>:null}

{data.wind?<p className='bg-white me-1'>{data.wind.speed} MPH</p>:null}

</div>

</div>

</div>
</div>


)


    }
     


        






 

   

    
  

