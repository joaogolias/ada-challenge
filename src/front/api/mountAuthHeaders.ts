export const mountAuthHeaders = (idToken: string) => {
  return {
    Authorization: `Bearer ${idToken}`,
  };
};
