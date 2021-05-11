let APIURL = "http://the-weddingbook-app.herokuapp.com";

switch (window.location.hostname) {
  case "localhost":
  case "127.0.0.1":
    APIURL = "http://localhost:3000";
    break;
  case "https://the-weddingbook-app.herokuapp.com/auth":
    APIURL = "https://crr-wedding-book.herokuapp.com";
    break;
  case "https://the-weddingbook-app.herokuapp.com":
    APIURL = "https://crr-wedding-book.herokuapp.com";
    break;
}

export default APIURL;
