export const cssUnit = (v: string | number) => {
  if (typeof v === "number" || /^\d+$/.test(v)) return `${v}px`;
  return v;
};
