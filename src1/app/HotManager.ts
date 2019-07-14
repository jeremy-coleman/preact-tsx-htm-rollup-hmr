export let HotManager = {
    register: function (moduleId) {
        this._moduleId = moduleId;
    },

    getRegistered: function () {
        return this._moduleId;
    }
}

export default HotManager