const express = require('express')


module.exports = server => {
	//URL BASE

	const router = express.Router()

	server.use('/api', router)

	//Rotas de Ciclo de Pagamento

	const MoneyApp = require('../api/moneyApp/moneyAppService')
	MoneyApp.register(router, '/billingCycles')


}