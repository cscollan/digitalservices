var showprototypesub = 'false'

exports.library_root_get = function (req, res) {
    showprototypesub = 'true'
    res.render('prototyping/index', {
        'title': 'Prototype',
        'section': 'Prototype',
        'prototype_class': 'active',  
        showprototypesub
    })
}