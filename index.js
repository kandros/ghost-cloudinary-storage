'use strict';
const Promise = require('bluebird');
const cloudinary = require('cloudinary');
const path = require('path')

let BaseStore;
try {
    BaseStore = require('ghost/core/server/storage/base');
} catch(e) {
    if (e.code !== 'MODULE_NOT_FOUND') throw e;
    BaseStore = require(path.join(process.cwd(), 'core/server/storage/base'));
}

class Store extends BaseStore {
    constructor(config) {
        super()
        this.config = config || {}
        cloudinary.config(config);
    }

    save(image) {
        const secure = this.config.secure || false;

        return new Promise(function(resolve) {
            cloudinary.uploader.upload(image.path, function(result) {
                resolve(secure ? result.secure_url : result.url);
            });
        });
    }

    serve() {
        return function(req, res, next) {
            next();
        };
    }

    read() {

    }

    delete() {

    }

    exists() {

    }
}

module.exports = Store;
