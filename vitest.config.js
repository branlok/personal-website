import { configDefaults } from "vitest/config";
import { getViteConfig } from "astro/config";
/// <reference types="vitest" />

export default getViteConfig({
    test: {
        exclude: [...configDefaults.exclude, "**tests/***"], //for integration tests
    },
});
