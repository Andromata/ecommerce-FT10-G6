/*eslint-disable*/
import axios from 'axios'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchByTitle } from '../../redux/actions/actionBack';
import { setActive } from '../../redux/actions/request'
import '../../scss/components/_searchBar.scss';

function SearchBar() {
  const [arraySuggestions, setArraySuggestions] = useState([])
  const [input, setInput] = useState('');

  const activeButton = useSelector((store) => store.reducerLoading.activeButton)
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInput(event.target.value);
    getSuggestions(event.target.value)
  };

  // *** FUNCION PARA PEDIR "SUGERENCIAS" AL BACK ***
  const getSuggestions = async (input) => {
    if (input !== "") {
      const response = await axios.get(`http://localhost:3001/get/product/search?keyword=${input}`);

      let filtered = [];

      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].name.toLowerCase().includes(input.toLowerCase())) {
          filtered.push(response.data[i])
        }
      }
      setArraySuggestions(filtered);
    } else {
      setArraySuggestions("")
    }
  }
  console.log(arraySuggestions);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.length > 0) {
      activeButton === "1" && dispatch(searchByTitle(input));
    }
  };

  const buttonHandleChange = (e) => {
    e.preventDefault()
    dispatch(setActive(e.target.value))
  }

  const handleSuggestionClick = (name) => {
    dispatch(searchByTitle(name))
    setArraySuggestions("")
    setInput('')
  }

  return (
    /* ------------ */
    /* SEARCH INPUT */
    /* ------------ */

    <div className="wrapper searchbar-wrapper">
      <form onSubmit={handleSubmit} action='#'>
        <div className="searchbar-container">
          <label htmlFor="input">
            <input className="searchbar-input"
              type="text"
              name="input"
              value={input}
              autoComplete="off"
              placeholder="Browse our gallery..."
              onChange={handleInputChange}
            />
          </label>
          <ul className="suggestions-container">
            {arraySuggestions ? arraySuggestions.map(suggestion => {
              return (
                <div
                  className="li-container"
                  onClick={() => handleSuggestionClick(suggestion.name)}>
                  <img
                    src={suggestion.preview} />
                  <i className="fas fa-search"></i>
                  <li>{suggestion.name}</li>
                  <hr />
                </div>
              )
            }) :
              console.log('nada')
            }
          </ul>
        </div>
        <div className="searchbar-filters">
          <button
            type="submit"
            className="btn-rounded searchbar-filters--btn_active search-button">
            <i class="fas fa-search"></i></button>
          <button
            className={activeButton === "1" ? "btn-rounded searchbar-filters--btn_active" : "btn-rounded searchbar-filters--btn_inactive "}
            type="submit"
            value={1}
            onClick={(e) => { buttonHandleChange(e) }}
          >
            Products
          </button>
          <button
            className={activeButton === "2" ? "btn-rounded searchbar-filters--btn_active" : "btn-rounded searchbar-filters--btn_inactive "}
            type="submit"
            value={2}
            onClick={(e) => { buttonHandleChange(e) }}
          >
            Series
          </button>
          <button
            className={activeButton === "3" ? "btn-rounded searchbar-filters--btn_active" : "btn-rounded searchbar-filters--btn_inactive "}
            type="submit"
            value={3}
            onClick={(e) => { buttonHandleChange(e) }}
          >
            Authors
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
