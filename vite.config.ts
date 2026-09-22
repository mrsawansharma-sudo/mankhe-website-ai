import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

function xmlContentTypePlugin() {
  return {
    name: 'xml-content-type-plugin',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        if (req.url === '/sitemap.xml' || req.url?.startsWith('/sitemap.xml?')) {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
        } else if (req.url === '/sitemap.xsl' || req.url?.startsWith('/sitemap.xsl?')) {
          res.setHeader('Content-Type', 'text/xsl; charset=utf-8');
        }
        next();
      });
    },
    configurePreviewServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        if (req.url === '/sitemap.xml' || req.url?.startsWith('/sitemap.xml?')) {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
        } else if (req.url === '/sitemap.xsl' || req.url?.startsWith('/sitemap.xsl?')) {
          res.setHeader('Content-Type', 'text/xsl; charset=utf-8');
        }
        next();
      });
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), xmlContentTypePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});