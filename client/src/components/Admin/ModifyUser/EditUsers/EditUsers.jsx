/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { editUser } from '../../../../redux/actions/actionBack';
import '../../../../scss/components/_editProducts.scss'

function EditUsers() {

    const {id} = useParams();

    const dispatch = useDispatch()

    const allUsers = useSelector((store) => store.reducerOrderUser.allUsers)
    const allRoles = useSelector((store) => store.reducerRoles.allRoles)
    const productOrError = useSelector((store) => store.reducerErrorRoutes.stateAction)

    const [user, setUser] = useState({
        available: true,
        email: "",
        id: 0,
        location_id: 0,
        name: "",
        password: "",
        phone_Number: 0,
        role: {},
        roleId: 0,
    })

    const [boolean, setBoolean] = useState(false)

    useEffect(() => {
        const findUser = allUsers.find(f => f.id === Number(id))
       
        if (findUser?.id) {
          
            setUser({

                available: findUser.available,
                email: findUser.email,
                id: findUser.id,
                location_id: findUser.location_id,
                name: findUser.name,
                password: findUser.password,
                phone_Number: findUser.phone_Number,
                role: findUser.role,
                roleId: findUser.roleId,
            })
        }
        
    }, [id])

    function handleInputChange(event) {

        let roleId = Number(event.target.value);
 
        if(event.target.value !== ""){

            let rol = allRoles.find(f =>Number(f.id) === Number(event.target.value))

            if(rol.id){
                setUser({ ...user, [event.target.name]: roleId, ["role"] : rol })
            }

        } 

    }
    function submitForm(event) {        
        event.preventDefault();
      
        dispatch( editUser(id, user) )  
    }

    //Handle input para price

    const deleteProducts = () => {
        setBoolean(true)
    }
    const Yes = () => {

        if(author.id){

            // dispatch( deleteAuthor(author.id) );
        }
        setBoolean(false);
    }
    const No = () => {
        setBoolean(false);
    }

    return (
        <div className="mainDivEP">
            <h2 className="title">Edit Users</h2>
            <Link 
                className="nav-link" 
                to="/Admin/User"
            ><li>Add Author</li></Link>
            <div className="divEP">
                <h3>ROLES TABLE</h3>
                {allRoles !==0 
                ? allRoles.map(m =>{
                    return(
                    <div className="roles">
                        <h4 className="role">{m.id} | {m.description}</h4>
                    </div>
                    )
                })
                : null 
                }
                <br/>
                <h3>USER DATA</h3>
                <form 
                    className="formEP" 
                    onSubmit={submitForm} 
                >
                    <div>
                        Name: 
                        <h3>{user.name}</h3>
                    </div>
                    <div>
                        Email: 
                        <h3>{user.email}</h3>
                    </div>
                    <div>
                        Phone Number: 
                        <h3>{user.phone_Number}</h3>
                    </div>
                    <div>
                        Actual RoleId and Role: 
                        <h3>{user.role.id} | {user.role.description}</h3>
                    </div>
                    <div>

                    </div>
                    <div>
                    <h3>SELECT NEW ROLE</h3>
                        <select 
                            required
                            name="roleId" 
                            id="selectorAvEP" 
                            onChange={handleInputChange}
                        >
                            <option key="" value="">
                            Select a Rol
                            </option>
                                {allRoles.map(a => <option key={a.id} value={a.id}>{a.description}
                            </option>)}
                        </select>
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

export default EditUsers
