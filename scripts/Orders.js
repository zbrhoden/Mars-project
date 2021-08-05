import { getMinerals } from "./database.js";


const minerals = getMinerals()

const buildChosenMinerals = (order) => {


    const chosenMinerals = minerals.find(
        (mineral) => {
            return mineral.id === order.mineralId
        }
    )
    const availableMinerals = minerals.find(
        (mineral) => {
            return mineral.quantity === order.mineralId
        }
    )

    const totalMinerals = chosenMinerals.quantity - availableMinerals.quantity

    const mineralString = totalMinerals

return `<li> You have chosen ${mineral.name}</li>`

}

export const Orders = () => {

    const orders = getMinerals()

    let html = "<ul>"

    const listItems = orders.map(buildChosenMinerals)

    html += listItems.join("")
    html += "</ul>"

    return html
}