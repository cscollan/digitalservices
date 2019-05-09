var showservicessub = 'false'

exports.services_root_get = function (req, res) {
    showservicessub = 'true'

    var data = require('../data/services.json')

    res.render('services/index', {
        'title': 'Services',
        'section': 'Services',
        'services_class': 'active',  
        showservicessub,
        data
    })
}

exports.service_detail_get = function (req, res) {
    showservicessub = 'true'

    //Get id
    console.log(req.params.id)

    var data = require('../data/services.json')

    var serviceData = data.services.filter(function (value) {
        return value.stub === req.params.id;
    })[0];

    res.render('services/service/detail', {
        'title': 'Services',
        'section': 'Services',
        'services_class': 'active',  
        showservicessub,
        serviceData
    })
}

