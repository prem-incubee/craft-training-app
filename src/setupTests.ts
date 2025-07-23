import * as matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

expect.extend(matchers);

// This setup file is responsible for bringing Jest's DOM matchers into Vite, making testing feel more familiar and easier for users familiar with Jest.
