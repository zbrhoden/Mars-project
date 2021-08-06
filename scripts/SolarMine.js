import { Facilities } from "./Facilities.js"
import { Colonies } from "./ColonyMinerals.js"
import { facilityMinerals } from "./FacilityMinerals.js"
//import { Orders } from "./Orders.js"
import { Governors } from "./Governors.js"
import { getGovernors } from "./database.js"

const governors = getGovernors()
const minerals = facilityMinerals()

export const willYouBeMine = () => {
    return `
        <h1>WillYouBeMine</h1>


        <article class="choices">
            <section class="options Facilities">
                <h2 class="facilityHead">Active Mining Facilities</h2>
                    ${Facilities()}
            </section>
            <div id="calisto" class="individual__facility">
            </div>
            <div id="europa" class="individual__facility">
            </div>
            <div id="triton" class="individual__facility">
            </div>
            <div id="rhea" class="individual__facility">
            </div>
        </article>

        <article>
            <button id="orderButton">Purchase Materials</button>
        </article>
        
        <article class="Colony Selected">
            <h2>Selected Colony</h2>
            ${Colonies()}
        </article>

    

        <article class="Governor Selection">
            <section>
            <h2>Governor Selection</h2>
            ${Governors()}
            </section>
            <section>
            Colony Resources go here.
            </section>
        </article>
    `
}