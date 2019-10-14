import React, { Component } from "react";
import { Formik, Field, withFormik, ErrorMessage } from "formik";
import * as yup from "yup";

class DeliveryDetails extends Component {
  render() {
    const {
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      touched,
      errors,
      clickNewAddrBtn,
      clickEditAddrBtn
    } = this.props;
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
                      checked={
                        values.delivery_address_radioGrp === "delivery_address1"
                      }
                      value={"delivery_address1"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label for="delivery_address1">
                      LANCE,15629124552
                      <br />
                      LA, 90001
                      <br />
                      Los Angeles, CA, 美國
                    </label>
                    <span onClick={clickEditAddrBtn}>修改</span>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="delivery_address2"
                      name="delivery_address_radioGrp"
                      checked={
                        values.delivery_address_radioGrp === "delivery_address2"
                      }
                      value={"delivery_address2"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label for="delivery_address2">
                      楊過,123456789
                      <br />
                      LA, 90001
                      <br />
                      Los Angeles, 安徽, 中國
                    </label>
                    <span onClick={clickEditAddrBtn}>修改</span>
                  </li>
                </ul>
              </div>
              <div>
                <a
                  id="newAdd_btn"
                  className="content-link"
                  href="javascript:void(0)"
                  onClick={clickNewAddrBtn}
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
                      value={"delivery_mode1"}
                      checked={
                        values.delivery_mode_radioGrp === "delivery_mode1"
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                      value="delivery_taxPay1"
                      checked={
                        values.delivery_taxPay_radioGrp === "delivery_taxPay1"
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label for="delivery_taxPay1">收件者支付</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="delivery_taxPay2"
                      checked={
                        values.delivery_taxPay_radioGrp === "delivery_taxPay2"
                      }
                      name="delivery_taxPay_radioGrp"
                      value="delivery_taxPay2"
                      onChange={handleChange}
                      onBlur={handleBlur}
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
              onClick={handleSubmit}
            >
              下一步
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export const DeliveryDetailsWrap = withFormik({
  mapPropsToValues: props => ({
    delivery_address_radioGrp: props.delivery_address_radioGrp,
    delivery_mode_radioGrp: props.delivery_mode_radioGrp,
    delivery_taxPay_radioGrp: props.delivery_taxPay_radioGrp
  }),
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(DeliveryDetails);
