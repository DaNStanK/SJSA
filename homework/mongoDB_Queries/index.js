require('dotenv').config();
const mongoose = require('mongoose');

const connect = (dataLink) => {
    return new Promise ((success, fail) => {
        mongoose.connect(dataLink, err => {
            if (err) return fail(err);
            console.log('Connected to MongoDB database!');
            return success();
        });
    })
};

const Student = mongoose.model(
    'studenti', 
    {    
        "ime" : String,
        "prezime" : String,
        "prosek" : Number,
        "lokacija" : {
            "grad" : String,
            "drzava" : String,
        } 
    }, 
    'studenti');

(async () => {
    try {
        connect(process.env.DATA_URL)
        let topTen = await Student.find({ 'lokacija.grad': 'Skopje' }).sort({ prosek: -1 }).limit(10);        
        let topThreeMk = await Student.find({ 'lokacija.drzava': 'Makedonija' }, { ime: 1, prezime: 1, grad: 1 }).sort({ prosek: -1 }).limit(3);
        let topFive = await Student.find( { prosek: { "$gt": 7 } }, { ime: 1, prezime: 1, prosek: 1 }).sort({ prosek: -1 }).limit(5);
        let worstFive = await Student.find({ ime: 1, prezime: 1, prosek: 1 }).sort({ prosek: -1 }).limit(5);
        let sortByNameBitola = await Student.find({ 'lokacija.grad': 'Bitola' }, { prezime: 1, prosek: 1 }).sort({ prezime: 1 });
        let fromKumanovo = await Student.find( { 'lokacija.grad': 'Kumanovo' }, { ime: 1 }).sort({ ime: 1 });
        let bestMacedonia = await Student.find({}).sort({ prosek: -1 }).limit(1);

            
        console.log('Топ 5 студенти според просек. Приказ на име, презиме и просек:', topFive);        
        console.log('Најдобри 3 студенти од Македонија. Приказ на име, презиме и град.:', topThreeMk);
        console.log('Најдобри 10 студенти од Скопје:', topTen);
        console.log('Најлоши 3 студенти од Скопје:', worstFive);
        console.log('Приказ на студенти од Битола подредени по презиме:', sortByNameBitola);
        console.log('Приказ на студенти од Куманово подредени по име:', fromKumanovo);
        console.log('Приказ на најдобриот студент од Македонија:', bestMacedonia);
    } catch (err) {
        console.log(err);
    }
})();

// 3. извршете ги следниве барања (queries)

// - Топ 5 студенти според просек. Приказ на име, презиме и просек.
// - Најлоши 3 студенти од Скопје
// - Најдобри 10 студенти од Скопје
// - Најдобри 3 студенти од Македонија. Приказ на име, презиме и град.
// - Најлоши 5 студенти од Битола. Приказ на презиме и просек
// - Приказ на студенти од Битола подредени по презиме
// - Приказ на студенти од Куманово подредени по име
// - Приказ на најдобриот студент од Македонија