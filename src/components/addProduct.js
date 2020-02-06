// import React, { useState } from 'react';
// import axios from 'axios';
// import * as Yup from 'yup';
// import { Form, Formik, Field,} from 'formik';

// import styled from 'styled-components';


// export default function addProduct(){
//     // const[addProduct, setAddProduct] = useState('');

//     function submitHandler(values,actions){
//         axios
//         .post('https://africanmarketplacebackend.herokuapp.com/api/items/addProducts', values)
//         .then(response=>{
//             console.log(response);
//             // setAddProduct(response.data);

//             actions.resetForm();

//         })
//         .catch(error =>{
//             console.log(error);
//         },);
//     }
    
//     return(
//         <StyledAdd>
//             <div className="addProducts">
//             <div className="productFrom">
//             <h1>Add New Product</h1>
//             <Formik
//             onSubmit={submitHandler}
//             validationSchema={validationSchema}
//             initialValues={initialProductFormValues}
//             >
//                 <Form>
//                 <label htmlFor="productForm_name">Product</label>
//           <Field
//             type="text"
//             id="productForm_name"
//             name="name"
//             placeholder="Enter your name here"
//           />
//           <label htmlFor="productForm_description">Description</label>
//           <Field
//             type="text"
//             id="productForm_description"
//             name="description"
//             placeholder="Enter the description of your product"
//           />
//            <label htmlFor="productForm__price">Price</label>
//           <Field
//             type="text"
//             id="productForm__price"
//             name="price"
//             placeholder="Enter your price"
//           />
//             <label htmlFor="productForm__location">Location</label>
//           <Field
//             type="text"
//             id="productForm__location"
//             name="location"
//             placeholder="Enter your location"
//           />
//            <label htmlFor="productForm__category">Category</label>
//           <Field
//             type="text"
//             id="productForm__category"
//             name="category"
//             placeholder="Enter your category"
//           />
//           <button type="submit">Submit your product list</button>
//                 </Form>
//             </Formik>  
//             </div>  
//         </div>
//         </StyledAdd>
           
//     )
// }

// const validationSchema = Yup.object().shape({
//     name: Yup.string().required('Please enter a name'),
//     description: Yup.string().required('Please enter a description'),
//     price: Yup.string().required('Please enter a price'),
//     category: Yup.string().required('Please enter a category'),
//     location: Yup.string().required('Please enter a location')
// });

// const initialProductFormValues = {
//     name: '',
//     description: '',
//     price: '',
//     location: '',
//     category: ''
//   }

import React, { useState } from 'react';
import {Formik, Form, Field} from 'formik';
import axios from 'axios';

import styled from 'styled-components';

export default function AddProduct({setNewProductId}){
    

    function handleSubmit (values, actions) {
    values.user_id=1
    axios
    .post('https://africanmarketplacebackend.herokuapp.com/api/items/addProducts', values)
    .then(res=>{
        setNewProductId(res.data);
       actions.resetForm();
    })
    .catch(error =>{
        console.log(error.message);

    })
    .finally(()=>{
        actions.setSubmitting(false);
    })
    }

    return (
        <StyledAdd>
            <div className="addProduct">
           
            <Formik
            initialValues={{name:'',description:'',price:'',location:'',category:''}}
            onSubmit={handleSubmit}
            render={props =>(
                <Form>
                    <label htmlFor="productForm_name">Name</label>
                <Field
                type="text"
                id="productForm_name"
                name="name"
                placeholder="Enter product name"
                />
                <label htmlFor="productForm__description">Description</label>
                <Field
                type="text"
                id="productForm_description"
                name="description"
                placeholder="Enter product description"
                />
                <label htmlFor="productForm__price">Price</label>
                <Field
                type="text"
                id="productForm_price"
                name="price"
                placeholder="Enter product price"
                />
                <label htmlFor="productForm__location">Location</label>
                <Field
                type="text"
                id="productForm__location"
                name="location"
                placeholder="Enter product location"
                />
                <label htmlFor="productForm__category">Category</label>
                <Field
                type="text"
                id="productForm__category"
                name="category"
                placeholder="Enter product category"
                />
                <button type="submit" disabled={props.isSubmitting}> 
                {
                    props.isSubmitting ? 'Submit your product list': 'submit'
                }
                </button>
                </Form>
            )}
            />
        </div>

        </StyledAdd>
        
    );
}



  const StyledAdd =styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 15px;
  margin: 16px auto;
  text-align: center;
  width: 350px;
  
   
  /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24); */

  

  & form {
      display:flex;
      /* flex-direction: column; */
      align-items: center;
      flex-flow: column nowrap;

  
   & button{
       border-radius:2px;
       /* padding:5px; */
       background: transparent;
       transition: 0.9s ease-in-out;
       padding: 10px 15px;
       font-size: 16px;
       box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.12), 0 2px 2px 1px rgba(0, 0, 0, 0.24);
       transition: all 0.2 ease-in;
       
       
       &:hover{
           cursor:pointer;
           transform: translateY(-1px);
           box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.12), 0 2px 3px 2px rgba(0, 0, 0, 0.24);
           
       }

   }

  }
  `;