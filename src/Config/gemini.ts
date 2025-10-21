// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node


import { Chat, GoogleGenAI } from "@google/genai";


import mime from "mime";
import { writeFile } from "fs";

// function saveBinaryFile(fileName: string, content: Buffer) {
//   writeFile(fileName, content, 'utf8', (err) => {
//     if (err) {
//       console.error(`Error writing file ${fileName}:`, err);
//       return;
//     }
//     console.log(`File ${fileName} saved to file system.`);
// //   });
//
// }

export default async function main(prompt: string) {
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });
  const config = {
    responseModalities: ["IMAGE", "TEXT"],
  };
  const model = "gemini-2.5-flash-image";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContent({
    model,
    config,
    contents,
  });
  const result = response.text;
  const output = `Q: ${prompt}\nA: ${result}`;
  console.log(output);
  return response.text;
  let fileIndex = 0;
  // for await (const chunk of response) {
  //   if (!chunk.candidates || !chunk.candidates[0].content || !chunk.candidates[0].content.parts) {
  //     continue;
  //   }
  //   if (chunk.candidates?.[0]?.content?.parts?.[0]?.inlineData) {
  //     const fileName = `ENTER_FILE_NAME_${fileIndex++}`;
  //     const inlineData = chunk.candidates[0].content.parts[0].inlineData;
  //     const fileExtension = mime.getExtension(inlineData.mimeType || '');
  //     const buffer = Buffer.from(inlineData.data || '', 'base64');
  //     saveBinaryFile(`${fileName}.${fileExtension}`, buffer);
  //   }
  //   else {
  //     console.log(chunk.text);
  //   }
  // }
}

main;
