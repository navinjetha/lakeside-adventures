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
                <PricingDetail> Wake boarding / surfing </PricingDetail>
                <PricingDetail> Water skiing </PricingDetail>
                <PricingDetail> Up to three people</PricingDetail>
                <PricingDetail> Custom and full day rates available</PricingDetail>
              </PricingSlot>
              <PricingSlot  onClick={submit} buttonText='Book Now' title='Jet Ski Rentals' >
                <PricingDetail> Two riders per machine max </PricingDetail>
                <PricingDetail> Our most high speed adventure </PricingDetail>
                <PricingDetail> Life jackets provided </PricingDetail>
                <PricingDetail> Custom and full day rates available</PricingDetail>
              </PricingSlot>
              <PricingSlot  onClick={submit} buttonText='Book Now' title='Paddleboards' >
                <PricingDetail> Great exercise</PricingDetail>
                <PricingDetail> Paddles and life jackets included </PricingDetail>
                <PricingDetail> We provide a brief introduction </PricingDetail>
                <PricingDetail> Custom and full day rates available</PricingDetail>
              </PricingSlot>
              <PricingSlot  onClick={submit} buttonText='Book Now' title='Kayaks' >
                <PricingDetail> One and Two person available</PricingDetail>
                <PricingDetail> Paddles and life jackets included </PricingDetail>
                <PricingDetail> Great for fishing</PricingDetail>
                <PricingDetail> Custom and full day rates available</PricingDetail>
              </PricingSlot>
              <PricingSlot  onClick={submit} buttonText='Book Now' title='Inflatables' >
                <PricingDetail> Bannana Boats</PricingDetail>
                <PricingDetail> Tubing </PricingDetail>
                <PricingDetail> Rafts</PricingDetail>
                <PricingDetail> Custom and full day rates available</PricingDetail>
              </PricingSlot>
              <PricingSlot  onClick={submit} buttonText='Book Now' title='High Adrenaline Sports' >
                <PricingDetail> Water skiing</PricingDetail>
                <PricingDetail> Wake boarding </PricingDetail>
                <PricingDetail> Wake surfing </PricingDetail>
                <PricingDetail> Custom and full day rates available</PricingDetail>
              </PricingSlot>
            </PricingTable>
          </div>
        </div>
      </div>
    );
}

export default MyPricingTable;