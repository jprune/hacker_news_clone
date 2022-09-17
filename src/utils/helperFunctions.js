export const calculateDate = (createdAt) => {
  const today = new Date();
  const createdDate = new Date(createdAt);

  const time = Math.abs(createdDate - today);
  const hours = Math.ceil(time / (1000 * 60 * 60));
  return hours;
};

export const trimUrlString = (url) => {
  const urlString = url;
  if (urlString === null) {
    // eslint-disable-next-line no-useless-return
    return;
  }
  const removeHttps = urlString.replace(/(?:https:\/\/)|w{3}?./g, '');
  const removeAfterSlash = removeHttps.replace(/[/].*/, '');
  // eslint-disable-next-line consistent-return
  return (
    `${removeAfterSlash}`
  );
};
