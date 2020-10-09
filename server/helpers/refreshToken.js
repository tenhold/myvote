export const refreshTokenId = (res) => {
  // Set timer for refreshing token
  let refreshTokenTime = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTokenTime = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    localStorage.setItem('authToken', newAuthRes.id_token);
    setTimeout(refreshToken, refreshTokenTime);
  };
  // Set up refresh timer
  setTimeout(refreshToken, refreshTokenTime);
};
