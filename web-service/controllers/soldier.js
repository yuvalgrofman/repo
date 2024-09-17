const soldierService = require('../services/soldier');

// armyId = personal ID number
// ID = israeli ID
// soldierId = object ID

const getSoldier = async (req, res) => {
    const { armyId }  = req.body;

    try {
        const soldier = await soldierService.getSoldier(armyId);
        return res.send(soldier);
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

const createSoldier = async (req, res) => {
    const { name, img, section, platoon, company, medicalProfile, citizinshipID, armyID, address }
        = req.body;

    try {
        await soldierService.createSoldier(name, img, section, platoon, company,
            medicalProfile, citizinshipID, armyID, address);
        return res.send('Soldier created');
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}