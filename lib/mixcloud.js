const {
	getMetadataValue,
	getURL,
	getRequest,
	postRequest,
	deleteRequest,
	filterObject,
	FunctionBuilder,
	configs
} = require('../utils');

const {
	api,
	url,
	params
} = configs();

class Paging {

	constructor(limit = null, offset = null, since = null, until = null) {
		this.limit = limit;
		this.offset = offset;
		this.since = since;
		this.until = until;
	}
}

/**
 * Endpoints for mixcloud
 * @class
 */
class Mixcloud {

	/**
	 * Return a new Mixcloud instance
	 * @param {String} access_token
	 */
	constructor(access_token = '') {
		this.access_token = access_token;
	}

	/**
	 * Get Current User Data
	 * @param {Boolean} metadata
	 * @param {Boolean|Number} metadata
	 * @param {String} callback
	 */
	me(metadata = params.mixcloud.metadata, callback = params.mixcloud.callback) {
		const qParams = filterObject({
			metadata: getMetadataValue(metadata),
			access_token: this.access_token,
			callback,
		});
		return FunctionBuilder(getRequest(getURL('me', api.mixcloud, qParams)));
	}

	/**
	 * Search for show, user or tag
	 * @param {String} q
	 * @param {('upload' | 'user' | 'tag')} type
	 * @param {Paging} paging
	 * @param {Boolean|Number} metadata
	 * @param {String} callback
	 */
	search(
		q,
		type = 'upload',
		paging = null,
		metadata = params.mixcloud.metadata,
		callback = params.mixcloud.callback
	) {

		const qParams = filterObject({
			q,
			type,
			metadata: getMetadataValue(metadata),
			access_token: this.access_token,
			callback,
			...paging,
		});

		return FunctionBuilder(getRequest(getURL('search', api.mixcloud, qParams)));
	}

	/**
	 * Get show
	 * @param {String} username
	 * @param {String} title
	 * @param {Boolean|Number} metadata
	 * @param {String} callback
	 */
	show(username, title, metadata = params.mixcloud.metadata, callback = params.mixcloud.callback) {
		username = username || '';
		title = title || '';

		const qParams = filterObject({
			metadata: getMetadataValue(metadata),
			access_token: this.access_token,
			callback,
		});

		return FunctionBuilder(getRequest(getURL(`${username}/${title}`, api.mixcloud, qParams)));
	}

	/**
	 * Search tag
	 * @param {String} tag
	 * @param {Paging} paging
	 * @param {Boolean|Number} metadata
	 * @param {String} callback
	 */
	tag(tag, paging = null, metadata = params.mixcloud.metadata, callback = params.mixcloud.callback) {
		const basepath = `/discover/${tag || ''}`;
		const qParams = filterObject({
			metadata: getMetadataValue(metadata),
			access_token: this.access_token,
			...paging,
			callback,
		});
		return FunctionBuilder(getRequest(getURL(basepath, api.mixcloud, qParams)));
	}

	/**
	 * Search by city
	 * @param {String} city
	 * @param {Paging} paging
	 * @param {Boolean|Number} metadata
	 * @param {String} callback
	 */
	city(city, paging = null, metadata = params.mixcloud.metadata, callback = params.mixcloud.callback) {
		const basepath = `/discover/city:${city || ''}`;
		const qParams = filterObject({
			metadata: getMetadataValue(metadata),
			access_token: this.access_token,
			...paging,
			callback,
		});
		return FunctionBuilder(getRequest(getURL(basepath, api.mixcloud, qParams)));
	}

	/**
	 * Search by city and tag
	 * @param {String} tag
	 * @param {String} city
	 * @param {Paging} paging
	 * @param {Boolean} metadata
	 * @param {String} callback
	 */
	tag_and_city(tag, city, paging = null, metadata = params.mixcloud.metadata, callback = params.mixcloud.callback) {
		const basepath = `/discover/${tag || ''}+city:${city || ''}`;
		const qParams = filterObject({
			metadata: getMetadataValue(metadata),
			access_token: this.access_token,
			...paging,
			callback,
		});
		return FunctionBuilder(getRequest(getURL(basepath, api.mixcloud, qParams)));
	}

	/**
	 * Discover shows
	 * @param {String} q
	 * @param {Paging} paging
	 * @param {Boolean} metadata
	 * @param {String} callback
	 */
	discover(q, paging = null, metadata = params.mixcloud.metadata, callback = params.mixcloud.callback) {
		const qParams = filterObject({
			metadata: getMetadataValue(metadata),
			access_token: this.access_token,
			...paging,
			callback,
		});
		return FunctionBuilder(getRequest(getURL(`/discover/${q}`, api.mixcloud, qParams)));
	}

	/**
	 * Discover latest shows
	 * @param {String} q
	 * @param {Paging} paging
	 * @param {Boolean} metadata
	 * @param {String} callback
	 */
	discover_latest(q, paging = null, metadata = params.mixcloud.metadata, callback = params.mixcloud.callback) {
		const qParams = filterObject({
			metadata: getMetadataValue(metadata),
			access_token: this.access_token,
			...paging,
			callback,
		});
		return FunctionBuilder(getRequest(getURL(`/discover/${q}/latest`, api.mixcloud, qParams)));
	}

	/**
	 * Discover popular shows
	 * @param {String} q
	 * @param {Paging} paging
	 * @param {Boolean} metadata
	 * @param {String} callback
	 */
	discover_popular(q, paging = null, metadata = params.mixcloud.metadata, callback = params.mixcloud.callback) {
		const qParams = filterObject({
			metadata: getMetadataValue(metadata),
			access_token: this.access_token,
			...paging,
			callback,
		});
		return FunctionBuilder(getRequest(getURL(`/discover/${q}/popular`, api.mixcloud, qParams)));
	}

	/**
	 * Get user
	 * @param {String} username
	 * @param {Boolean|Number} metadata
	 * @param {String} callback
	 */
	user(username, metadata = params.mixcloud.metadata, callback = params.mixcloud.callback) {

		const qParams = filterObject({
			metadata: getMetadataValue(metadata),
			access_token: this.access_token,
			callback,
		});
		return FunctionBuilder(getRequest(getURL(username || '', api.mixcloud, qParams)));
	}

	/**
	 * Get user cloudcasts
	 * @param {String} username
	 * @param {Paging} paging
	 * @param {Boolean} metadata
	 * @param {String} callback
	 */
	user_cloudcasts(username, paging = null, metadata = params.mixcloud.metadata, callback = params.mixcloud.callback) {
		const qParams = filterObject({
			metadata: getMetadataValue(metadata),
			access_token: this.access_token,
			...paging,
			callback,
		});
		return FunctionBuilder(getRequest(getURL(`/${username || ''}/cloudcasts/`, api.mixcloud, qParams)));
	}

	/**
	 * Get user comments
	 * @param {String} username
	 * @param {Paging} paging
	 * @param {Boolean} metadata
	 * @param {String} callback
	 */
	user_comments(username, paging = null, metadata = params.mixcloud.metadata, callback = params.mixcloud.callback) {
		const qParams = filterObject({
			metadata: getMetadataValue(metadata),
			access_token: this.access_token,
			...paging,
			callback,
		});
		return FunctionBuilder(getRequest(getURL(`/${username || ''}/comments/`, api.mixcloud, qParams)));
	}

	/**
	 * Get user favorites
	 * @param {String} username
	 * @param {Paging} paging
	 * @param {Boolean} metadata
	 * @param {String} callback
	 */
	user_favorites(username, paging = null, metadata = params.mixcloud.metadata, callback = params.mixcloud.callback) {
		const qParams = filterObject({
			metadata: getMetadataValue(metadata),
			access_token: this.access_token,
			...paging,
			callback,
		});
		return FunctionBuilder(getRequest(getURL(`/${username || ''}/favorites/`, api.mixcloud, qParams)));
	}

	/**
	 * Get user feed
	 * @param {String} username
	 * @param {Paging} paging
	 * @param {Boolean} metadata
	 * @param {String} callback
	 */
	user_feed(username, paging = null, metadata = params.mixcloud.metadata, callback = params.mixcloud.callback) {
		const qParams = filterObject({
			metadata: getMetadataValue(metadata),
			access_token: this.access_token,
			...paging,
			callback,
		});
		return FunctionBuilder(getRequest(getURL(`/${username || ''}/feed/`, api.mixcloud, qParams)));
	}

	/**
	 * Get user followers
	 * @param {String} username
	 * @param {Paging} paging
	 * @param {Boolean} metadata
	 * @param {String} callback
	 */
	user_followers(username, paging = null, metadata = params.mixcloud.metadata, callback = params.mixcloud.callback) {
		const qParams = filterObject({
			metadata: getMetadataValue(metadata),
			access_token: this.access_token,
			...paging,
			callback,
		});
		return FunctionBuilder(getRequest(getURL(`/${username || ''}/followers/`, api.mixcloud, qParams)));
	}

	/**
	 * Get user following
	 * @param {String} username
	 * @param {Paging} paging
	 * @param {Boolean} metadata
	 * @param {String} callback
	 */
	user_following(username, paging = null, metadata = params.mixcloud.metadata, callback = params.mixcloud.callback) {
		const qParams = filterObject({
			metadata: getMetadataValue(metadata),
			access_token: this.access_token,
			...paging,
			callback,
		});
		return FunctionBuilder(getRequest(getURL(`/${username || ''}/following/`, api.mixcloud, qParams)));
	}

	/**
	 * Get user listens
	 * @param {String} username
	 * @param {Paging} paging
	 * @param {Boolean} metadata
	 * @param {String} callback
	 */
	user_listens(username, paging = null, metadata = params.mixcloud.metadata, callback = params.mixcloud.callback) {
		const qParams = filterObject({
			metadata: getMetadataValue(metadata),
			access_token: this.access_token,
			...paging,
			callback,
		});
		return FunctionBuilder(getRequest(getURL(`/${username || ''}/listens/`, api.mixcloud, qParams)));
	}

	/**
	 * Get user playlists
	 * @param {String} username
	 * @param {Paging} paging
	 * @param {Boolean} metadata
	 * @param {String} callback
	 */
	user_playlists(username, paging = null, metadata = params.mixcloud.metadata, callback = params.mixcloud.callback) {
		const qParams = filterObject({
			metadata: getMetadataValue(metadata),
			access_token: this.access_token,
			...paging,
			callback,
		});
		return FunctionBuilder(getRequest(getURL(`/${username || ''}/playlists/`, api.mixcloud, qParams)));
	}

	/**
	 * Get one user playlist
	 * @param {String} username
	 * @param {String} slug
	 * @param {Paging} paging
	 * @param {Boolean} metadata
	 * @param {String} callback
	 */
	user_playlist_cloudcasts(username, slug, paging = null, metadata = params.mixcloud.metadata, callback = params.mixcloud.callback) {
		username = username || '';
		slug = slug || '';

		const qParams = filterObject({
			metadata: getMetadataValue(metadata),
			access_token: this.access_token,
			...paging,
			callback,
		});
		return FunctionBuilder(getRequest(getURL(`/${username}/playlists/${slug}/cloudcasts/`, api.mixcloud, qParams)));
	}

	/**
	 * Get access token
	 * @param {String} client_id
	 * @param {String} redirect_uri
	 * @param {String} client_secret
	 * @param {String} oauth_code
	 * @param {String} callback
	 */
	obtain_access_token(client_id, redirect_uri, client_secret, oauth_code, callback = '') {
		const qParams = {
			callback,
			client_id,
			redirect_uri: encodeURIComponent(decodeURIComponent(redirect_uri || '')),
			client_secret,
			code: oauth_code,
		};
		return FunctionBuilder(getRequest(getURL('/oauth/access_token', url.mixcloud, qParams)));
	}

	/**
	 * Get embed html/json
	 * @param {String} username
	 * @param {String} title
	 * @param {Boolean} is_json
	 * @param {String} callback
	 * @param {String} width
	 * @param {String} height
	 * @param {String} color
	 */
	embed(username, title, is_json = true, callback = '', width = '', height = '', color = '') {
		const basepath = `/${username || ''}/${title || ''}/${is_json ? 'embed-json' : 'embed-html'}`;
		const qParams = {
			callback,
			width,
			height,
			color,
		};

		return FunctionBuilder(getRequest(getURL(basepath, api.mixcloud, qParams)));
	}

	/**
	 * Get oembed
	 * @param {String} username
	 * @param {String} title
	 * @param {String} callback
	 */
	oembed(username, title, callback = '') {
		const basepath = `/${username || ''}/${title || ''}`;
		const qParams = {
			url: encodeURIComponent(decodeURIComponent(getURL(basepath, url.mixcloud))),
			format: 'json',
		};
		return FunctionBuilder(getRequest(getURL('oembed', api.mixcloud, qParams)));
	}

	/**
	 * Follow a user
	 * @param {String} username
	 * @param {String} callback
	 */
	follow(username, callback = '') {
		const qParams = {
			callback,
			access_token: this.access_token,
		};
		return FunctionBuilder(postRequest(getURL(`/${username}/follow`, api.mixcloud, qParams)));
	}

	/**
	 * Unfollow a user
	 * @param {String} username
	 * @param {String} callback
	 */
	unfollow(username, callback = '') {
		const qParams = {
			callback,
			access_token: this.access_token,
		};
		return FunctionBuilder(deleteRequest(getURL(`/${username}/follow`, api.mixcloud, qParams)));
	}

	/**
	 * Favorite a show
	 * @param {String} username
	 * @param {String} title
	 * @param {String} callback
	 */
	favorite(username, title, callback = '') {
		const qParams = {
			callback,
			access_token: this.access_token,
		};
		return FunctionBuilder(postRequest(getURL(`/${username}/${title}/favorite`, api.mixcloud, qParams)));
	}

	/**
	 * Remove a show from favorites
	 * @param {String} username
	 * @param {String} title
	 * @param {String} callback
	 */
	undo_favorite(username, title, callback = '') {
		const qParams = {
			callback,
			access_token: this.access_token,
		};
		return FunctionBuilder(deleteRequest(getURL(`/${username}/${title}/favorite`, api.mixcloud, qParams)));
	}

	/**
	 * Repost a show
	 * @param {String} username
	 * @param {String} title
	 * @param {String} callback
	 */
	repost(username, title, callback = '') {
		const qParams = {
			callback,
			access_token: this.access_token,
		};
		return FunctionBuilder(postRequest(getURL(`/${username}/${title}/repost`, api.mixcloud, qParams)));
	}

	/**
	 * Remove a reposted show
	 * @param {String} username
	 * @param {String} title
	 * @param {String} callback
	 */
	undo_repost(username, title, callback = '') {
		const qParams = {
			callback,
			access_token: this.access_token,
		};
		return FunctionBuilder(deleteRequest(getURL(`/${username}/${title}/repost`, api.mixcloud, qParams)));
	}

	/**
	 * Add show to listen later
	 * @param {String} username
	 * @param {String} title
	 * @param {String} callback
	 */
	listen_later(username, title, callback = '') {
		const qParams = {
			callback,
			access_token: this.access_token,
		};
		return FunctionBuilder(postRequest(getURL(`/${username}/${title}/listen-later`, api.mixcloud, qParams)));
	}

	/**
	 * Remove show from listen later
	 * @param {String} username
	 * @param {String} title
	 * @param {String} callback
	 */
	undo_listen_later(username, title, callback = '') {
		const qParams = {
			callback,
			access_token: this.access_token,
		};
		return FunctionBuilder(deleteRequest(getURL(`/${username}/${title}/listen-later`, api.mixcloud, qParams)));
	}

	// /**
	//  * Upload a show
	//  * @param {String} username
	//  * @param {String} title
	//  * @param {String} callback
	//  */
	// upload(username, title, callback = '') {
	// 	const qParams = {
	// 		callback,
	// 		access_token: this.access_token,
	// 	};
	// 	return postRequest(getURL('/upload', api.mixcloud, qParams));
	// }
}

module.exports = Mixcloud;
