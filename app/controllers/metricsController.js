var showmetricssub = 'false'

exports.metrics_root_get = function (req, res) {
    showmetricssub = 'true'
    res.render('metrics/index', {
        'title': 'Metrics',
        'section': 'Metrics',
        'metrics_class': 'active',  
        showmetricssub
    })
}

exports.metrics_analytics_get = function (req, res) {
    showmetricssub = 'true'
    res.render('metrics/analytics', {
        'title': 'Analytics',
        'section': 'Metrics',
        'metrics_class': 'active',  
        'analytics_class': 'active',  
        showmetricssub
    })
}

exports.metrics_performance_get = function (req, res) {
    showmetricssub = 'true'
    res.render('metrics/performance', {
        'title': 'Performance',
        'section': 'Metrics',
        'metrics_class': 'active',  
        'performance_class': 'active', 
        showmetricssub
    })
}

exports.metrics_user_get = function (req, res) {
    showmetricssub = 'true'
    res.render('metrics/usersatisfaction', {
        'title': 'User satisfaction',
        'section': 'Metrics',
        'metrics_class': 'active',  
        'user_class': 'active', 
        showmetricssub
    })
}