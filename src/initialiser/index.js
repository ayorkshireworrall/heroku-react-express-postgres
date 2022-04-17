import { messageInitialiser } from "./message.js";

export default initTestData => {
    console.log('begin initialisation:')
    console.log('use test data: ', initTestData)
    messageInitialiser(initTestData);
    console.log('finish initialisation:')
}