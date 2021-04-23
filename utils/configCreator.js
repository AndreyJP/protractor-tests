module.exports = provideConfig =>{
    const defaultConfig = {
        baseUrl: 'https://lit-chamber-61567.herokuapp.com/',
        specs: ['../specs/*.spec.js'],
        onPrepare: () => {
            BhxBrowser.waitForAngularEnabled(false)
        },
        //Tests can run in a random way
        jasmineNodeOpts: {random: true}
    }

    return Object.assign(
        //Put in this object the defaultConfig and the provideConfig
        {},
        defaultConfig,
        provideConfig
    )
}