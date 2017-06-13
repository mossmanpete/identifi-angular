# identifi-angular

Angular app that connects to the Identifi API.

Available at:
* https://identi.fi
* https://identifi.github.io/
* https://ipfs.io/ipns/identi.fi/
* https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/
* [Chrome extension](https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh) ([mirror](https://github.com/identifi/identifi-angular/raw/master/dist.crx))

## Development
```
git clone https://github.com/identifi/identifi-angular.git
cd identifi-angular
npm install --global gulp-cli bower
npm install
bower install
gulp serve
```

Uses identi.fi as default API endpoint. If you want to use a local Identifi API:
```
export IDENTIFI_API_URL=http://localhost:4944
```
