class CustomCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
                background-color: var(--card-bg-color, #ffffff);
                border: 1px solid var(--card-border-color, #ccc);
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                max-width: 300px;
                padding: 16px;
                margin: 16px;
                box-sizing: border-box;
                font-family: Arial, sans-serif;
            }
            ::slotted([slot="header"]) {
                font-size: 1.2em;
                font-weight: bold;
                margin-bottom: 8px;
                color: var(--header-color, #333);
            }
            ::slotted([slot="content"]) {
                font-size: 1em;
                margin-bottom: 8px;
                color: var(--content-color, #666);
            }
            ::slotted([slot="footer"]) {
                font-size: 0.9em;
                color: var(--footer-color, #999);
                text-align: right;
            }
        `;
        const container = document.createElement('div');
        container.innerHTML = `
            <slot name="header"></slot>
            <slot name="content"></slot>
            <slot name="footer"></slot>
        `;
        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}

customElements.define('custom-card', CustomCard);
