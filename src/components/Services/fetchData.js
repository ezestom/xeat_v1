export async function fetchData() {
	const endpoint =
		"https://us-east4.gcp.data.mongodb-api.com/app/home-ybjtf/endpoint/210";

	try {
		const response = await fetch(endpoint);

		if (!response.ok) {
			throw new Error("Failed to fetch data");
		}

		const data = await response.json();

		console.log(data);
		return data;
	} catch (error) {
		console.error("There was a problem fetching the data", error);
		throw error;
	}
}
fetchData();
