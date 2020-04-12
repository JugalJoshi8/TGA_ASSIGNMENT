export const getLocation = (href = "") => {
  var match =
    href &&
    href.match(
      /^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/
    );
  return match
    ? {
        href: href,
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: match[4],
        pathname: match[5],
        search: match[6],
        hash: match[7],
      }
    : {};
};

export const getTimePassed = (dateString) => {
  var diff = Math.abs(
    Math.round((new Date().getTime() - new Date(dateString).getTime()) / 1000)
  );
  if (diff < 60) {
    return { diff, unit: "second" };
  }
  if (diff < 60 * 60) {
    return { diff: Math.floor(diff / 60), unit: "mintute" };
  }
  if (diff < 60 * 60 * 24) {
    return { diff: Math.floor(diff / (60 * 60)), unit: "hour" };
  }
  if (diff < 60 * 60 * 24 * 365) {
    return { diff: Math.floor(diff / (60 * 60 * 24)), unit: "day" };
  }
  return { diff: Math.floor(diff / (60 * 60 * 24 * 365)), unit: "year" };
};
