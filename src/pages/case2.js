import React, { useState, useEffect ,useContext} from 'react'
import _ from "lodash"
import OfferList from '../components/offer.list'
import CircularProgress from '@material-ui/core/CircularProgress';
import { getData } from '../services/base.services'
import OfflerListContext from '../context/offer.list.context'

function Case2() {
    const { setOfferList,offerList } = useContext(OfflerListContext);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setOfferList([])
        getData("case2")
            .then((response) => {
                if (response.status == 200) {
                    setOfferList(response.data.offerList)
                }
                else {
                    setOfferList([])
                }
                setLoading(true)
            })
            .catch((err) => {
                console.log(err)
                setLoading(true)
            });
    }, [])


    return (
        <div >
            {!loading ? (<div className='circular'><CircularProgress /></div>) : null}
            <OfferList ></OfferList>
        </div >

    );
}

export default Case2;
