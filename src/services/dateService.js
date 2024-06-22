const dateFormat = (newDate) => {
  const date = new Date(newDate);

  // 2024. 03. 20.
  const formattedDate = date.getFullYear() + ". " + ("0" + (date.getMonth() + 1)).slice(-2) + ". " + ("0" + date.getDate()).slice(-2) + ".";

  return formattedDate;
}

const createdDateNow = () => {
  const date = new Date();

  // 2024-03-20
  const formattedDate = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);

  return formattedDate;
}

export { dateFormat, createdDateNow };