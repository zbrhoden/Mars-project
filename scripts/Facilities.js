import { getFacilities, setFacility, getGovernors, setGovernor, getOrderBuilder } from "./database.js"
import { Governors } from "./Governors.js"

const orderBuilder = getOrderBuilder()
const governor = getGovernors()

const facilities = getFacilities()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "facility") {
            setChosenMiningFacility(parseInt(event.target.value))
        }
    }
)





export const Facilities = () => {
    let html = "<article id= 'facilities'>"

    const listItemsArray = facilities.map(facility => {

        ` <button $ {orderBuilder.chosenGovernor > 0 ? "" : "disabled"}
            class="facility__selector"
            id="facility--${facility.id}">
            ${facility.name}
        </button> `


    }

    )

    html += listItemsArray.join("")
    html += "</article>"
    return html
}