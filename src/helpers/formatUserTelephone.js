export const formatUserTelephone = (telephone) => {
  return `+7${telephone.toString().substr(telephone.length - 10)}`;
};
