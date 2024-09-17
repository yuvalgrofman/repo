const Platoon = require('../models/platoon');

const createPlatoon = async (name, sectionIds, commander) => { 
    await Platoon.create({
        name,
        sectionIds,
        commander,
        company,
    });

}

const getPlatoon = async (platoonId) => {
    const platoon = await Platoon.findOne({ platoonId });
    
    if (platoon.length === 0) {
        throw new Error('Platoon not found');
    }

    return platoon;
}


module.exports = { createPlatoon, getPlatoon };