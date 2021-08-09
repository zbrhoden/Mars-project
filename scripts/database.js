const database = {
    colonies: [
        { id: 1, name: "Roanoke", inventory: 1 },
        { id: 2, name: "Earfbase", inventory: 8 },
        { id: 3, name: "Asteroidopolis", inventory: 2 },
        { id: 4, name: "Krypton", inventory: 6 },
        { id: 5, name: "Deimos Moon Base", inventory: 3 },
    ],

    governors: [
        { id: 1, name: "David Davis", active: false, colonyId: 1 },
        { id: 2, name: "Mitch Brown", active: true, colonyId: 1 },
        { id: 3, name: "Andrew Anderson", active: true, colonyId: 2 },
        { id: 4, name: "Audrey Johnson", active: false, colonyId: 2 },
        { id: 5, name: "Michael Smith", active: true, colonyId: 3 },
        { id: 6, name: "Sarah Miller", active: false, colonyId: 4 },
        { id: 7, name: "Isabella Garcia", active: true, colonyId: 5 },
        { id: 8, name: "Hans Weber", active: false, colonyId: 6 },
        { id: 9, name: "Darcy Martin", active: true, colonyId: 7 },
        { id: 10, name: "Mason Stone", active: true, colonyId: 8 },
    ],

    facilities: [
        { id: 1, name: "Callisto", active: true },
        { id: 2, name: "Europa", active: true },
        { id: 3, name: "Triton", active: true },
        { id: 4, name: "Rhea", active: false }
    ],
    minerals: [
        { id: 1, type: "Adamantium", price: 900, quantity: 35 },
        { id: 2, type: "Vibranium", price: 600, quantity: 47 },
        { id: 3, type: "Kryptonite", price: 200, quantity: 33 },
        { id: 4, type: "Osmium", price: 400, quantity: 75 },
        { id: 5, type: "Moon Dust", price: 1000, quantity: 12 }
    ],

    orderBuilder: {
        chosenGovernor: 0,
        selectedFacility: 0,
    },

    chosenMinerals: {

    },

    facilityMinerals: [
      
        {id: 1, mineralId: 1, facilityId: 1, quantityAvailable: 6, colonyId: 1},
        {id: 2, mineralId: 5, facilityId: 2, quantityAvailable: 5, colonyId: 2},
        {id: 3, mineralId: 2, facilityId: 1, quantityAvailable: 8, colonyId: 3},
        {id: 4, mineralId: 2, facilityId: 3, quantityAvailable: 10, colonyId: 4},
        {id: 5, mineralId: 4, facilityId: 2, quantityAvailable: 7, colonyId: 5},
        {id: 6, mineralId: 1, facilityId: 3, quantityAvailable: 7, colonyId: 1},
        {id: 7, mineralId: 3, facilityId: 4, quantityAvailable: 8, colonyId: 2},
        {id: 8, mineralId: 3, facilityId: 1, quantityAvailable: 6, colonyId: 3},
        {id: 9, mineralId: 3, facilityId: 3, quantityAvailable: 5, colonyId: 4},
        {id: 10, mineralId: 4, facilityId: 4, quantityAvailable: 4, colonyId: 5},
        {id: 11, mineralId: 1, facilityId: 4, quantityAvailable: 7, colonyId: 6},
    ]
}

export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}
export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}
export const getFacilities = () => {
    return database.facilities.map(facility => ({ ...facility }))
}
export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}

export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(facilityMineral => ({ ...facilityMineral }))
}

export const getChosenMinerals = () => {
    return database.chosenMinerals.map(chosenMineral => ({ ...chosenMineral }))
}

export const getChosenGovernors = () => {
    return database.chosenGovernor.map(chosenGovernor => ({ ...chosenGovernor }))
}

export const getOrderBuilder = () => {
    return database.orderBuilder
}

export const setColony = (id) => {
    database.orderBuilder.colonyId = id
}
export const setGovernor = (id) => {
    database.orderBuilder.chosenGovernor = id
}
export const setFacility = (id) => {
    database.orderBuilder.facilityId = id
}
export const setMineral = (id) => {
    database.orderBuilder.mineralId = id
}


export const addChosenMinerals = () => {
    const newOrder = { ...database.orderBuilder }
    const lastIndex = database.chosenMinerals.length - 1
    if (lastIndex === -1) {
        newOrder.id = 1
    } else {
        newOrder.id = database.chosenMinerals[lastIndex].id + 1
    }
    database.chosenMinerals.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}