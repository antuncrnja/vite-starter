import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { createHtmlPlugin } from 'vite-plugin-html';
import path from 'path';
import fs from 'fs';
import compression from 'vite-plugin-compression';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

function getHtmlFiles(dir) {
  const files = fs.readdirSync(dir);
  const htmlFiles = {};
  files.forEach((file) => {
    const filePath = path.resolve(dir, file);
    if (fs.statSync(filePath).isFile() && file.endsWith('.html')) {
      const fileName = path.basename(filePath, '.html'); 
      htmlFiles[fileName] = filePath; 
    }
  });
  return htmlFiles;
}

const htmlInputs = getHtmlFiles(__dirname);

const header = fs.readFileSync(path.resolve(__dirname, 'partials/header.html'), 'utf-8');
const footer = fs.readFileSync(path.resolve(__dirname, 'partials/footer.html'), 'utf-8');

export default defineConfig({
  base: './',
  plugins: [
    handlebars({
      context: {
        header,
        footer,
      },
      partialDirectory: path.resolve(__dirname, 'partials'),
    }),
    compression(),
    createHtmlPlugin({
      minify: true, 
    }),
  ],
  css: {
    postcss: './postcss.config.cjs', 
  },
  build: {
    cssCodeSplit: true, 
    sourcemap: true,
    rollupOptions: {
      input: htmlInputs, 
    },
  },
});
