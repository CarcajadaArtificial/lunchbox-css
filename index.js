import https from 'https';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const downloadFile = (url, dest) => {
  const directoryPath = path.dirname(dest);
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  const file = fs.createWriteStream(dest);

  https
    .get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`File downloaded to ${dest}`);
        });
      } else {
        console.error(`Error downloading file. Status code: ${response.statusCode}`);
        file.close(() => {
          fs.unlink(dest, () => {});
        });
      }
    })
    .on('error', (err) => {
      console.error('Error downloading file:', err);
      fs.unlink(dest, () => {});
    });
};

const pathjoin = (...paths) => path.join(__dirname, ...paths);

const downloadFiles = (...files) =>
  files.forEach((file) => {
    downloadFile(file.url, file.path);
  });

downloadFiles(
  {
    url: 'https://cdn.jsdelivr.net/gh/CarcajadaArtificial/sass-door/sassdoor.scss',
    path: pathjoin('lib', 'garlicss', 'lib', 'sassdoor.scss'),
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/CarcajadaArtificial/garlicss/src/basics.scss',
    path: pathjoin('lib', 'garlicss', 'basics.scss'),
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/CarcajadaArtificial/garlicss/src/color.scss',
    path: pathjoin('lib', 'garlicss', 'color.scss'),
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/CarcajadaArtificial/garlicss/src/grid.scss',
    path: pathjoin('lib', 'garlicss', 'grid.scss'),
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/CarcajadaArtificial/garlicss/src/media-queries.scss',
    path: pathjoin('lib', 'garlicss', 'media-queries.scss'),
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/CarcajadaArtificial/garlicss/src/size.scss',
    path: pathjoin('lib', 'garlicss', 'size.scss'),
  }
);
