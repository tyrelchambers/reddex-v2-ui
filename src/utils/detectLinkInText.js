export const detectLinkInText = (str) => {
  let match = str.match(
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
  );
  let final = str;
  match.map((url) => {
    final = final.replace(
      url,
      '<a href="' +
        url +
        '" target="_BLANK" class="text-accent-primary">' +
        url +
        "</a>"
    );
  });
  return final;
};
