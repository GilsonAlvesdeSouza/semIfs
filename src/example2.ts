interface Plan {
	cost(): number;
}

class Single implements Plan {
	cost() {
		return 16.9;
	}
}

class Duo implements Plan {
	cost() {
		return 21.9;
	}
}

class Family implements Plan {
	cost() {
		return 26.9;
	}
}

class Spotify1 {
	readonly plan: string;

	constructor(plan: string) {
		this.plan = plan;
	}
	returnCost() {
		const className = this.plan[0].toLocaleUpperCase() + this.plan.substring(1);
		return new (eval(className))().cost();
	}
}

console.log(new Spotify1("duo").returnCost());
