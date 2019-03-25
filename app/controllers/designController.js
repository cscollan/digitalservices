var showdesignsub = 'false'

exports.design_root_get = function (req, res) {
    showdesignsub = 'true'
    res.render('design/index', {
        'title': 'Design guidelines',
        'section': 'Design',
        'design_class': 'active',  
        showdesignsub
    })
}


exports.design_styles_get = function (req, res) {
    showdesignsub = 'true'
    res.render('design/styles', {
        'title': 'Styles',
        'section': 'Design',
        'design_class': 'active',        
        'styles_class': 'active',
        showdesignsub
    })
}
