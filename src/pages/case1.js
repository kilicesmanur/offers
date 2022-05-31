import React, {useEffect ,useContext} from 'react'
import OfferList from '../components/offer.list'
import { getData } from '../services/base.services'
import OfflerListContext from '../context/offer.list.context'


function Case1() {
    const { setOfferList,offerList } = useContext(OfflerListContext);

    useEffect(() => {
        setOfferList([])
        getData("case1")
            .then((response) => {
                if (response.status == 200) {
                    setOfferList(response.data.offerList)
                }
                else {
                    setOfferList([])
                }
            })
            .catch((err) => {
                console.log(err)
            });
    }, [])


    return (
        <div >
            <OfferList ></OfferList>
        </div >

    );
}

export default Case1;
