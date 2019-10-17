import React, { Component } from "react";
import "./TempOrderErrorPopup.css";
import { lockBody, unlockBody } from "./bodyLockStatus";

class TempOrderErrorPopup extends Component {
  componentDidMount() {
    lockBody();
  }
  componentWillUnmount() {
    unlockBody();
  }
  render() {
    const { closeTempOrderFailByOutOfStock, text, myBagData } = this.props;
    return (
      <div className="error-popup-background">
        <div className="error-popup-content">
          <div className="error-popup-head">
            <h2>{(text && text) || ""}</h2>
            <div
              className="close-button"
              onClick={closeTempOrderFailByOutOfStock.bind(this)}
            />
          </div>
          <div className="error-popup-body">
            {myBagData && (
              <ul className="outOfStock_list">
                {myBagData.cartItems.map((data, i) => (
                  <li key={i}>
                    {data.information.prodname1}
                    {data.information.prodname2}
                  </li>
                ))}
              </ul>
            )}
            <p className="error-body-text">在此期間您可以：</p>
            <div className="error-popup-grid">
              <div className="grid-left">
                <button
                  className="keep-shopping-a blockBtn grey"
                  onClick={closeTempOrderFailByOutOfStock.bind(this)}
                >
                  繼續購物
                </button>
              </div>
              <div className="grid-right">
                如果您需要更多協助，請聯繫我們的客戶服務代表:
                <br />
                電話熱線: +8862-2789-6809
                <br />
                電郵查詢:
                <a href="mailto:cs@chowsangsang.com" className="mail-to">
                  cs@chowsangsang.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TempOrderErrorPopup;
