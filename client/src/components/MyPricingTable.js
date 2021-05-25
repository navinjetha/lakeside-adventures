import React from "react";
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";

function MyPricingTable() {
  let submit = () => {
    console.log("Scott testing submit");
  };
    return (
      <div className= 'pricingTable'>
        <div className = 'pricingSlot'>
          <div className ='pricingDetail'>
            <PricingTable  highlightColor='#1976D2'>
              <PricingSlot onClick={submit} buttonText='Book Now' title='Lessons' >
                <PricingDetail> $xx / Hour Private </PricingDetail>
                <PricingDetail> $xx /Hour Group </PricingDetail>
                <PricingDetail> up to three people</PricingDetail>
                <PricingDetail> Custom and full day rates available</PricingDetail>
              </PricingSlot>
              <PricingSlot  onClick={submit} buttonText='Book Now' title='Jet Ski Rentals' >
                <PricingDetail> Two riders per machine max </PricingDetail>
                <PricingDetail> $xx 45 mins </PricingDetail>
                <PricingDetail> $xx 90 mins</PricingDetail>
                <PricingDetail> Custom and full day rates available</PricingDetail>
              </PricingSlot>
              <PricingSlot  onClick={submit} buttonText='Book Now' title='Lake Toys' >
                <PricingDetail> Inflatables $xx / hour</PricingDetail>
                <PricingDetail> Kayaks $xx / hour </PricingDetail>
                <PricingDetail> Paddleboards $/xx / hour </PricingDetail>
                <PricingDetail> Custom and full day rates available</PricingDetail>
              </PricingSlot>
            </PricingTable>
          </div>
        </div>
      </div>
    );
}

export default MyPricingTable;