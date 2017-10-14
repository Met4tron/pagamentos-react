import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {bindActionCreators} from 'redux';
import labelAndInput from '../common/form/labelAndInput';

class BillingCycleForm extends Component {
				render() {
								const {handleSubmit} = this.props;
								return (
												<form action="" role="form" onSubmit={handleSubmit}>
																<div className="box-body">
																				<Field
																								name="name"
																								component={labelAndInput}
																								label='Nome'
																								placeholder='Informe o Nome'
																								cols='12 4'
																								type='text'/>
																				<Field
																								name="month"
																								component={labelAndInput}
																								label='Mês'
																								placeholder='Informe o Mês'
																								cols='12 4'
																								type='number'/>
																				<Field
																								name="year"
																								component={labelAndInput}
																								label='Ano'
																								placeholder='Informe o Ano'
																								cols='12 4'
																								type='number'/>
																</div>
																<div className="box-footer">
																				<button type="submit" className="btn btn-primary">
																								Submit
																				</button>
																</div>
												</form>
								);
				}
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm);
