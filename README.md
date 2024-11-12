# Hexnode Kiosk Solution Page Replica

This project is a replica of the [Hexnode Kiosk Solution](https://www.hexnode.com/solutions/hexnode-kiosk/) webpage, created as part of an interview task. The focus is on accurately replicating the layout, responsiveness, and interactive features of the original page using **React.js** with **TypeScript** and **Material-UI**.

## Project Structure

The project consists of the following key elements:

- **Custom Components**: I created custom components for tabs, accordion, and animations to closely match the original design.
- **Carousel**: Used `react-slick` to implement carousel functionality, customized to match the page requirements.
- **Theme Customization**: The Material-UI theme was used to define colors, breakpoints, and typography, creating a unified design system for the app.

## Tech Stack

- **React.js**: Used for efficient UI management and reusable component-based architecture.
- **TypeScript**: Provides type safety and helps catch errors during development.
- **Material-UI**: Used primarily for responsive breakpoints and theme setup to maintain consistent design but avoided Material-UI's standard components in favor of custom-built ones to achieve a precise layout.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/arjuntsaji/hexnode-assignment.git
   cd hexnode-assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

To start the development server:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features

- **Responsive Design**: The page is fully responsive, adjusting seamlessly across desktop, tablet, and mobile screens.
- **Custom Interactivity**: Custom-built tabs, accordion, and animations for a more authentic user experience.
- **Accessibility**: Implemented ARIA roles and ensured keyboard navigability for enhanced accessibility.

## Challenges and Approach

1. **Responsive Layout**: Material-UI’s breakpoints were leveraged to establish a responsive structure.
2. **Custom Components**: Tabs, accordions, and other UI elements were crafted from scratch to ensure a match with the Hexnode design.
3. **Performance Optimization**: optimized components and used minimal dependencies to keep the app lightweight and performant.

## Bonus Features

- Additional animations to enhance the user experience.
- Detailed theme configuration for consistent color, typography, and layout control.
