// Basic Spotify configuration
// Note: This requires a backend or Implicit Grant Flow which is deprecated/insecure for client-side only without PKCE.
// For this demo, we will simulate the player or use a simple redirection flow if user provides Client ID.

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = window.location.origin + "/callback";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

export const loginToSpotify = () => {
    if (!CLIENT_ID) {
        console.warn("Spotify Client ID not found");
        return;
    }
    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-read-currently-playing user-modify-playback-state streaming`;
};

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};
