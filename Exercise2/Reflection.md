1. Describe the main concepts you applied.

In this project, I created a reusable card component as a Web Component using HTML, CSS, and JavaScript. I used a custom HTML element (<custom-card>) to create a component with header, content, and footer sections, which can be slotted with custom content. The CSS included custom properties and encapsulated styling with the shadow DOM. The JavaScript portion involved defining a new CustomCard class to control the structure and styling of each card, utilizing the Shadow DOM to encapsulate the component’s style.

2. Discuss new skills or knowledge acquired.

This project helped me learn about Web Components and the Shadow DOM. I learned how to define custom elements with JavaScript, apply styles directly within the shadow root, and manage styling with :host and ::slotted selectors. Additionally, I discovered how to use CSS variables within Web Components to provide customization options for card colors and other styles.

3. Discuss what you learned.

Through this project, I gained a better understanding of encapsulation in Web Components, which ensures styles do not leak outside the component’s shadow DOM. I learned how to use slots to allow content insertion at specified areas (header, content, footer), making the component highly flexible and reusable. This approach also highlighted the benefits of separating concerns, where the styling and structure remain isolated within the component.

4. Mention any challenges you faced and how you overcame them.

One of the main challenges was ensuring that the styles applied to each slot (header, content, footer) were isolated within the component, which I achieved using the shadow DOM. Initially, I found it challenging to customize the appearance of each slot, but I resolved this by using ::slotted() pseudo-elements in the CSS. Another minor challenge was implementing CSS variables to allow customization; after some research, I applied variables such as --card-bg-color and --header-color to make styling flexible.