var showprototypesub = 'false'

exports.prototyping_root_get = function (req, res) {
    showprototypesub = 'true'
    res.render('prototyping/index', {
        'title': 'Prototyping',
        'section': 'Prototyping',
        'prototype_class': 'active',  
        showprototypesub
    })
}