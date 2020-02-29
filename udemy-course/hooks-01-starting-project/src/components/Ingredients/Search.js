import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import useHttp from "../../hooks/http";
import "./Search.css";
import ErroModal from "../UI/ErrorModal";
const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [filterState, setFilterState] = useState("");
  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (filterState === inputRef.current.value) {
        const query =
          filterState.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${filterState}"`;

        sendRequest(
          "https://react-trainee-burger-builder.firebaseio.com/ingredients.json" +
            query,
          "GET"
        );
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [filterState, sendRequest, inputRef]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredients = [];
      for (let key in data) {
        if (data[key] !== 0) {
          loadedIngredients.push({
            id: key,
            title: data[key].title,
            amount: data[key].amount
          });
        }
      }
      onLoadIngredients(loadedIngredients);
    }
  }, [data, isLoading, error, onLoadIngredients]);
  return (
    <section className="search">
      {error && <ErroModal onClose={clear}>{error}</ErroModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input
            ref={inputRef}
            type="text"
            value={filterState}
            onChange={event => setFilterState(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
