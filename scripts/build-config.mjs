import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. .env 파일 파싱 (로컬 환경 지원)
let kakaoKey = process.env.KAKAO_JS_KEY || '';

const envPath = path.join(rootDir, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  const match = envContent.match(/^KAKAO_JS_KEY=(.*)$/m);
  if (match && match[1]) {
    kakaoKey = match[1].trim();
  }
}

// 2. js/env-config.js 동적 생성
const configContent = `/**
 * Dynamically Generated Environment Config
 * Generated at build time from environment variables.
 * DO NOT COMMIT THIS FILE TO GIT.
 */
window.ENV_CONFIG = {
  KAKAO_JS_KEY: "${kakaoKey}"
};
`;

const configPath = path.join(rootDir, 'js', 'env-config.js');
fs.writeFileSync(configPath, configContent, 'utf-8');

console.log(`✅ [Build Config] Successfully generated js/env-config.js (Key loaded: ${kakaoKey ? 'YES' : 'NO'})`);
