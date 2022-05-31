import React, { createContext, useState } from 'react';

const OfflerListContext = createContext(null);

export const OfflerListProvider = ({ children }) => {

    const [offerList, setOfferList] = useState([]);
    const values = {

        offerList,
        setOfferList
    }
    return (
        <OfflerListContext.Provider value={values}>
            {children}
        </OfflerListContext.Provider>
    );
};

export default OfflerListContext