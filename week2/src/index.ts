import * as fs from "fs/promises";
import { newPath } from "./flags";
import { path } from "./flags";
import { flag } from "./flags";
import { RLE } from "./rle";

(async () => {
  if (!path || !flag) {
    console.log("Debe proporcionar un nombre de archivo.");
    process.exit(1);
  }

  try {
    const data = await fs.readFile(path, "utf8");

    let result: string;

    if (flag === "cf") {
      result = RLE.encode(data);
    } else if (flag === "ucf") {
      result = RLE.decode(data);
    } else {
      console.log("Bandera no reconocida.");
      process.exit(1);
    }

    await fs.writeFile(newPath, result, "utf8");
    console.log("Operación completada exitosamente.");
  } catch (err) {
    console.error("Error:", err);
  }
})();
