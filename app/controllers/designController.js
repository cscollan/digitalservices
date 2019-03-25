var showdesignsub = 'false'
var showcomponentssub = 'false'

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

exports.design_components_get = function (req, res) {
    showdesignsub = 'true'    
    showcomponentssub = 'true'
    res.render('design/components', {
        'title': 'Components',
        'section': 'Design',
        'design_class': 'active',        
        'components_class': 'active',
        showdesignsub,
        showcomponentssub
    })
}


exports.design_patterns_get = function (req, res) {
    showdesignsub = 'true'
    res.render('design/patterns', {
        'title': 'Patterns',
        'section': 'Design',
        'design_class': 'active',        
        'patterns_class': 'active',
        showdesignsub
    })
}


exports.design_pages_get = function (req, res) {
    showdesignsub = 'true'
    res.render('design/pages', {
        'title': 'Page templates',
        'section': 'Design',
        'design_class': 'active',        
        'pages_class': 'active',
        showdesignsub
    })
}



exports.design_component_secondary_button_get = function (req, res) {
    showdesignsub = 'true'
    showcomponentssub = 'true'
    res.render('design/component/secondary-button', {
        'title': 'Secondary button',
        'section': 'Components',
        'design_class': 'active',        
        'components_class': 'active',
        'c_secbutton_class': 'active',
        showdesignsub,
        showcomponentssub
    })
}

