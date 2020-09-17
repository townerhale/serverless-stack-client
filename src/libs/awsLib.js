import { Storage } from "aws-amplify";
//upload to S3

export async function s3Upload(file) {
//generate a unique file name using a time stap
  const filename = `${Date.now()}-${file.name}`;
  //upload the file to the user's folder in 3
  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });
  return stored.key;
}
