import { Facilities } from "./Facilities.js"
import { Colonies } from "./Colonies.js"
import { Minerals } from "./Minerals.js"
import { Orders } from "./Orders.js"
import { Governors } from "./Governors.js"

export const WillYouBeMine = () => {
    return `
        <h1>WillYouBeMine</h1>

        <article class="choices">
            <section class="Facilities">
                <h2>Active Mining Facilities</h2>
            
            </section>
            <section class="Minerals Chosen">
                <h2>Chosen Minerals</h2>

            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="Colony Inventory">
            <h2>Available Resources for Colony</h2>
            
        </article>
    `
}