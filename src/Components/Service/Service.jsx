import React from "react";
import box from "../../assets/images/box.png";
import truck from "../../assets/images/truck.png";
import order from "../../assets/images/order.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServiceStyles";

function service() {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={box} />
            <ServicesH2>Safety Package</ServicesH2>
            <ServicesP>
            All the safety services are available
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={truck} />
            <ServicesH2>Free Delivery</ServicesH2>
            <ServicesP>
            100% Free Delivery 
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={order} />
            <ServicesH2>Made By Order</ServicesH2>
            <ServicesP>
            All the products are fresh due to made by order
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
}

export default service;
