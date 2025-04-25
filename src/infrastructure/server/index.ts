import express from "express";
import config from "../config";

const start = async () => {
  const { port, host } = config.server;
  const app = express();

  try {
    const httpServer = app.listen({ port, host });
    console.info(`Server is running!!`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
