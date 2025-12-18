const request = async (method, uri, headers = {}, body = null) => {
    const options = {
        method,
        headers: { 'Content-Type': 'application/json', ...headers },
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(uri, options);

    const parseBody = async (res) => {
        try {
            return await res.json();
        } catch {
            const text = await res.text();
            return { message_body: text };
        }
    };

    if (response.ok) {
        return parseBody(response);
    } else {
        throw await parseBody(response);
    }
};

module.exports = {

	configs: () => ({
		api: {
			mixcloud: 'https://api.mixcloud.com',
			hearthisat: 'https://api-v2.hearthis.at',
		},
		url: {
			mixcloud: 'https://www.mixcloud.com',
			hearthisat: 'https://hearthis.at',
		},
		params: {
			mixcloud: {
				metadata: true,
				callback: '',
			}
		}
	}),

	/**
	 * Get actual metadata value
	 * @param {Boolean} metadata
	 * @returns {Number}
	 */
	getMetadataValue: (metadata) => metadata && typeof metadata === 'boolean' || typeof metadata === 'number' ? Number(metadata) : 0,

	/**
     * Get Full URL
     * @param {String} basepath
     * @param {String} uri
     * @param {Object} params
	 * @returns {String}
     */
	getURL: (basepath, uri, params = null) => {
		const url = new URL(basepath, uri);
		if (params) {
			Object.keys(params).forEach((v) => url.searchParams.append(v, params[v]));
		}

		return url.href;
	},

	/**
	 * Make GET Request
	 * @param {String} uri
	 * @returns {Object}
	 */
	getRequest: (uri) => request('GET', uri),

	/**
	 * Make POST Request
	 * @param {String} uri
	 * @param {Object} headers
	 * @param {Object} body
	 * @returns {Object}
	 */
	postRequest: (uri, headers = null, body = null) => request('POST', uri, headers, body),

	/**
	 * Make DELETE Request
	 * @param {String} uri
	 * @param {Object} headers
	 * @param {Object} body
	 * @returns {Object}
	 */
	deleteRequest: (uri, headers = null, body = null) => request('DELETE', uri, headers, body),

	/**
	 * Remove null or empty properties from object
	 * @param {Object} obj
	 * @returns {Object}
	 */
	filterObject: (obj) => {
		Object.keys(obj).forEach((key) => {
			if (!obj[key]) {
				delete obj[key];
			}
		});
		return obj;
	},

	/**
	 * Function builder to return promise, callback or observable
	 * @param {(Promise<Any>)} fn
	 * @returns {{asPromise(): Promise<Any>, asCallback(*): void}}
	 */
	FunctionBuilder(fn) {
		return {

			/**
			 * Return result as promise
			 * @returns {Promise<Any>}
			 */
			asPromise() {
				return fn;
			},

			/**
			 * Function builder to return promise, callback or observable
			 * @param {Function} callback
			 * @returns {void}
			 */
			asCallback(callback) {
				fn.then((result) => callback(null, result), (err) => callback(err));
			},
		};
	}
};
