# Login

This is a small app that demonstrates how easy it is to login users by using `Lock Widget`.

You can read a quickstart guide for this sample [here](https://auth0.com/docs/quickstart/spa/vanillajs/01-login).

## Running the example

In order to run the example you need to just start a server. What we suggest is doing the following:

1. Install node
2. run `npm install -g serve`
3. run `serve` in the directory of the project.

Go to `http://localhost:3000` and you'll see the app running :).

# Important Snippets

## 1. Add Lock dependency
```html
<!-- ===== ./index.html ===== -->
<head>
  ...
  <!-- Auth0 lock script -->
  <script src="//cdn.auth0.com/js/lock/10.1.0/lock.min.js"></script>
  ...
</head>
```

## 2. Login with Lock
```javascript
/* ===== ./app.js ===== */
window.addEventListener('load', function() {
  var AUTH0_CLIENT_ID = '';
  var AUTH0_DOMAIN = '';
  var lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);

  var btn_login = document.getElementById('btn-login');

  btn_login.addEventListener('click', function() {
    lock.show();
  });

  ...

  lock.on("authenticated", function(authResult) {
    lock.getProfile(authResult.idToken, function(error, profile) {
      if (error) {
        // Handle error
        return;
      }
      localStorage.setItem('id_token', authResult.idToken);
      // Display user information
      show_profile_info(profile);
    });
  });
  ...
});
```
