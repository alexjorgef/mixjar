const {
	getURL,
	getRequest,
	filterObject,
	FunctionBuilder,
	configs
} = require('../utils');

const { api } = configs();

class Pagination {

	constructor(page = 1, count = 5, duration = null) {
		this.page = page;
		this.count = count;
		this.duration = duration;
	}
}

class FeedPagination extends Pagination {

	constructor(page = 1, count = 5, duration = null, type = null, category = null, show_feed_start = null, show_feed_end) {
		super(page, count, duration);
		this.type = type;
		this.category = category;
		this['show-feed-start'] = show_feed_start;
		this['show-feed-end'] = show_feed_end;
	}
}

/**
 * Endpoints for hearthisat
 * @class
 */
class Hearthisat {

	/**
	 * Return a new Hearthisat instance
	 */
	constructor() {
	}

	/**
	 * Get new popular mixes from feed
	 * @param {FeedPagination} pagination
	 */
	feed_popular_new(pagination = null) {
		return FunctionBuilder(getRequest(getURL('feed', api.hearthisat, filterObject({ ...pagination }))));
	}

	/**
	 * Get all genres
	 * @param {Pagination} pagination
	 */
	all_genres(pagination = null) {
		return FunctionBuilder(getRequest(getURL('categories', api.hearthisat, filterObject({ ...pagination }))));
	}

	/**
	 * Get tracks list based on genre category
	 * @param {String} category
	 * @param {Number} page
	 * @param {Number} count
	 * @param {Number} duration
	 */
	genre_tracks(category, page = 1, count = 5, duration = null) {
		const qParams = filterObject({
			page,
			count,
			duration,
		});
		return FunctionBuilder(getRequest(getURL(`categories/${category}`, api.hearthisat, qParams)));
	}

	/**
	 * Get track detail
	 * @param {String} username
	 * @param {String} title
	 */
	track_detail(username, title) {
		return FunctionBuilder(getRequest(getURL(`${username}/${title}`, api.hearthisat)));
	}

	/**
	 * Get single user
	 * @param {String} username
	 */
	user(username) {
		return FunctionBuilder(getRequest(getURL(username || '', api.hearthisat)));
	}

	/**
	 * Get user tracks
	 * @param {String} username
	 * @param {Number} page
	 * @param {Number} count
	 * @param {('likes' | 'playlists' | 'tracks')} type
	 */
	user_tracks(username, type = 'likes', page = 1, count = 5) {
		const qParams = filterObject({
			page,
			count,
			type,
		});
		return FunctionBuilder(getRequest(getURL(username || '', api.hearthisat, qParams)));
	}

	/**
	 * Get playlist tracks
	 * @param {String} permalink
	 * @param {Number} page
	 * @param {Number} count
	 */
	playlist_tracks(permalink, page = 1, count = 5) {
		const qParams = filterObject({
			page,
			count,
		});
		return FunctionBuilder(getRequest(getURL(`/set/${permalink}`, api.hearthisat, qParams)));
	}

	/**
	 * Search for track/user/playlist
	 * @param {('tracks'|'user'|'playlists')} type
	 * @param {String} t
	 * @param {Number} page
	 * @param {Number} count
	 * @param {Number} duration
	 */
	search(t, type = 'tracks', page = 1, count = 5, duration = null) {
		const qParams = filterObject({
			type,
			t,
			page,
			count,
			duration,
		});
		return FunctionBuilder(getRequest(getURL('search', api.hearthisat, qParams)));
	}
}

module.exports = Hearthisat;
