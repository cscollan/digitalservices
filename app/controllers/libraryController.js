var showlibrarysub = 'false'

exports.library_root_get = function (req, res) {
    showlibrarysub = 'true'
    res.render('library/index', {
        'title': 'User research and insight library',
        'section': 'Library',
        'research_class': 'active',  
        showlibrarysub
    })
}