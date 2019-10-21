import React, { Component } from "react";
import { Formik, Field, withFormik, ErrorMessage } from "formik";
import * as yup from "yup";

class DeliveryDetails extends Component {
  // handleMyChange(e) {
  //   console.log("My");
  // }
  render() {
    const {
      values,
      handleChange,
      setFieldValue,
      handleDeliveryAddrChange,
      handleBlur,
      handleSubmit,
      touched,
      errors,
      clickNewAddrBtn,
      clickEditAddrBtn,
      clickDeleteAddrBtn,
      addressBook
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
                  {addressBook.map((address, index) => {
                    const customerName = address.rcptFirstNam,
                      phoneCode = address.rcptMobCtryCde,
                      phoneNo = address.rcptMobNbr,
                      address1 = address.address1,
                      address2 = address.address2,
                      postCode = address.postCode,
                      city = address.city,
                      province = address.province,
                      country = address.country,
                      id = address.id;
                    return (
                      <li>
                        <input
                          type="radio"
                          id={id}
                          name="delivery_address_radioGrp"
                          checked={values.delivery_address_radioGrp === id}
                          value={id}
                          onChange={e => {
                            handleChange(e); //Formik 原生的handleChange
                            handleDeliveryAddrChange(values, e); //客製化的handleChange
                          }}
                          onBlur={handleBlur}
                        />
                        <label for={id}>
                          {customerName},{phoneCode}
                          {phoneNo}
                          <br />
                          {address1}
                          {address2}, {postCode}
                          <br />
                          {city}, {province}, {country}
                        </label>
                        <span
                          onClick={() =>
                            clickEditAddrBtn(address, setFieldValue)
                          }
                        >
                          修改
                        </span>
                        <span onClick={() => clickDeleteAddrBtn(values, id)}>
                          刪除
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <ErrorMessage name="delivery_address_radioGrp" />
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
                <ErrorMessage name="delivery_mode_radioGrp" />
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
                <ErrorMessage name="delivery_taxPay_radioGrp" />
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
//錯誤訊息
const requiredSelect = <span className="text-error">必須選取一個項目</span>;
//驗證規則
const deliveryAddressRadioGrp = yup
  .string()
  .required(requiredSelect)
  .nullable(); //yup驗證允許此欄位null
const deliveryModeRadioGrp = yup.string().required(requiredSelect);
const deliveryTaxPayRadioGrp = yup.string().required(requiredSelect);

const validationSchema = yup.object().shape({
  delivery_address_radioGrp: deliveryAddressRadioGrp,
  delivery_mode_radioGrp: deliveryModeRadioGrp,
  delivery_taxPay_radioGrp: deliveryTaxPayRadioGrp
});
export const DeliveryDetailsWrap = withFormik({
  validationSchema,
  enableReinitialize: true, //當props更新時, 是否要reset form
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
