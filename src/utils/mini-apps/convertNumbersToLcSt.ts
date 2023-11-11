const getLocalNumber = (num: number, locale: string): string => {
  const hindiNums = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
  const numArr: number[] | null =
    num.toString().match(/\d/g)?.map(Number) || null;

  if (locale === "hi-IN") {
    const hiArr: string[] = [""];

    for (let i = 0; i < numArr!.length; i++) {
      hiArr.push(hindiNums[numArr![i]]);
    }

    return hiArr.join("");
  }

  return num.toLocaleString(locale);
};

export default getLocalNumber;
