# ANSWERS.md

## 1. How to run

Requirements:
- Node.js
- npm

Run:
    npm install
    npm run dev

Then open the local URL shown in the terminal.

Deployed URL:
[(https://tip-calculatorxx.netlify.app/)]


---

## 2. Stack & design choices

I used React with Vite because it’s quick to set up and works well. Since the calculator updates instantly as the user types, React state made the logic clean and easy to manage.

### Design decision 1 — always-visible summary

I kept the results section visible the whole time so users can immediately see how changing the bill, tip, or people count affects the total. It makes the app feel more responsive and removes the need for a calculate button.

### Design decision 2 — mobile button layout

On smaller screens, the tip buttons stack vertically instead of staying in one row. This gives the buttons more space and makes them easier to tap on mobile devices.


---

## 3. Responsive & accessibility

### Responsive behavior

On mobile:
- it uses most of the screen width
- spacing is tighter to fit smaller screens

On larger screens:
- it stays centered with a fixed max width
- spacing and text are slightly larger for readability

### Accessibility 

I didn’t fully connect validation messages to inputs with `aria-describedby`. With more time, I’d improve the form accessibility further for screen reader users.


---

## 4. AI usage

I used ChatGPT to:
- plan the component structure
- think through validation edge cases
- improve responsive styling
- review accessibility ideas
- help draft documentation and code.

One thing I changed from the AI suggestions:
The original mobile layout kept the tip buttons in a single row. I changed them to stack vertically on smaller screens because it felt less cramped and easier to tap.


---

## 5. Honest gap

One thing I’d improve with more time is adding more design and make it user interactive.