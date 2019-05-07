import auth from "auth0-js";
import history from "./history";

export default class Auth {
    auth0 = new auth.WebAuth({
        domain: "githubhassialis.eu.auth0.com",
        clientID: "NiWALhDvTC3DnENPedzYAx504fo2ldL7",
        redirectUri: "http://localhost:3000/callback",
        responseType: "token id_token",
        scope: "openid profile email"
    });

    userProfile = {};

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
                this.getProfile();
                setTimeout(() => {
                    history.replace("/authcheck");
                }, 200);
            } else {
                console.log(err);
            }
        });
    };

    getAccessToken = () => {
        if (localStorage.getItem("access_token")) {
            const accessToken = localStorage.getItem("access_token");
            return accessToken;
        } else {
            return null;
        }
    };

    getProfile = () => {
        let accessToken = this.getAccessToken();
        if (accessToken) {
            this.auth0.client.userInfo(accessToken, (err, profile) => {
                if (profile) {
                    this.userProfile = { profile };
                }
            });
        }
    };

    logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expiresAt");
        console.log("Logging out");
        setTimeout(() => {
            history.replace("/authcheck");
        }, 200);
    };

    isAuthenticated = () => {
        let expiresAt = JSON.parse(localStorage.getItem("expiresAt"));
        console.log("Is authenticated: ", new Date().getTime() < expiresAt);
        return new Date().getTime() < expiresAt;
    };
}
