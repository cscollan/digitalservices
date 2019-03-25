const express = require('express')
const router = express.Router()

var foundations_Controller = require('../app/controllers/foundationsController.js')
var design_Controller = require('../app/controllers/designController.js')

router.get('/', (req, res) => {
    res.render('index', {
        'title': 'Digital Service Manual',
        'hub_class': 'active'
    })
})


router.get('/foundations/', foundations_Controller.foundations_root_get);
router.get('/foundations/accessibility', foundations_Controller.foundations_accessibility_get);
router.get('/foundations/principles', foundations_Controller.foundations_principles_get);
router.get('/foundations/phases', foundations_Controller.foundations_phases_get);
router.get('/foundations/wow', foundations_Controller.foundations_wow_get);
router.get('/foundations/assessments', foundations_Controller.foundations_assessments_get);

router.get('/foundations/stages/alpha', foundations_Controller.foundations_stage_alpha_get);

router.get('/foundations/principles/1', foundations_Controller.foundations_principle_1_get);

router.get('/design/', design_Controller.design_root_get);
router.get('/design/styles', design_Controller.design_styles_get);

module.exports = router