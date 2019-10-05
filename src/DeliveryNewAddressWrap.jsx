import React, { Component } from "react";
import { Formik, Field, withFormik, ErrorMessage } from "formik";
import * as yup from "yup";

class DeliveryNewAddress extends Component {
  render() {
    const {
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      touched,
      errors
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
                    id="delivery_customerTitle"
                    name="delivery_customerTitle"
                    required
                    value={values.delivery_customerTitle}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class={
                      touched.delivery_customerTitle &&
                      errors.delivery_customerTitle
                        ? "error"
                        : ""
                    }
                  >
                    <option value="">稱謂*</option>
                    <option value="ms">女士</option>
                    <option value="mr">先生</option>
                    <option value="mrs">太太</option>
                    <option value="miss">小姐</option>
                  </select>
                  <ErrorMessage name="delivery_customerTitle" />
                  {/* <span className="text-error">必須選取一個項目</span> */}
                </p>
              </div>
              <div className="widerInput_wrap">
                <p>
                  <input
                    type="text"
                    id="delivery_customerName"
                    name="delivery_customerName"
                    placeholder="姓名*"
                    required
                    value={values.delivery_customerName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class={
                      touched.delivery_customerName &&
                      errors.delivery_customerName
                        ? "error"
                        : ""
                    }
                  />
                  {/* {touched.delivery_customerName && errors.delivery_customerName
                    ? errors.delivery_customerName
                    : ""} */}
                  <ErrorMessage name="delivery_customerName" />
                  {/* <span className="text-error">必須填寫</span> */}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 clearfix">
              <div className="narrowerInput_wrap">
                <p>
                  <select
                    id="delivery_phoneCode"
                    name="delivery_phoneCode"
                    className="narrowerInput"
                    required
                    value={values.delivery_phoneCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="+852">+852</option>
                    <option value="+86">+86</option>
                  </select>
                  {/* <span className="text-error">必須選取一個項目</span> */}
                </p>
              </div>
              <div className="widerInput_wrap">
                <p>
                  <input
                    type="text"
                    id="delivery_phoneNo"
                    name="delivery_phoneNo"
                    placeholder="電話號碼*"
                    required
                    value={values.delivery_phoneNo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="delivery_phoneNo" />
                </p>
              </div>
            </div>
          </div>
          <p>
            <input
              type="text"
              id="delivery_addressLine1"
              name="delivery_addressLine1"
              placeholder="地址1*"
              required
              value={values.delivery_addressLine1}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name="delivery_addressLine1" />
            {/* <span className="text-error">必須填寫</span> */}
          </p>
          <p>
            <input
              type="text"
              id="delivery_addressLine2"
              name="delivery_addressLine2"
              placeholder="地址2"
              required
              value={values.delivery_addressLine2}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </p>
          <div className="row no-gutters with-gaps">
            <div className="col-12 col-md-6">
              <p>
                <select
                  id="delivery_area"
                  name="delivery_area"
                  className="narrowerInput"
                  required
                  value={values.delivery_area}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="HK">香港</option>
                  <option value="CN">中國大陸</option>
                  <option value="AU">澳洲</option>
                  <option value="AT">奧地利</option>
                  <option value="BE">比利時</option>
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
const deliveryCustomerTitle = yup.string().required(requiredSelect);
const deliveryCustomerNameValidation = yup
  .string()
  .min(3, customerNameNotLongEnough)
  .max(255)
  .required(required);

const deliveryPhoneNoValidation = yup
  .string()
  .matches(phoneRegExp, invalidPhoneNo)
  .required(required);

const deliveryAddressLine1Validation = yup
  .string()
  .min(8, addressNoNotLongEnough)
  .max(255)
  .required(required);

const validationSchema = yup.object().shape({
  delivery_customerTitle: deliveryCustomerTitle,
  delivery_customerName: deliveryCustomerNameValidation,
  delivery_phoneNo: deliveryPhoneNoValidation,
  delivery_addressLine1: deliveryAddressLine1Validation
});
export const DeliveryNewAddressWrap = withFormik({
  validationSchema,
  //validateOnChange: false,//可以關掉change時驗證
  //validateOnBlur: false,//可以關掉blur時驗證
  mapPropsToValues: () => ({
    delivery_customerTitle: "",
    delivery_customerName: "",
    delivery_phoneCode: "+852",
    delivery_phoneNo: "",
    delivery_addressLine1: "",
    delivery_addressLine2: "",
    delivery_area: "HK"
  }),
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(DeliveryNewAddress);
