var app_version = 'v20191018000003'

function addQueryStringArg(url, name, value) {
  url += url.indexOf('?') === -1 ? '?' : '&'
  url += encodeURIComponent(name) + '=' + encodeURIComponent(value)
  return url
}
var url = window.location.href, version = window.localStorage.getItem('app_version')

if (app_version !== version) {
  window.location.href = addQueryStringArg(url, 'v', app_version)
  window.localStorage.setItem('app_version', app_version)
}