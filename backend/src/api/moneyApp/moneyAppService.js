const MoneyApp = require('./moneyApp')
const errorHandler = require('../common/errorHandler')

MoneyApp.methods(['get', 'post', 'put', 'delete'])
MoneyApp.updateOptions({ new: true, runValidators: true })
MoneyApp.after('post', errorHandler).after('put', errorHandler)

MoneyApp.route('count', (req, res, next) => {
  MoneyApp.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] })
    } else {
      res.json({value})
    }
  })
})

MoneyApp.route('summary', (req, res, next) => {
  MoneyApp.aggregate({
    $project: { credit: { $sum: '$credits.value' },	debt: {	$sum: '$debts.value' } }
    }, {
      $group: { _id: null, credit:{$sum : '$credit'}, debt: { $sum: '$debt' }}
    }, {
      $project: {_id: 0, credit: 1, debt: 1}
    }, (error, result) => {
        if (error) {
          res.status(500).json({errors: [error]})
        } else {
          res.json(result[0] || { credit: 0, debt: 0 })
        }
      })
    })

module.exports = MoneyApp
