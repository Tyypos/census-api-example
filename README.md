# Census API Example

A modern React application that visualizes U.S. Census data by state, including population, median income, and median age, using animated charts and smooth count-up displays.

---

## Live Demo

[Check it out here](https://tyypos.github.io/census-api-example)

---

## Features

-   **State Selector Dropdown**: Choose any U.S. state to load its census data.
-   **Animated Count-Up Numbers**: Smoothly increment numbers for population, median income, and median age.
-   **Population Over Time Chart**: Visualizes population changes from 2015 to 2019.
-   **Responsive Design**: Works well on desktop and mobile.
-   **Centralized Store**: Uses Zustand for state management.

---

## Tech Stack

-   React 19
-   Vite
-   Zustand
-   Recharts
-   Tailwind CSS
-   ESLint

---

## Getting Started

### Prerequisites

-   Node.js (v16+ recommended)
-   npm or yarn

### Installation

1. Clone the repo:

```bash
git clone https://github.com/Tyypos/census-api-example.git
cd census-api-example
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser at http://localhost:5173

---

## Usage

-   Select a state from the dropdown to fetch and display census data.
-   View animated counts for population, median income, and median age.
-   See population changes over time in the line chart.

---

## Notes

-   Data is limited to 2015-2019 due to API availability.

---

## Acknowledgments

-   Data sourced from [U.S. Census Bureau API](https://api.census.gov)
-   Built with React, Vite, Zustand, Recharts, and Tailwind CSS.
