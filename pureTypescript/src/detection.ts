const detectType = (val: number | string) => {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 2;
};
const provideId = (id: string | null) => {
  if (!id) {
    console.log("Provide id here");
    return;
  }
  id.toLowerCase();
};
