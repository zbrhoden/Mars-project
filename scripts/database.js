const database = {
    colonies: [
        {id: 1, name: "Roanoke", inventory: 1},
        {id: 2, name: "Earfbase", inventory: 8},
        {id: 3, name: "Asteroidopolis", inventory: 2},
        {id: 4, name: "Krypton", inventory: 6},
        {id: 5, name: "Deimos Moon Base", inventory: 3},
    ],
  
    governors: [
        { id: 1, name: "David Davis", active: true, colonyId: 1  },
        { id: 2, name: "Mitch Brown", active: true, colonyId: 1 },
        { id: 3, name: "Andrew Anderson", active: true, colonyId: 2  },
        { id: 4, name: "Audrey Johnson", active: true, colonyId: 2  },
        { id: 5, name: "Michael Smith", active: true, colonyId: 3  },
        { id: 6, name: "Sarah Miller", active: true, colonyId: 4  },
        { id: 7, name: "Isabella Garcia", active: true, colonyId: 5  },
        { id: 8, name: "Hans Weber", active: true, colonyId: 6 },
        { id: 9, name: "Darcy Martin", active: true, colonyId: 7  },
        { id: 10, name: "Mason Stone", active: true, colonyId: 8  },
    ],

    facilities: [
        { id: 1, name: "Callisto", active: true },
        { id: 2, name: "Europa", active: true },
        { id: 3, name: "Triton", active: true },
        { id: 4, name: "Rhea", active: true },
        { id: 5, name: "Mimas", active: true },
        { id: 6, name: "Charon", active: true },
        { id: 7, name: "Ariel", active: true },

    ],
    minerals: [
        {id: 1, type: "Adamantium", price: 9000},
        {id: 2, type: "Vibranium", price: 6000},
        {id: 3, type: "Kryptonite", price:2000},
        {id: 4, type: "Osmium", price: 4000},
        {id: 5, type: "Moon Dust", price: 1000, }
    ],
    
    orderBuilder: {
    }
}

export const getColonies = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
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

export const setColony = (id) => {
    database.orderBuilder.colonyId = id
}
export const setGovernor = (id) => {
    database.orderBuilder.governorId = id
}
export const setFacility = (id) => {
    database.orderBuilder.facilityId = id
}
export const setMineral = (id) => {
    database.orderBuilder.mineralId = id 
}