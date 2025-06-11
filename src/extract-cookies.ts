import { showHUD, Clipboard } from "@raycast/api";

export default async function main() {
  const clipboardContent = await Clipboard.readText();

  if (!clipboardContent) {
    await showHUD("No text found in clipboard");
    return;
  }

  const targetKeys = ["meta_live_u2main", "meta_live_u2main.sig", "meta_u1main"];

  // Parse the cookie string
  const cookiePairs = clipboardContent.split(";").map((pair) => pair.trim());
  const extractedPairs: string[] = [];

  // Extract matching key-value pairs
  for (const pair of cookiePairs) {
    const [key] = pair.split("=");
    if (key && targetKeys.includes(key.trim())) {
      extractedPairs.push(pair);
    }
  }

  if (extractedPairs.length === 0) {
    console.log("No matching cookie values found");
    await showHUD("No matching cookie values found");
    return;
  }

  // Join the extracted pairs with semicolons
  const result = extractedPairs.join("; ") + ";";

  console.log("bubble cookies are", result);
  // await Clipboard.copy(now.toLocaleDateString());
  await Clipboard.copy(result);
  await showHUD("Copied date to clipboard");
}
