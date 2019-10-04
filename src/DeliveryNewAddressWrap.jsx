import React, { Component } from "react";
import { Formik, Field, withFormik } from "formik";

class DeliveryNewAddress extends Component {
  render() {
    const { values, handleChange, handleBlur, handleSubmit } = this.props;
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
                  >
                    <option value="0">稱謂*</option>
                    <option value="ms">女士</option>
                    <option value="mr">先生</option>
                    <option value="mrs">太太</option>
                    <option value="miss">小姐</option>
                  </select>
                  <span className="text-error">必須選取一個項目</span>
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
                  />
                  <span className="text-error">必須填寫</span>
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
                  <span className="text-error">必須選取一個項目</span>
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
                  <span className="text-error">必須填寫</span>
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
            <span className="text-error">必須填寫</span>
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

export const DeliveryNewAddressWrap = withFormik({
  mapPropsToValues: () => ({
    delivery_customerTitle: 0,
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
