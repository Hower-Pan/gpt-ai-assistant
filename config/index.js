import dotenv from 'dotenv';

const { env } = process;

dotenv.config({
  path: env.NODE_ENV ? `.env.${env.NODE_ENV}` : '.env',
});

const config = Object.freeze({
  APP_ENV: env.NODE_ENV || 'production',
  APP_DEBUG: env.APP_DEBUG === 'true' || false,
  APP_URL: env.APP_URL || null,
  APP_PORT: env.APP_PORT || null,
  APP_LANG: env.APP_LANG || 'zh',
  APP_WEBHOOK_PATH: env.APP_WEBHOOK_PATH || '/webhook',
  VERCEL_GIT_REPO_SLUG: env.VERCEL_GIT_REPO_SLUG || null,
  VERCEL_ACCESS_TOKEN: env.VERCEL_ACCESS_TOKEN || /** @deprecated since version 1.1.1 */ env.VERCEL_API_KEY || null,
  VERCEL_DEPLOY_HOOK_URL: env.VERCEL_DEPLOY_HOOK_URL || null,
  OPENAI_API_KEY: env.OPENAI_API_KEY || null,
  OPENAI_COMPLETION_MODEL: env.OPENAI_COMPLETION_MODEL || 'text-davinci-003',
  OPENAI_COMPLETION_TEMPERATURE: Number(env.OPENAI_COMPLETION_TEMPERATURE) || 0.9,
  OPENAI_COMPLETION_MAX_TOKENS: Number(env.OPENAI_COMPLETION_MAX_TOKENS) || 160,
  OPENAI_COMPLETION_FREQUENCY_PENALTY: Number(env.OPENAI_COMPLETION_FREQUENCY_PENALTY) || 0,
  OPENAI_COMPLETION_PRESENCE_PENALTY: Number(env.OPENAI_COMPLETION_PRESENCE_PENALTY) || 0.6,
  OPENAI_IMAGE_GENERATION_SIZE: env.OPENAI_IMAGE_GENERATION_SIZE || '256x256',
  LINE_CHANNEL_ACCESS_TOKEN: env.LINE_CHANNEL_ACCESS_TOKEN || /** @deprecated since version 1.1.1 */ env.LINE_API_KEY || null,
  LINE_CHANNEL_SECRET: env.LINE_CHANNEL_SECRET || /** @deprecated since version 1.1.1 */ env.LINE_API_SECRET || null,
});

export default config;
