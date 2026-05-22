# Local Setup Instructions for FORGE Production

To run this project on your local machine using VS Code, follow these steps:

## 1. Prerequisites
- **Node.js**: Download and install from [nodejs.org](https://nodejs.org/) (Recommended: LTS version).
- **VS Code**: Visual Studio Code editor.

## 2. Installation
Once you have downloaded the project files and opened the folder in VS Code, open the terminal (**Ctrl + `** or **Terminal > New Terminal**) and run the following command to install all necessary libraries (React, Tailwind, Motion, Lucide, etc.):

```bash
npm install
```

## 3. Running the App
After the installation is complete, start the local development server by running:

```bash
npm run dev
```

The terminal will provide a local URL (usually `http://localhost:3000` or `http://localhost:5173`). Open this in your browser to see your app.

## 4. Building for Production
If you want to create a production-ready version of your app:

```bash
npm run build
```

## 5. Fixing the CSS Error in VS Code
If you see an error like **"Cannot find module ./index.css"** in VS Code:
1. Ensure the file `src/vite-env.d.ts` exists in your project.
2. It should contain exactly this line:
   ```typescript
   /// <reference types="vite/client" />
   ```
3. Restart VS Code or the TypeScript server (**Ctrl+Shift+P** > "Restart TS Server").

---

## 6. Customization Tips

### Swapping the Logo
1.  **Image Logo**: Upload your logo file to the `public/` folder (e.g., `public/logo.png`).
2.  In `src/App.tsx`, find the `BRAND_CONFIG` object and set `logoImageUrl: "/logo.png"`.
3.  **Text Logo**: To change the text, simply edit `name` and `tagline` in `BRAND_CONFIG`.

### Changing the Favicon
1.  Create your favicon (standard size is 32x32).
2.  Replace the existing `public/favicon.svg` with your own file (keep the name same or update `index.html`).

### Adding Real Graphics Images
1.  Store your project images in a folder like `src/assets/graphics/`.
2.  In `src/App.tsx`, find `ALL_GRAPHICS` and update the `imageUrl` property for each item.
    *   Example: `imageUrl: "/src/assets/graphics/my-project.jpg"`

### Updating Portfolio
-   **Videos**: Edit `FEATURED_VIDEOS` with your Google Drive File IDs or direct video URLs.
-   **Client Logos**: Edit the `CLIENTS_DATA` array inside `src/App.tsx`.
    *   To use an image: add an image to `public/` and set `logoImageUrl: "/your-logo.png"`.
    *   To use text: keep `logoImageUrl: null` and set `logoText`.
