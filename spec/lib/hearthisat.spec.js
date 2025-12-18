const Hearthisat = require('../../lib/hearthisat');

describe('Hearthisat', () => {
	it('should be instantiable', () => {
		const hearthisat = new Hearthisat();
		expect(hearthisat).toBeDefined();
		expect(hearthisat).toBeInstanceOf(Hearthisat);
	});

	it('should have all expected methods', () => {
		const hearthisat = new Hearthisat();
		const methods = [
			'feed_popular_new',
			'all_genres',
			'genre_tracks',
			'track_detail',
			'user',
			'user_tracks',
			'playlist_tracks',
			'search'
		];

		methods.forEach(method => {
			expect(typeof hearthisat[method]).toBe('function');
		});
	});

	it('should accept pagination parameters in feed_popular_new', () => {
		const hearthisat = new Hearthisat();
		const pagination = { page: 2, count: 10, duration: 300 };
		const requestFn = hearthisat.feed_popular_new(pagination);
		expect(typeof requestFn).toBe('object');
	});
});
