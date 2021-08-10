import { getColonies, setColony, getMinerals, getOrderBuilder, getFacilityMinerals, getColonyMinerals } from "./database.js"
import { Orders } from "./ChosenOptions.js"

const minerals = getMinerals()
const colonies = getColonies()
const facMinerals = getFacilityMinerals()
const colMinerals = getColonyMinerals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "minerals") {
            setMinerals(parseInt(event.target.value))
        }
    }
)



export const ColonyMinerals = () => {
    const order = getOrderBuilder()
    const listItemsArray = colMinerals.map(colMineral => {

    let html = "<ul>"

        
    
    const listItems = minerals.map(minerals => {
        if (minerals.id === facMinerals.id) {
        return `<li>
            <name="minerals" value="${colMinerals.id}" /> ${minerals.type}
            </li>
            `}
            else {
                if (minerals.id !== facMinerals.id)
            
            return `<li>
            <name="minerals" disabled="true" value="${colMinerals.id}" /> ${minerals.type}
            </li>
            `}
    }
    )
html += listItems.join("")
html += "</ul>"

}
)}