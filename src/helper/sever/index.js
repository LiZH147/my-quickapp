import nativeFetch from '@system.fetch'

const myFetch = {
    /**
     * 网络请求
     * @parmas options
     * @return {Promise}
     */
    async fetch(options) {
        const p1 = new Promise((resolve, reject) => {
            options.success = function (data, code) {
                resolve({ data, code });
            }
            options.fail = function (data, code) {
                reject({ data, code });
            }
            nativeFetch.fetch(options);
        })
        return p1;
    }
}

export default { myFetch }