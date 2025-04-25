const config = {
  server: {
    port: Number(process.env.PORT || "3000"),
    host: process.env.HOST || "0.0.0.0",
  },
  db: {
    favorites: {
      path: process.cwd() + "/src/infrastructure/database/favorites.json",
    },
  },
  cache: {
    ttl: 300, // 5 minutos en segundos
    privacy: "public",
  },
};

export default config;
