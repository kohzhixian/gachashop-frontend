import React from 'react'
import address from "../data/Address_Data"


function OrderInfoPage(){

    const [firstAddress] = address;
    const {addressDetails: {blk, street_name}, postalcode} = firstAddress;
    console.log(blk)
    console.log(street_name)
    console.log(postalcode)

    
    return(
        <div>
            <h1>wewfef</h1>
        </div>
    )
}

export default OrderInfoPage;