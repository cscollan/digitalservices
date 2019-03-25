var showmaintenancesub = 'false'

exports.applications_root_get = function (req, res) {
    showmaintenancesub = 'false'
    res.render('admin/index', {
        'title': 'Digital Service Processing Hub',
        showmaintenancesub
    })
}


exports.applications_new_get = function (req, res) {
    showmaintenancesub = 'true'
    res.render('admin/maintenance/new-applications', {
        'title': 'New applications',
        'maintenance_new_class': 'active',
        'maintenance_class': 'active',
        showmaintenancesub
    })
}

exports.applications_my_get = function (req, res) {
    showmaintenancesub = 'true'
    res.render('admin/maintenance/my-applications', {
        'title': 'My applications',
        'maintenance_my_class': 'active',
        'maintenance_class': 'active',
        showmaintenancesub
    })
}



exports.applications_app_detail_get = function (req, res) {

    var d = require('../data/appdata.json')
    var appNumber = '325787'
  
    var appData = d.apps.filter(function (value) {
        return value.appNumber === appNumber;
    })[0];
  
  
    showmaintenancesub = 'true'
    res.render('admin/maintenance/app/detail', {
      'title': 'App',
      'app_maintenance_class': '',
      'maintenance_class': 'active',
      showmaintenancesub,
      appData
    })
}

exports.applications_app_confirmid_get = function (req, res) {

    var d = require('../data/appdata.json')
    var appNumber = '325787'
  
    var appData = d.apps.filter(function (value) {
        return value.appNumber === appNumber;
    })[0];
  
  
    showmaintenancesub = 'true'
    res.render('admin/maintenance/app/confirmid', {
      'title': 'App',
      'app_maintenance_class': '',
      'maintenance_class': 'active',
      showmaintenancesub,
      appData
    })
}