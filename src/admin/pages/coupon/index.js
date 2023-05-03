import React, { useState } from "react";
import Leftbar from "../../components/leftbar";
import Cards from "../../components/cards";
import AddPopupScreen from "../../components/popup/coupon/add";
import CouponCard from "../../components/cards/CouponCard";

const Index = () => {
  const [addPopup, setAddPop] = useState(false);
  return (
    <div>
    <AddPopupScreen setAddPop={setAddPop} addPopup={addPopup} />
      <div className="main_layout">
        <Leftbar index={2} />
        <div className="right_bar">
          <Cards />
          <div className="coupon_heading">
              <div>Coupon or Vouchers</div>
              <div><button onClick={() => setAddPop(true)}>Add</button></div>
          </div>
            <div className="coupon_content">
                <div className="centering">
                <div className="coupon_cards">
                    <CouponCard expired={true} />
                    <CouponCard />
                    <CouponCard />
                    <CouponCard expired={true} />
                    <CouponCard expired={true} />
                    <CouponCard />
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
