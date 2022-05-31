import React, { useState, useEffect, useContext } from 'react'

import axios from 'axios'
import _ from "lodash"
import { dev } from '../env/config'
import OfferList from '../components/offer.list'
import OfflerListContext from '../context/offer.list.context'
import CircularProgress from '@material-ui/core/CircularProgress';
function Case3() {
    const [numOffers, setNumOffers] = useState(null)
    const [loading, setLoading] = useState(false)
    const { setOfferList, offerList } = useContext(OfflerListContext);

    useEffect(() => {
        setOfferList([])
        if (numOffers == null) {
            let offerListData = [];
            let get_offer_count = dev.API_ENDPOINT_URL + "/get_offer_count";
            axios.get(get_offer_count).then(async (response) => {
                console.log(response)
                if (response.status == 200) {
                    setNumOffers(response.data.num_offers)
                    for (let i = 0; i < response.data.num_offers; i++) {
                        const result = await axios.get(dev.API_ENDPOINT_URL + "/case3")
                        offerListData.push(result.data)
                    }
                }
                else {
                    setNumOffers(0)
                }
                console.log("sss", offerListData)
                offerListData.sort((a, b) => parseFloat(a.QuotaInfo.PremiumWithDiscount) - parseFloat(b.QuotaInfo.PremiumWithDiscount));
                setOfferList(offerListData)
                setLoading(true)
            })
        }
    }, [])


    return (
        <div >

            {!loading ? (
                <div className='circular'>
                    <div>Sizelere {numOffers} teklif sunacağız.</div>
                    <CircularProgress />
                </div>
            ) : null}
            <OfferList ></OfferList>
        </div >

    );
}

export default Case3;
