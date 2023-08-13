import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    // const [tracks, setTracks] = useState([]);
    // const [access_token, set_access_token] = useState(null);
    // const [recomends, setRecomen] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilterProducts] = useState(products);
    return (
        <Context.Provider value={{ searchField, setSearchField, products, setProducts, filteredProducts, setFilterProducts }}>
            {children}
        </Context.Provider>
    );
};