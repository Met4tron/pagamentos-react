import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { bindActionCreators } from "redux";

import { init } from "./billingCycleActions";
import CreditList from "../billingCycle/creditList";
import labelAndInput from "../common/form/labelAndInput";

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props;
    return (
      <form action="" role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={labelAndInput}
            label="Nome"
            placeholder="Informe o Nome"
            cols="12 4"
            type="text"
            readOnly={readOnly}
          />
          <Field
            name="month"
            component={labelAndInput}
            label="Mês"
            placeholder="Informe o Mês"
            cols="12 4"
            type="number"
            readOnly={readOnly}
          />
          <Field
            name="year"
            component={labelAndInput}
            label="Ano"
            placeholder="Informe o Ano"
            cols="12 4"
            type="number"
            readOnly={readOnly}
          />
          <CreditList cols="12 6" />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          &nbsp;
          <button
            type="button"
            className={`btn btn-default`}
            onClick={this.props.init}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}

BillingCycleForm = reduxForm({
  form: "billingCycleForm",
  destroyOnUnmount: false
})(BillingCycleForm);

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycleForm);
