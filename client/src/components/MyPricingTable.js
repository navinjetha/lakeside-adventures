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
              <PricingSlot onClick={submit}  title='Fishing Excursions' >
                <PricingDetail> Up to six participants </PricingDetail>
                <PricingDetail> Salmon, Trout, Walleye </PricingDetail>
                <PricingDetail> Bait, equipment, and licenses</PricingDetail>
                <PricingDetail> Custom and full day rates </PricingDetail>
              </PricingSlot>
              <PricingSlot  onClick={submit} title='Guided Hikes' >
                <PricingDetail> Up to twelve participants </PricingDetail>
                <PricingDetail> Visit a stunning waterfall </PricingDetail>
                <PricingDetail> Light snaks provided </PricingDetail>
                <PricingDetail> Custom and full day rates available</PricingDetail>
              </PricingSlot>
              <PricingSlot  onClick={submit}  title='Dinner Cruises' >
                <PricingDetail> Up to twenty guests</PricingDetail>
                <PricingDetail> Enjoy a beautiful sunset </PricingDetail>
                <PricingDetail> Menu options to fit your budget </PricingDetail>
                <PricingDetail> Custom and full day rates available</PricingDetail>
              </PricingSlot>
            </PricingTable>
          </div>
        </div>
      </div>
    );
}

export default MyPricingTable;