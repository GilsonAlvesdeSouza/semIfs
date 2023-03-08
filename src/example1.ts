class Spotify {
	readonly plain: string;
	constructor(type: string) {
		this.plain = type;
	}

	returnCost() {
		if (this.plain === "single") {
			return 16.9;
		} else if (this.plain === "duo") {
			return 21.9;
		} else if (this.plain === "family") {
			return 26.9;
		}
	}
}

console.log(new Spotify("single").returnCost());
