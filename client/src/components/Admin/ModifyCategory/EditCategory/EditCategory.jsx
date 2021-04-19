/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useParams, Link } from 'react-router-dom'
import { editCategory, deleteCategory } from '../../../../redux/actions/actionBack';
import '../../../../scss/components/_editProducts.scss';

function EditCategory() {

    const {id} = useParams();

    const dispatch = useDispatch();

    const allCategories = useSelector((store) => store.reducerCategories.allCategoriesCache)
    const productOrError = useSelector((store) => store.reducerErrorRoutes.stateAction)
    console.log(productOrError)
    
    const [category, setCategory] = useState({
        id: 1,
        name: "",
    })

    const [boolean, setBoolean] = useState(false)

    useEffect(() => {
        const findCategory = allCategories.find(f => f.id === Number(id))
       
        if (findCategory?.id) {
          
            setCategory({
                id: findCategory.id,
                name: findCategory.name,

            })
        }
        
    }, [id])

    function handleInputChange(event) {
        let categoryName = event.target.value;

        if(categoryName !== ""){

          setCategory({ ...category, ["name"]: event.target.value })
        } 
    }
 
    function submitForm(event) {
        event.preventDefault();

        if(category.name !== ""){
   
          dispatch( editCategory(id, category) );  
        }
    }
    const deleteProducts = () => {
        setBoolean(true)
    }
    const Yes = () => {

        if(category.id){

            if(category.id){

              dispatch( deleteCategory(category.id) );  
            }
        }
        setBoolean(false);
    }
    const No = () => {
        setBoolean(false);
    }

    const alertSucces = () =>{
        Swal.fire({
           title: "Categoria Editada",
           icon: "success",
           timer: "1500",
           showConfirmButton: false,
        })
    }

    if(productOrError && (productOrError.status === 205 || productOrError.status === 200)){
            
        alertSucces();
        productOrError.status = 0
    }
    
    return (
        <div className="mainDivEP">
            <h2 className="title">Edit Category</h2>
            <Link 
                className="nav-link" 
                to="/Admin/Category"
            ><li>Add Category</li></Link>
            <div className="divEP">
                <form 
                    className="formEP" 
                    onSubmit={submitForm} 
                >
                    <div>
                        Name: 
                        <input 
                            required
                            className="input" 
                            type="text" 
                            onChange={handleInputChange} 
                            value={category.name} 
                            name="name" 
                        />
                    </div>
                    <input 
                        className="EditAndDelete" 
                        type="submit" 
                        value="Edit" 
                    />
                    <input 
                        className="EditAndDelete"
                        type="button" 
                        value="Delete" 
                        onClick={deleteProducts} 
                    />
                </form>
            </div>
                {boolean === true ? 
                    <div className="divDelete">Do you want to delete this product?
                        <br/>
                        <button className="Yes" type="button" onClick={Yes}>Yes</button>
                        <button className="No" type="button" onClick={No}>No</button>
                    </div> : null
                }
        </div>
    );
}

export default EditCategory;