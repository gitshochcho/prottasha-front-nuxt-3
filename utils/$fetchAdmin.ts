import { $fetch, FetchError } from 'ofetch';

interface ResponseMap {
	blob: Blob;
	text: string;
	arrayBuffer: ArrayBuffer;
}
type ResponseType = keyof ResponseMap | 'json';

export async function $fetchAdmin<T, R extends ResponseType = 'json'>(
	path: RequestInfo,
	{ ...options }
) {
	const { API_URL_ADMIN } = useRuntimeConfig().public;

	const url = useRequestURL();
	const hostName = url.hostname;

	// Handle GET requests properly
	const method = options?.method?.toUpperCase() || 'GET';
	
	if (['GET', 'HEAD'].includes(method)) {
		// Remove body for GET/HEAD requests
		if (options.body) {
			console.warn(`Body is not allowed for ${method} requests. Use 'params' instead.`);
			delete options.body;
		}
		
		// If you need to send data, use params instead of body
		// Convert body to params if needed
		if (options.body && typeof options.body === 'object') {
			options.params = { ...options.params, ...options.body };
			delete options.body;
		}
	}

	let headers: any = {
		accept: 'application/json',
		...options?.headers,
	};

	if (process.server) {
		headers = {
			...headers,
			...useRequestHeaders(['cookie']),
			referer: hostName,
		};
	}

	try {
		return await $fetch<T, R>(path, {
			baseURL: API_URL_ADMIN,
			...options,
			headers
		});
	} catch (error) {
		if (!(error instanceof FetchError)) throw error;
		const status = error.response?.status ?? -1;
		if ([500].includes(status)) {
			console.error('[Http Error]', error.data?.message, error.data);
		}
		throw error;
	}
}