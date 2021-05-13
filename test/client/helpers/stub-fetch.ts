export default function (
	{ errorsToReturn, responseCode = 200, redirectLocation } = {} as any
) {
	window.fetch = jest.fn((url, options) => {
		const response: any = { values: JSON.parse(options?.body as any) };
		if (errorsToReturn) response.errors = errorsToReturn;
		if (redirectLocation) response.location = redirectLocation;

		return new Promise((resolve) => {
			return resolve({
				ok: !errorsToReturn,
				status: errorsToReturn ? 400 : responseCode,
				json: () => Promise.resolve(response),
			} as any);
		});
	});
}
