function* getNextID(start: number): Generator<number> {
	while (true) {
		yield ++start;
	}
}

export default getNextID;
