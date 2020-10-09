export const refreshTokenId = (res) => {
  // Set timer for refreshing token
  let refreshTokenTime = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
  console.log(refreshTokenTime);
  // res.setHeader('Set-Cookie', 'HttpOnly;Secure;SameSite=Strict'); // localStorage.setItem('authToken', newAuthRes.token_id);

  const refreshToken = async () => {
    console.log('1');
    const newAuthRes = await res.reloadAuthResponse();
    console.log('2');
    refreshTokenTime = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    console.log('--->', 3);
    console.log('iddddd', newAuthRes.id_token);
    // Timer set after first runs
    localStorage.setItem('authToken', newAuthRes.id_token);
    console.log(4);
    setTimeout(refreshToken, refreshTokenTime);
    console.log(6);
  };
  // Set up refresh timer
  setTimeout(refreshToken, refreshTokenTime);
  console.log(5);
};
