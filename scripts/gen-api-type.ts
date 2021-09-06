import { exec } from 'child_process';
import * as dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const apiDocsUrl = process.env.API_DOCS_URL || 'http://localhost:5000/api/doc-json';

exec(`openapi-typescript ${apiDocsUrl} --output src/types/api.ts`, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`Generate api type success: ${stdout}`);
});
