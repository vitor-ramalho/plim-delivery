import axios from 'axios';
import React, {useState, useEffect} from 'react'

export const ProductsContext = React.createContext({});

export const ProductsProvider = (props) => {
    const [produtos, setProdutos] = useState([
        {
            id: null,
            nome: null,
            descricao: null, 
            valor: null,
            img: null            
        }
    ]);

    useEffect(() => {
        axios
            .get(`http://localhost:3001/produtos`)
            .then((response) => {
                setProdutos(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return(
        <ProductsContext.Provider value={{produtos, setProdutos}}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => React.useContext(ProductsContext);
