export const refreshTokenId = (res) => {
  // Set timer for refreshing token
  let refreshTokenTime = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
  // res.setHeader('Set-Cookie', 'HttpOnly;Secure;SameSite=Strict'); // localStorage.setItem('authToken', newAuthRes.token_id);

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTokenTime = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    console.log('--->', newAuthRes);
    console.log('iddddd', newAuthRes.id_token);
    // Timer set after first runs
    localStorage.setItem('authToken', newAuthRes.id_token);
    setTimeout(refreshToken, refreshTokenTime);
  };
  // Set up refresh timer
  setTimeout(refreshToken, refreshTokenTime);
};
