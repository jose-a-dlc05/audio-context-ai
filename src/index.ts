import { promises as fs } from "node:fs";
import path from "node:path";

const supportedExtensions = ["mp3", "wav", "m4a"] as const;

type SupportedExtension = (typeof supportedExtensions)[number];

interface ValidAudioFile {
  fileName: string;
  absolutePath: string;
  sizeInBytes: number;
  extension: SupportedExtension;
}

function isSupportedExtension(value: string): value is SupportedExtension {
  return (supportedExtensions as readonly string[]).includes(value);
}

async function scanAudioInputs(dirPath: string): Promise<ValidAudioFile[]> {
  const absolutePath = path.resolve(dirPath);
  const files = await fs.readdir(absolutePath, { withFileTypes: true });
  const results: ValidAudioFile[] = [];

  for (const file of files) {
    try {
      if (!file.isFile()) continue;

      const extension = path.extname(file.name).slice(1).toLowerCase();
      if (!isSupportedExtension(extension)) continue;

      const filePath = path.join(absolutePath, file.name);
      const stats = await fs.stat(filePath);

      results.push({
        fileName: file.name,
        absolutePath: filePath,
        sizeInBytes: stats.size,
        extension,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return results;
}

const results = await scanAudioInputs("./inputs");

console.log(results);
