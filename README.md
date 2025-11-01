
# Kenya Security Analysis Map

This project is an interactive web application that visualizes AI-generated security insights for urban hotspots across Kenya. It uses the Google Gemini API to fetch real-time data on the most dangerous towns, plots them on an interactive Leaflet map, and provides detailed statistics and historical trends for each location.

![Kenya Security Analysis Screenshot](https://storage.googleapis.com/aistudio-ux-team-public/KENYA-SECURITY-ANALYSIS-SCREENSHOT.png)

## Features

-   **Interactive Map**: A fully interactive map of Kenya, built with Leaflet and React-Leaflet.
-   **AI-Generated Data**: All security hotspot data is generated on-the-fly by the Google Gemini API, providing detailed and nuanced insights.
-   **Nationwide Coverage**: The application identifies and displays a key security hotspot for each of Kenya's 47 counties.
-   **Detailed Information Panel**: Click on a town to view its severity score, a descriptive summary, key crime statistics, and historical security trends.
-   **Resizable & Collapsible Layout**: The info panel can be resized by dragging or completely collapsed for a full-screen map view, similar to the VS Code editor/terminal interface.
-   **Search Functionality**: A search bar allows users to quickly filter and find specific towns in the list.
-   **County Borders**: Subtle county border overlays provide geographical context without cluttering the map.
-   **Responsive Design**: The layout is optimized for both desktop and mobile devices.

## Tech Stack

-   **Frontend**: React, Vite, TypeScript
-   **Styling**: Tailwind CSS
-   **Mapping**: Leaflet, React-Leaflet
-   **AI**: Google Gemini API (`@google/genai`)
-   **GeoJSON Data**: D3 for handling geographical data shapes.

---

## Setup and Installation in Visual Studio Code

Follow these instructions to get the project up and running on your local machine for development.

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 18.x or higher recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   [Visual Studio Code](https://code.visualstudio.com/)
-   A **Google Gemini API Key**. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Step-by-Step Guide

#### 1. Clone the Repository

First, clone the project from GitHub to your local machine.

```bash
git clone https://github.com/your-username/kenya-security-map.git
```

*(Replace `your-username/kenya-security-map.git` with the actual repository URL)*

#### 2. Open in Visual Studio Code

Navigate into the newly created project directory and open it with VS Code.

```bash
cd kenya-security-map
code .
```

#### 3. Install Dependencies

Open the integrated terminal in VS Code (`Ctrl + \`` or `View > Terminal`) and install the required npm packages.

```bash
npm install
```

This will download and install all the necessary libraries defined in `package.json`.

#### 4. Configure Environment Variables

The application requires your Google Gemini API key to fetch data. You need to create an environment file to store it securely.

-   In the root of the project directory, create a new file named `.env`.
-   Open the `.env` file and add the following line, replacing `YOUR_GEMINI_API_KEY_HERE` with your actual key:

```env
API_KEY=YOUR_GEMINI_API_KEY_HERE
```

**Important**: The application is configured to use `process.env.API_KEY` to access this variable. Do not change the variable name.

#### 5. Run the Development Server

Once the dependencies are installed and the API key is configured, you can start the Vite development server.

In the VS Code terminal, run:

```bash
npm run dev
```

This command will start the application. You will see an output in the terminal indicating the local server address, which is typically:

```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

You can now open your web browser and navigate to `http://localhost:5173` to see the application running live. Any changes you make to the source code will automatically reload the page.
