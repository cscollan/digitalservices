const express = require('express')
const router = express.Router()

var foundations_Controller = require('../app/controllers/foundationsController.js')
var design_Controller = require('../app/controllers/designController.js')
var content_Controller = require('../app/controllers/contentController.js')
var library_Controller = require('../app/controllers/libraryController.js')
var metrics_Controller = require('../app/controllers/metricsController.js')
var prototyping_Controller = require('../app/controllers/prototypingController.js')
var services_Controller = require('../app/controllers/servicesController.js')

router.get('/', (req, res) => {
    res.render('index', {
        'title': 'Digital Service Manual',
        'hub_class': 'active'
    })
})

router.get('/services/', services_Controller.services_root_get);
router.get('/services/service/detail/:id', services_Controller.service_detail_get);


router.get('/foundations/', foundations_Controller.foundations_root_get);
router.get('/foundations/accessibility', foundations_Controller.foundations_accessibility_get);
router.get('/foundations/principles', foundations_Controller.foundations_principles_get);
router.get('/foundations/phases', foundations_Controller.foundations_phases_get);
router.get('/foundations/wow', foundations_Controller.foundations_wow_get);
router.get('/foundations/assessments', foundations_Controller.foundations_assessments_get);
router.get('/foundations/stages/discovery', foundations_Controller.foundations_stage_discovery_get);
router.get('/foundations/stages/alpha', foundations_Controller.foundations_stage_alpha_get);
router.get('/foundations/stages/beta', foundations_Controller.foundations_stage_beta_get);
router.get('/foundations/stages/live', foundations_Controller.foundations_stage_live_get);
router.get('/foundations/principles/1', foundations_Controller.foundations_principle_1_get);

router.get('/design/', design_Controller.design_root_get);
router.get('/design/styles', design_Controller.design_styles_get);
router.get('/design/components', design_Controller.design_components_get);
router.get('/design/patterns', design_Controller.design_patterns_get);
router.get('/design/pages', design_Controller.design_pages_get);

router.get('/design/component/secondary-button', design_Controller.design_component_secondary_button_get);

router.get('/design/pattern/complete', design_Controller.design_pattern_complete_get);
router.get('/design/pattern/header', design_Controller.design_pattern_header_get);
router.get('/design/pattern/footer', design_Controller.design_pattern_footer_get);
router.get('/design/pattern/passwords', design_Controller.design_pattern_passwords_get);

router.get('/content/', content_Controller.content_root_get);
router.get('/content/language', content_Controller.content_language_get);
router.get('/content/lexicon', content_Controller.content_lexicon_get);
router.get('/content/writing', content_Controller.content_writing_get);

router.get('/metrics/', metrics_Controller.metrics_root_get);
router.get('/metrics/analytics', metrics_Controller.metrics_analytics_get);
router.get('/metrics/performance', metrics_Controller.metrics_performance_get);
router.get('/metrics/usersatisfaction', metrics_Controller.metrics_user_get);

router.get('/library/', library_Controller.library_root_get);


router.get('/prototyping/', prototyping_Controller.prototyping_root_get);

module.exports = router