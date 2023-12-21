export const checkPasswordStrength = (password) => {
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length >= 8 && hasNumber && hasSpecialChar) {
    return "strong";
  } else if (password.length >= 6 && (hasNumber || hasSpecialChar)) {
    return "medium";
  } else {
    return "weak";
  }
};
