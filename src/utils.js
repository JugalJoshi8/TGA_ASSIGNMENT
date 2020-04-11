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

export const getHoursPassed = (dateString) => {
  var diff = (new Date().getTime() - new Date(dateString).getTime()) / 1000;
  diff /= 60 * 60;
  return Math.abs(Math.round(diff));
};
