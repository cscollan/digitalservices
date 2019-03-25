var showcontentsub = 'false'

exports.content_root_get = function (req, res) {
    showcontentsub = 'true'
    res.render('content/index', {
        'title': 'Content guidelines',
        'section': 'Content',
        'content_class': 'active',  
        showcontentsub
    })
}

exports.content_language_get = function (req, res) {
    showcontentsub = 'true'
    res.render('content/language', {
        'title': 'Language',
        'section': 'Content',
        'language_class': 'active',  
        'content_class': 'active', 
        showcontentsub
    })
}

exports.content_lexicon_get = function (req, res) {
    showcontentsub = 'true'
    res.render('content/lexicon', {
        'title': 'Lexicon',
        'section': 'Content',
        'lexicon_class': 'active',   
        'content_class': 'active',
        showcontentsub
    })
}

exports.content_voice_get = function (req, res) {
    showcontentsub = 'true'
    res.render('content/voice', {
        'title': 'Voice',
        'section': 'Content',
        'voice_class': 'active',  
        'content_class': 'active',
        showcontentsub
    })
}