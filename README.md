# identifi-angular

Angular app that connects to the Identifi API.

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
