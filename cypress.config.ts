export const cypressConfig = {
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/integration/**/*.spec.ts", // Pattern for test files
    setupNodeEvents: (on, config) => {
      // Define your setupNodeEvents logic here
      // For example:
      on("before:browser:launch", (browser, launchOptions) => {
        // Perform actions before the browser is launched
      });
    },
  },
};
export default cypressConfig;
