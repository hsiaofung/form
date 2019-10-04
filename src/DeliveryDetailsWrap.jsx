import React, { Component } from "react";

export default class DeliveryDetailsWrap extends Component {
  render() {
    return (
      <div className="delivery_details_wrap">
        <div className="row no-gutters with-gaps">
          <div className="col-12 col-md-6">
            <div className="part">
              <div className="subtitle_withLine_wrap">
                <p className="subtitle shorter subtitle_sect">送貨地址</p>
                <hr />
              </div>
              <div className="radioBtns_wrap vertical">
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="delivery_address1"
                      name="delivery_address_radioGrp"
                      checked
                    />
                    <label for="delivery_address1">
                      LANCE,15629124552
                      <br />
                      LA, 90001
                      <br />
                      Los Angeles, CA, 美國
                    </label>
                  </li>
                </ul>
              </div>
              <div>
                <a
                  id="newAdd_btn"
                  className="content-link"
                  href="javascript:void(0)"
                >
                  ＋新增地址
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="part">
              <div className="subtitle_withLine_wrap">
                <p className="subtitle shorter subtitle_sect">運送模式</p>
                <hr />
              </div>
              <div className="radioBtns_wrap vertical">
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="delivery_mode1"
                      name="delivery_mode_radioGrp"
                      checked
                    />
                    <label for="delivery_mode1">優先送递 (3-5天)</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="part">
              <div className="subtitle_withLine_wrap">
                <p className="subtitle shorter subtitle_sect">
                  稅項及關稅（如適用）
                </p>
                <hr />
              </div>
              <div className="radioBtns_wrap vertical">
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="delivery_taxPay1"
                      name="delivery_taxPay_radioGrp"
                      checked
                    />
                    <label for="delivery_taxPay1">收件者支付</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="delivery_taxPay2"
                      name="delivery_taxPay_radioGrp"
                    />
                    <label for="delivery_taxPay2">寄件者預繳</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons_wrap">
          <div>
            <a
              className="blockBtn grey goSectBtn"
              data-gosect=".chectout_pdts"
              href="javascript:void(0)"
            >
              返回
            </a>
            <a
              className="blockBtn goSectBtn"
              data-gosect=".chectout_payment"
              href="javascript:void(0)"
            >
              下一步
            </a>
          </div>
        </div>
      </div>
    );
  }
}
