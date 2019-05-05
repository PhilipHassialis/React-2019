import auth from "auth0-js";

export default class Auth {
    auth0 = new auth.WebAuth({
        domain: "githubhassialis.eu.auth0.com",
        clientID: "NiWALhDvTC3DnENPedzYAx504fo2ldL7",
        redirectUri: "http://localhost:3000/callback",
        responseType: "token id_token",
        scope: "openid profile email"
    });

    login = () => {
        this.auth0.authorize();
    };

    handleAuth = () => {
        this.auth0.parseHash((err, authResult) => {
            if (authResult) {
                localStorage.setItem("access_token", authResult.accessToken);
                localStorage.setItem("id_token", authResult.idToken);
                let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
                localStorage.setItem("expiresAt", expiresAt);
            } else {
                console.log(err);
            }
        });
    };

    logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expiresAt");
    };
}
