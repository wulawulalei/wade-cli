class PromptManager {
    constructor(creator) {
        this.creator = creator
    }
    handlerDefault(defaults) {
        this.creator.defaults.push(defaults)
    }
    handlerFeature(features) {
        this.creator.features.push(features)
    }
}

module.exports = PromptManager