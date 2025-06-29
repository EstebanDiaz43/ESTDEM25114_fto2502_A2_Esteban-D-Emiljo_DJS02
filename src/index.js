import { createModal } from "./components/createModal.js";
import header from "./header.js";

class PodcastPreview extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
    
    <div id="podcastGrid" class="grid">
    <div class="card" data-id="10716">
    <img src="https://content.production.cdn.art19.com/images/cc/e5/0a/08/cce50a08-d77d-490e-8c68-17725541b0ca/9dcebd4019d57b9551799479fa226e2a79026be5e2743c7aef19eac53532a29d66954da6e8dbdda8219b059a59c0abe6dba6049892b10dfb2f25ed90d6fe8d9a.jpeg" alt="Something Was Wrong cover">
    <h3>Something Was Wrong</h3>
    <p>14 seasons</p>
    <div class="tags"><span class="tag">Personal Growth</span><span class="tag">Investigative Journalism</span></div>
    <p class="updated-text">Updated November 3, 2022</p>
  </div>
  <div class="card" data-id="5675">
  <img src="https://content.production.cdn.art19.com/images/5a/4f/d4/19/5a4fd419-11af-4270-b31c-2c7ed2f563a5/bc913bc926be23d04c9a4d29a829269a753be3d2612dad91f7e92ba4618fefc5c8802af29a1d32b3261eb03f83613e2535e3c574469b0cb510c32cd8d94cfaa1.png" alt="This Is Actually Happening cover">
  <h3>This Is Actually Happening</h3>
  <p>12 seasons</p>
  <div class="tags"><span class="tag">Investigative Journalism</span></div>
  <p class="updated-text">Updated November 1, 2022</p>
  </div>
  <div class="card" data-id="5279">
  <img src="https://content.production.cdn.art19.com/images/a4/8f/53/79/a48f5379-a90e-4197-915c-c0645e0d9336/8d9e6ebc4d65a9575fa626318e426fcf8be7f98ea0c1b7b103de2b32def46ded57537627d80b36f55edf7c9a8ad639bd9816f68c79b56845203a0b5bc4a63a55.png" alt="American History Tellers cover">
  <h3>American History Tellers</h3>
  <p>51 seasons</p>
  <div class="tags"><span class="tag">History</span></div>
  <p class="updated-text">Updated November 2, 2022</p>
  </div>
  <div class="card" data-id="10539">
  <img src="https://content.production.cdn.art19.com/images/19/f4/f9/af/19f4f9af-4a18-44e1-a622-726f43feb79d/539a50f79529628dbde7aa116778056619b802bfa0247cb739db907085e0b595a5521efc78faa831ebddc235d69beb27e1e36fd51f825bc888f0c11cccbd9cd8.png" alt="Scamfluencers cover">
  <h3>Scamfluencers</h3>
  <p>3 seasons</p>
  <div class="tags"><span class="tag">Investigative Journalism</span></div>
  <p class="updated-text">Updated October 24, 2022</p>
  </div>
  <div class="card" data-id="9177">
  <img src="https://content.production.cdn.art19.com/images/68/4e/03/af/684e03af-29c5-4a35-b84a-d929f114caee/4f60eec3fabd62251d0cdbd1af11b79c43fb1465dbc5ec3371328fbddadee597e9f115c31b079e20266648ee07a80a93c01cecdb81ab3545d872393997594ef3.png" alt="Killer Psyche cover">
  <h3>Killer Psyche</h3>
  <p>2 seasons</p>
  <div class="tags"><span class="tag">History</span><span class="tag">Investigative Journalism</span></div>
  <p class="updated-text">Updated November 1, 2022</p>
  </div>
  <div class="card" data-id="6807">
  <img src="https://content.production.cdn.art19.com/images/c3/55/d2/da/c355d2da-f845-47df-a4e6-22b70a5082bb/c290fe89d3a699dd5c316f5f4cfe2ca942183cef5d6ac4fc2d7d6df296690c9e7183f79422dcb0b37af7c7e7e59de0e36cddd3b01500bf066a470614c9a0af6d.png" alt="Even the Rich cover">
  <h3>Even the Rich</h3>
  <p>33 seasons</p>
  <div class="tags"><span class="tag">Comedy</span><span class="tag">Entertainment</span><span class="tag">History</span></div>
  <p class="updated-text">Updated November 1, 2022</p>
  </div>
  <div class="card" data-id="8514">
  <img src="https://content.production.cdn.art19.com/images/a3/77/2c/e4/a3772ce4-34f7-431d-bf80-968f555b7003/6c099d5ec76b40bb54e72a75c1dcbc44c5c13a764114fb5183fe7eecd201619fca37cf3dd029c2fc320fb1a3cfab716d94297cbe7bb32ead208b779579015683.png" alt="Against The Odds cover">
  <h3>Against The Odds</h3>
  <p>19 seasons</p>
  <div class="tags"><span class="tag">History</span></div>
  <p class="updated-text">Updated November 1, 2022</p>
  </div>
  <div class="card" data-id="10276">
  <img src="https://content.production.cdn.art19.com/images/f5/16/e0/99/f516e099-4c64-4737-9fdb-55f4d45a4003/6d14be58e0a54d21128c239dd933e0f3c36ca00f85ea7294cbea91a2b214d2384361c2a765842eef66e8583b2c21302c8fd2b1eb4d32e3805481292d758f20aa.jpeg" alt="This Podcast Will Kill You cover">
  <h3>This Podcast Will Kill You</h3>
  <p>5 seasons</p>
  <div class="tags"><span class="tag">Personal Growth</span></div>
  <p class="updated-text">Updated October 25, 2022</p>
  </div>
  <div class="card" data-id="8860">
  <img src="https://content.production.cdn.art19.com/images/be/95/68/28/be956828-0cc8-4d16-986f-b81142129bd3/bdc59126cd5707aee511313b8e246428364b62229f8243c4deab8f5721425478c9fcb4224cd0369f8001cde85dbe4c3106d31ed914e414a18208a29386e88317.png" alt="British Scandal cover">
  <h3>British Scandal</h3>
  <p>19 seasons</p>
  <div class="tags"><span class="tag">Investigative Journalism</span></div>
  <p class="updated-text">Updated November 2, 2022</p>
  </div>
  <div class="card" data-id="5629">
  <img src="https://content.production.cdn.art19.com/images/a4/b7/0e/b1/a4b70eb1-2ba8-4320-ba12-20939a9c0d13/486bc367f5acec6dbb5fdfb84d510a1ed304ba20c6e9c97da0448a62e6d4a1c5b91fb30198437f6d4db969db5f171aa63648545002fbaa81d9fcc422a2e05b9e.jpeg" alt="Tides of History cover">
  <h3>Tides of History</h3>
  <p>5 seasons</p>
  <div class="tags"><span class="tag">History</span></div>
  <p class="updated-text">Updated November 3, 2022</p>
  </div>
    
    
    </div>
    `;
  }
}

customElements.define("mypodcast-preview", PodcastPreview);

/**
 * Initializes the podcast application.
 *
 * @principle SRP - Only responsible for application startup logic like event binding and rendering initial grid.
 */
function init() {
  document.body.insertAdjacentHTML("afterbegin", header());
  document
    .getElementById("closeModal")
    .addEventListener("click", createModal.close);
  const grid = createGrid();
  grid.render(podcasts);
}

init();
