export const generatePassword = (email, programCode) => {
  // Extract the first part of the email before '@' (username)
  const username = email.split("@")[0];

  // Extract the first three characters of the programCode
  const codePart = programCode.slice(0, 3);

  // Create a memorable password by combining these parts
  const memorablePassword = `${username}${codePart}`;

  return memorablePassword;
};