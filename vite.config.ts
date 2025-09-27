import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import fs from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * Recursively scan a folder for index.html files and return
 * an object suitable for Rollup's input
 */
function getHtmlInputs(baseDir: string, subDir = '') {
    const fullDir = resolve(baseDir, subDir);
    const entries: Record<string, string> = {};

    fs.readdirSync(fullDir, { withFileTypes: true }).forEach((entry) => {
        const entryPath = resolve(fullDir, entry.name);

        if (entry.isDirectory()) {
            // Recursively scan subfolders
            Object.assign(entries, getHtmlInputs(baseDir, `${subDir}${entry.name}/`));
        } else if (entry.isFile() && entry.name === 'index.html') {
            // Use the path without "index.html" as the key
            const key = `${subDir.replace(/\/$/, '') || 'main'}`;
            entries[key] = entryPath;
        }
    });

    return entries;
}

// Base HTML pages
const basePages = {
    main: resolve(__dirname, 'index.html'),
    about: resolve(__dirname, 'about/index.html'),
    services: resolve(__dirname, 'services/index.html'),
    careers: resolve(__dirname, 'careers/index.html'),
};

// Nested pages (e.g., careers/assessments/index.html)
const nestedAssessments = getHtmlInputs(resolve(__dirname, 'careers/assessments'));

export default defineConfig({
    base: '/',
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        }
    },
    build: {
        rollupOptions: {
            input: {
                ...basePages,
                ...nestedAssessments,
            },
        },
    },
})