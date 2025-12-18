const Hearthisat = require('../../lib/hearthisat');

describe('Hearthisat', () => {
	it('should be instantiable', () => {
		const hearthisat = new Hearthisat();
		expect(hearthisat).toBeDefined();
	});
});
