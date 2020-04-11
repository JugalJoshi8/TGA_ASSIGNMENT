const hiddenItems = JSON.parse(
  (typeof localStorage !== "undefined" &&
    localStorage.getItem("hiddenItems")) ||
    "{}"
);

const upvotes = JSON.parse(
  (typeof localStorage !== "undefined" && localStorage.getItem("upvotes")) ||
    "{}"
);

export const setItemAsHidden = (key) => {
  hiddenItems[key] = true;
  localStorage.setItem("hiddenItems", JSON.stringify(hiddenItems));
};

export const isItemHidden = (key) => {
  return hiddenItems[key] === true;
};

export const getUpvotes = (key) => {
  return new Promise((resolve) => {
    resolve(upvotes[key] || 0);
  });
};

export const upvoteItem = (key, value) => {
  upvotes[key] = value;
  localStorage.setItem("upvotes", JSON.stringify(upvotes));
};
