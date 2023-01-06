export const isUserTelephoneValid = (telephone) => {
  if (!telephone) return;

  let cleaned = telephone.toString().replace(/\D/g, "");
  return cleaned.match(/^(\d{11})$/);
};
