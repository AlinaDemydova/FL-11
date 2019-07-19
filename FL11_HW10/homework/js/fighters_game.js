class Fighter {
	constructor(name, damage, hp, agility, win = 0, lose = 0) {
		this._name = name; 
		this._damage = damage; // урон
		this._hp = hp; // здоровье
		this._agility = agility; // ловкость
		this._win = win;
		this._lose = lose;
	}

	getName() {
		return this._name;
	}
	getDamage() {
		return this._damage;
	}
	getHp() {
		return this._hp;
	}
	getAgility() {
		return this._agility;
	}
	getWin() {
		return this._win;
	}
	getLose() {
		return this._lose;
	}

	setHp(hp) {
		this._hp = hp;
	}
	setWin(win) {
		this._win = win;
	}
	setLose(lose) {
		this._lose = lose;
	}

	attack(defender) {
		let posibbleAttack = 100 - defender.getAgility(); // 75(%)
		if(Math.random()*100 < posibbleAttack) {
			defender.dealDamage(defender);
			console.log(`${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`);
		} else {
			console.log(`no damage`);
		}
	}
	heal(hp) {
		let sumHp = this.getHp() + hp;
		if(sumHp >= maxHP) {
			this.setHp(maxHP);
			console.log(`${this.getName()} heal is ${this.getHp()} now!`);
		} else {
			this.setHp(sumHp);
			console.log(`${this.getName()} heal is ${this.getHp()} now!`);
		}
	}
	addWin(fighter) {
		fighter.setWin(fighter.getWin() + 1);
		console.log(`${fighter.getName()} win!`)
	}
	addLose(defender) {
		defender.setWin(defender.getWin() + 1);
		console.log(`${defender.getName()} lose`)
	}
	dealDamage(defender) {
		if(defender.getHp() - this.getDamage() >= 0) {
			defender.setHp(defender.getHp() - this.getDamage());
		} else {
			defender.setHp(0);
		}
	}
	logCombatHistory() {
		console.log(`Name: ${this.getName()}, Wins: ${this.getWin()}, Losses: ${this.getLose()}`);
	}
}

function battle(fighter, defender) {
	do {
		if(defender.getHp() === 0) {
			fighter.addWin(fighter);
			defender.addLose(defender);
			return;
		}
		fighter.attack(defender);
		let temp = fighter;
		fighter = defender;
		defender = temp;
	} while (defender.getHp() > 0)
}

let maxHP = 100;

let my1Fighter = new Fighter('John', 20, 100, 25);
let my2Fighter = new Fighter('Mike', 30, 100, 30);
battle(my1Fighter, my2Fighter);

