define([], function () {
	return function (selector, timeout) {
		return function () {
			var session = this.session;
			return session
				.getFindTimeout()
				.then(function (oldTimeout) {
					return session.setFindTimeout(timeout).then(function () {
						return session.findByCssSelector(selector);
					})
					.finally(function (returnValue) {
						return session.setFindTimeout(oldTimeout).then(function () {
							if (returnValue instanceof Error) {
								throw returnValue;
							}
						});
					});
				});
		};
	};
});
