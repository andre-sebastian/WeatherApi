import fs from "fs";
import { promisify } from "node:util";

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

class DatabaseService {

}