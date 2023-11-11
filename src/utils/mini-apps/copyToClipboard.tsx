export const copyTextToClipboard = async (txt: string) => {
  if ("clipboard" in navigator) {
    // Means if browser support
    return await navigator.clipboard.writeText(txt);
  } else {
    return document.execCommand("copy", true, txt);
  }
};
