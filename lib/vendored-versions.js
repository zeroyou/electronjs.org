const i18n = require('electron-i18n')
const versions = require('../data/versions.json')

module.exports = versions.find(version => version.version === i18n.electronLatestStableVersion)