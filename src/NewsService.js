const hiddenItems = JSON.parse(
  (typeof localStorage !== "undefined" &&
    localStorage.getItem("hiddenItems")) ||
    "{}"
);

export const setItemAsHidden = (key) => {
  hiddenItems[key] = true;
  localStorage.setItem("hiddenItems", JSON.stringify(hiddenItems));
};

export const isItemHidden = (key) => {
  return hiddenItems[key] === true;
};
