# Lightweight React Template for KAVIA

This project provides a minimal React template with a clean, modern UI and minimal dependencies.

## Grid System Demo (Ocean Professional)

This demo showcases a responsive, image-based grid with a themed control panel.

- Theme colors are centralized in `src/theme/variables.css` (Ocean Professional).
- The grid is rendered by `src/components/GridGallery.js`, consuming settings from state.
- Image cards are implemented in `src/components/Card.js` with hover elevation and transitions.
- The control panel is in `src/components/GridControls.js` with sliders for:
  - Columns (2–6)
  - Gap (4–24px)
  - Card Size (160–300px)

### Where to find the controls
- In the app, the controls appear on the left side (or top on smaller screens).
- Adjust sliders to see live changes in the grid layout.

### Accessibility
- All images include alt text.
- Controls have ARIA labels and keyboard-accessible inputs.

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
