var showfoundationsub = 'false'

exports.foundations_root_get = function (req, res) {
    showfoundationsub = 'true'
    res.render('foundations/index', {
        'title': 'Foundations',
        'section': 'Service Manual',
        'foundations_class': 'active',
        showfoundationsub
    })
}

exports.foundations_accessibility_get = function (req, res) {
    showfoundationsub = 'true'
    res.render('foundations/accessibility', {
        'title': 'Accessibility',
        'section': 'Foundations',
        'foundations_class': 'active',        
        'accessibility_class': 'active',
        showfoundationsub
    })
}

exports.foundations_principles_get = function (req, res) {
    showfoundationsub = 'true'
    res.render('foundations/principles', {
        'title': 'Principles',
        'section': 'Foundations',
        'foundations_class': 'active',        
        'principles_class': 'active',
        showfoundationsub
    })
}

exports.foundations_phases_get = function (req, res) {
    showfoundationsub = 'true'
    res.render('foundations/phases', {
        'title': 'Phases',
        'section': 'Foundations',
        'foundations_class': 'active',        
        'phases_class': 'active',
        showfoundationsub
    })
}

exports.foundations_wow_get = function (req, res) {
    showfoundationsub = 'true'
    res.render('foundations/wow', {
        'title': 'Ways of working',
        'section': 'Foundations',
        'foundations_class': 'active',        
        'wow_class': 'active',
        showfoundationsub
    })
}

exports.foundations_assessments_get = function (req, res) {
    showfoundationsub = 'true'
    res.render('foundations/assessments', {
        'title': 'Assessments',
        'section': 'Foundations',
        'foundations_class': 'active',        
        'assessments_class': 'active',
        showfoundationsub
    })
}

exports.foundations_stage_discovery_get = function (req, res) {
    showfoundationsub = 'true'
    res.render('foundations/stages/discovery', {
        'title': 'Discovery',
        'section': 'Phase',
        'foundations_class': 'active',        
        'phases_class': 'active',
        showfoundationsub
    })
}

exports.foundations_stage_alpha_get = function (req, res) {
    showfoundationsub = 'true'
    res.render('foundations/stages/alpha', {
        'title': 'Alpha',
        'section': 'Phase',
        'foundations_class': 'active',        
        'phases_class': 'active',
        showfoundationsub
    })
}

exports.foundations_stage_beta_get = function (req, res) {
    showfoundationsub = 'true'
    res.render('foundations/stages/beta', {
        'title': 'Beta',
        'section': 'Phase',
        'foundations_class': 'active',        
        'phases_class': 'active',
        showfoundationsub
    })
}

exports.foundations_stage_live_get = function (req, res) {
    showfoundationsub = 'true'
    res.render('foundations/stages/live', {
        'title': 'Live',
        'section': 'Phase',
        'foundations_class': 'active',        
        'phases_class': 'active',
        showfoundationsub
    })
}

exports.foundations_principle_1_get = function (req, res) {
    showfoundationsub = 'true'
    res.render('foundations/principle/1', {
        'title': '1. Design for outcomes',
        'section': 'Principles',
        'foundations_class': 'active',        
        'principles_class': 'active',
        showfoundationsub
    })
}