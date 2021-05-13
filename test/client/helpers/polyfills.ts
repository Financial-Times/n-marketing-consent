import logger from '@financial-times/n-logger';

process.on('unhandledRejection', (reason, p) => {
	logger.info('Unhandled Rejection at: Promise', {
		p,
		reason,
		stack: reason && reason['stack'],
	});
});

beforeAll(() => {
	(window as any).Headers = class {
		constructor() {}
	};
	(window as any).Element.prototype.closest = function (selector) {
		let el = this;
		while (el) {
			if (el.matches(selector)) {
				return el;
			}
			el = el.parentElement;
		}
	};
});
