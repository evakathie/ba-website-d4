function showCookieNotice() {
    if (this.window.localStorage.getItem('dCookieHinweis')) {
        document.getElementById("cookiehinweis").style="display:none";
    }
}

function cookieOk() {
    document.getElementById("cookiehinweis").style="display:none";
    window.localStorage.setItem('dCookieHinweis', '1');
}

/* Nach Experiment:
localStorage.removeItem('dCookieHinweis');
*/
