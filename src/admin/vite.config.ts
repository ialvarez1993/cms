import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      cors: {
        origin: ['http://localhost:1337','http:192.168.21.58:1337','http:192.168.21.58:3000'],
        // credentials: true,
      },
    },
  });
};
