import { Message } from "../models/index.js";

const syncTable = async initTestData => {
    if (initTestData) {
        await Message.sync({ force: true});
    } else {
        await Message.sync();
    }
}

const populateCommonData = async () => {
    await Message.findOrCreate({
        where: {'name': 'welcome'},
        defaults: {
            'message': 'Welcome to my application'
        }
    })
}

const populateTestData = async () => {
    await Message.create({'name': 'hello', 'message': 'Hi you grob!'})
}

export const messageInitialiser = async initTestData => {
    await syncTable(initTestData);
    populateCommonData();
    if (initTestData) {
        populateTestData();
    }
}