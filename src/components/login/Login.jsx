import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
 import * as Yup from "yup"



export default function Login({saveuserData}){


  const [isloading, setisloading] = useState(false)
 
  let Navigate=useNavigate();

     async function handle(values) {
      isloading(true)
         let {data}=await axios.post("https://www.google.com/search?client=avast-a-1&q=google&oq=gool&aqs=avast.2.69i57j0l5j69i60j69i65.2159j0j1&ie=UTF-8",values)
         if(data.message==="success"){
           Navigate("/home")
           localStorage.setItem("dataToken",data.token)
           saveuserData()
           setisloading(false)
         }
     }
    
let validationSchema=Yup.object({
  email:Yup.string().required("email is requried").email("email is invalid"),
  password:Yup.string().required("password is requried").matches(/^[A-Za-z0-9]{5,10} /,"password not ok"),
})



// function validate(values) {
//     let errors={};


// // name

//     if(!values.name){
//         errors.name="name is requried"
//     }

//     else if(values.name.length<3){
//         errors.name="name is minLength is 3"
//     }

//     else if(values.name.length>10){
//         errors.name="name is maxLength is 10"
//     }


// // email

//     else if (!values.email)
//     {
//        errors.email = 'email is required';
//      }

//     else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
//      {
//         errors.email = 'Invalid email requried';
//       }
   


//     //   Phone
//       else if (!values.phone)
//       {
//          errors.phone = 'phone is required';
//        }
  
//       else if ( !/^01[0125][0-9]{8}$/i.test(values.phone))
//        {
//           errors.phone = 'phone must be Egyption Number';
//         }



// // Password

//         else if (!values.Password)
//         {
//            errors.Password = 'Password is required';
//          }


    
//          else if ( !/^[A-Z][a-z0-9]{5,10}/i.test(values.password))
//          {
//             errors.password = 'Password must be start with upperCase....';
//           }
  
//           else if (!values.repassword)
//           {
//              errors.repassword = 'repassword is required';
//            }

//            else if (values.password!==values.repassword)
//            {
//               errors.Password = 'Password and repassword NOT Math';
//             }


//             return errors;
     
// }


    // let formik= useFormik({
    //     initialValues:{
    //         name:"",
    //         phone:"",
    //         email:"",
    //         password:"",
    //         repassword:""
    //     },
    //     onSubmit:handle
    // })


let formik=useFormik({
  initialValues:{
    email:"",
    password:"",

  },validationSchema,
  onSubmit:handle
})


  return<>
  <div className="w-75 mx-auto py-4">
    <h3> Login</h3>



    <form onSubmit={formik.handleSubmit}>

            <label htmlFor="email"></label>
            <input onBlur={formik.handleBlur} placeholder='Email' className='form-control' onChange={formik.handleChange}  value={formik.values.email} type='email'  name="email" id='email' />
            {formik.errors.email &&formik.touched.email  ?<div className="alert alert-danger my-2">{formik.errors.email}</div>:null}

            <label htmlFor="password"></label>
            <input onBlur={formik.handleBlur}  placeholder='password' className='form-control' onChange={formik.handleChange}  value={formik.values.password} type='password'  name="password" id='password' />
            {formik.errors.password &&formik.touched.password  ?<div className="alert alert-danger my-2">{formik.errors.password}</div>:null}

          
            
             {isloading?    



<button  className='btn btn-outline-danger my-1'><i className='fas fa-spinner fa-spin'></i></button>

:     

<button  type='submit' className='btn btn-outline-danger my-1 my-1'>Register</button>

}


    </form>
  </div>
  </>
}