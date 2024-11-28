const { Firestore } = require('@google-cloud/firestore');
     
async function storeData(id, data) {
    const firestore = new Firestore();
    
    const predictCollection = firestore.collection('prediction');
    return predictCollection.doc(id).set(data);
}

async function getData() {
    const firestore = new Firestore();
    
    const predictCollection = firestore.collection('prediction');
    const snapshot = await predictCollection.get();
    
    return snapshot.docs;
}

module.exports = { storeData, getData };