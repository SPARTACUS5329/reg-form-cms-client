function* getNextID(start: number): Generator<number, number, number> {
	let current = start;
	while (true) {
		const next = current + 1;
		current = yield next;
	}
}

export default getNextID;
