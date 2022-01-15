const { Router } = require('express');
const router = Router();

router.get('/players', require('../controllers/players/read'));
router.get('/players/:id', require('../controllers/players/readOne'));
router.post('/create', require('../controllers/players/create'));
router.put('/update/:id', require('../controllers/players/update'));
router.delete('/delete/:id', require('../controllers/players/delete'));

module.exports = router;