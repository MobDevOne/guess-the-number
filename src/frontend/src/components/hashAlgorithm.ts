export function hashAlgorithm(password: string) {
  let hashedPW = 1337; // Initial hash value

  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hashedPW = (hashedPW * 33) ^ char; // The magic number 33 is often used in hash functions
  }

  const hashedPassword = hashedPW >>> 0; // Ensure the result is a positive integer
  return hashedPassword.toString();
}