/*eslint-disable*/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  useSelector} from 'react-redux';
import '../../../scss/components/_filterProductByAuthor.scss';

const FilterProductByAuthor = () => {

    const allArtist = useSelector((store) => store.reducerArtist.allArtistCache)
    const allProducts = useSelector((store) => store.reducerProduct.backUpProducts)
    const [input, setInput] = useState(0);

    const handleChange = (id) => {
        if(id.target.value !== 0){
           setInput(id.target.value);
        }    
    }
    
    let authorProducts = [];
    if(input !== 0 ){
        authorProducts = allProducts.filter(f => {
            if(f.author.id === undefined)return;
            if(f.author.id === Number(input) ){
                return f
            } 
        })
    }

    return ( 
        <>
            <div className="filterProductsByAuhorTitle">
                    <h3>Find products by author's name</h3>
                    <span>Select an Author to get all their products</span>
                    <span> then select a product to see the details and edit it</span>
                </div>
                <div className='authorSelect'>
                    <select 
                        className="authorSelector"
                        name="authorId"  
                        onChange={handleChange}
                    >
                        <option 
                            value="" 
                            disabled selected 
                        >Select Author</option>    
                        {allArtist.map(a => <option value={a.id}>{a.name}</option>)}
                    </select>
                </div>
                <div className="authorsProduct">
                    {authorProducts.length !==0 
                    ?<ul>
                        {authorProducts.length !== 0 && authorProducts.map(m => {
                            return(
                                <li className="product" key={m.id}>
                                    <Link to={`/Admin/Product/Edit/${m.id}`}>
                                        <h4>{m.name}</h4>
                                    </Link>
                                </li>           
                            )
                        })}
                    </ul>
                    : null
                    }
                </div> 
        </>
    );
}
 
export default FilterProductByAuthor;