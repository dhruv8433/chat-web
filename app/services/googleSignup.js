const { httpAxios } = require("../httpAxios");

export async function googleSignup(googleData, username) {
  const response = await httpAxios.post("/google-signup", {
    username: username,
    email: googleData.email,
    displayName: googleData.displayName,
    localId: googleData.localId,
    photoUrl: googleData.photoUrl,
    emailVerified: googleData.emailVerified,
    createdAt: googleData.createdAt,
    lastRefreshAt: googleData.lastRefreshAt,
  });

  return response.data;
}
