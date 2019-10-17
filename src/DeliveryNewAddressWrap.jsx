import React, { Component } from "react";
import { Formik, Field, withFormik, ErrorMessage } from "formik";
import * as yup from "yup";

const HOST_URL = "http://localhost:3001";

class DeliveryNewAddress extends Component {
  state = {
    countryList: []
  };
  async fetchCountryList() {
    const res = await fetch(`${HOST_URL}/shopping/v1/deliveries/regions/info`);
    const data = await res.json();

    await this.setState({
      ...this.state,
      countryList: data
    });
  }
  componentDidMount() {
    this.fetchCountryList();
  }
  render() {
    const {
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      touched,
      errors,
      handleCountryChange
    } = this.props;
    return (
      <div className="delivery_newAddress_wrap">
        <div className="subtitle subtitle_sect">送貨地址</div>
        <div className="delivery_addressForm_wrap">
          <div className="row no-gutters with-gaps">
            <div className="col-12 col-md-6 clearfix">
              <div className="narrowerInput_wrap">
                <p>
                  <select
                    id="rcptSl"
                    name="rcptSl"
                    required
                    value={values.rcptSl}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class={touched.rcptSl && errors.rcptSl ? "error" : ""}
                  >
                    <option value="">稱謂*</option>
                    <option value="03">女士</option>
                    <option value="01">先生</option>
                    <option value="04">太太</option>
                    <option value="02">小姐</option>
                  </select>
                  <ErrorMessage name="rcptSl" />
                </p>
              </div>
              <div className="widerInput_wrap">
                <p>
                  <input
                    type="text"
                    id="rcptFirstNam"
                    name="rcptFirstNam"
                    placeholder="姓名*"
                    required
                    value={values.rcptFirstNam}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class={
                      touched.rcptFirstNam && errors.rcptFirstNam ? "error" : ""
                    }
                  />
                  {/* {touched.rcptFirstNam && errors.rcptFirstNam
                    ? errors.rcptFirstNam
                    : ""} */}
                  <ErrorMessage name="rcptFirstNam" />
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 clearfix">
              <div className="narrowerInput_wrap">
                <p>
                  <select
                    id="rcptMobCtryCde"
                    name="rcptMobCtryCde"
                    className="narrowerInput"
                    required
                    value={values.rcptMobCtryCde}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="852">+852</option>
                    <option value="86">+86</option>
                    <option value="886">+886</option>
                  </select>
                </p>
              </div>
              <div className="widerInput_wrap">
                <p>
                  <input
                    type="text"
                    id="rcptMobNbr"
                    name="rcptMobNbr"
                    placeholder="電話號碼*"
                    required
                    value={values.rcptMobNbr}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="rcptMobNbr" />
                </p>
              </div>
            </div>
          </div>
          <p>
            <input
              type="text"
              id="address1"
              name="address1"
              placeholder="地址1*"
              required
              value={values.address1}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name="address1" />
          </p>
          <p>
            <input
              type="text"
              id="address2"
              name="address2"
              placeholder="地址2"
              required
              value={values.address2}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </p>
          <div className="row no-gutters with-gaps">
            <div className="col-12 col-md-6">
              <p>
                <select
                  id="countryCode"
                  name="countryCode"
                  className="narrowerInput"
                  required
                  value={values.countryCode}
                  onChange={e => {
                    handleChange(e);
                    handleCountryChange(e);
                  }}
                  onBlur={handleBlur}
                >
                  {this.state.countryList &&
                    this.state.countryList.map((country, index) => (
                      <option value={country.code}>{country.name}</option>
                    ))}
                </select>
              </p>
            </div>
          </div>
        </div>
        <div className="buttons_wrap">
          <div>
            <a
              id="cancelSaveAdd_btn"
              className="blockBtn grey"
              href="javascript:void(0)"
            >
              取消
            </a>
            <a
              id="saveAdd_btn"
              className="blockBtn"
              href="javascript:void(0)"
              onClick={handleSubmit}
            >
              儲存地址
            </a>
          </div>
        </div>
      </div>
    );
  }
}
//正則式
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

//錯誤訊息
const customerNameNotLongEnough = (
  <span className="text-error">必須填寫大於3個字</span>
);
const invalidPhoneNo = <span className="text-error">電話號碼無效</span>;
const addressNoNotLongEnough = (
  <span className="text-error">必須填寫大於8個字</span>
);
const required = <span className="text-error">必須填寫</span>;
const requiredSelect = <span className="text-error">必須選取一個項目</span>;

//驗證規則
const rcptSlValidation = yup.string().required(requiredSelect);
const rcptFirstNamValidation = yup
  .string()
  .min(3, customerNameNotLongEnough)
  .max(255)
  .required(required);

const rcptMobNbrValidation = yup
  .string()
  .matches(phoneRegExp, invalidPhoneNo)
  .required(required);

const address1Validation = yup
  .string()
  .min(8, addressNoNotLongEnough)
  .max(255)
  .required(required);

const validationSchema = yup.object().shape({
  rcptSl: rcptSlValidation,
  rcptFirstNam: rcptFirstNamValidation,
  rcptMobNbr: rcptMobNbrValidation,
  address1: address1Validation
});
export const DeliveryNewAddressWrap = withFormik({
  validationSchema,
  enableReinitialize: true, //當props更新時, 是否要reset form
  //validateOnChange: false,//可以關掉change時驗證
  //validateOnBlur: false,//可以關掉blur時驗證
  mapPropsToValues: props => ({
    rcptSl: props.rcptSl,
    rcptFirstNam: props.rcptFirstNam,
    rcptMobCtryCde: props.rcptMobCtryCde,
    rcptMobNbr: props.rcptMobNbr,
    address1: props.address1,
    address2: props.address2,
    countryCode: props.countryCode
  }),
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values, props.addressId);
    if (errors) {
      setErrors(errors);
    }
  }
})(DeliveryNewAddress);
