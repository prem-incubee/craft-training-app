/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { open: true },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
});

// Added type definitions at the beginning of the file
// globals: true means global variables will be available during tests like 'describe, it, expect' so we don't have to import it in every test file
// Specified 'jsdom' as the test environment, simulating a browser environment
// Defined 'setupFiles' to execute necessary code before running the tests.
