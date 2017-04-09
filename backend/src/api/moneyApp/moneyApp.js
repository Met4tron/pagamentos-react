const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    min: 0,
    required: [true, 'Informe o Valor']}
})

const debtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    min: 0,
    required: [true, 'Informe o Valor']
  },
  status: {
    type: String,
    required: false,
    uppercase: true,
    enum: ['PAGO', 'PENDENTE', 'AGENDADO']
  }
})

const moneyAppSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  month: {
	 	type: Number,
	 	min: 1,
	  	max: 12,
	   	required: true
  },
  year: {
    type: String,
    min: 1970,
    max: 2020,
    required: true
  },
  credits: [creditSchema],
  debts: [debtSchema]
})

module.exports = restful.model('MoneyApp', moneyAppSchema)
