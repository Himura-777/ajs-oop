import Character from "../js/Character.js";
import Bowman from "../js/Bowman.js";
import Swordsman from "../js/Swordsman.js";
import Magician from "../js/Magician.js";
import Daemon from "../js/Daemon.js";
import Undead from "../js/Undead.js";
import Zombie from "../js/Zombie.js";

test("Создание персонажа с некорректным именем", () => {
	expect(() => new Character("A", "Bowman")).toThrow(
		"Имя должно быть строкой от 2 до 10 символов"
	);
	expect(() => new Character("VeryLongName", "Bowman")).toThrow(
		"Имя должно быть строкой от 2 до 10 символов"
	);
});

test("Создание персонажа с некорректным типом", () => {
	expect(() => new Character("Robin", "Knight")).toThrow(
		"Некорректный тип персонажа"
	);
});

test("Создание объектов всех классов", () => {
	const bowman = new Bowman("Robin");
	const swordsman = new Swordsman("Arthur");
	const magician = new Magician("Merlin");
	const daemon = new Daemon("Azazel");
	const undead = new Undead("Dracula");
	const zombie = new Zombie("Walker");

	expect(bowman).toEqual(
		expect.objectContaining({
			name: "Robin",
			type: "Bowman",
			health: 100,
			level: 1,
			attack: 25,
			defence: 25,
		})
	);
	expect(swordsman).toEqual(
		expect.objectContaining({
			name: "Arthur",
			type: "Swordsman",
			health: 100,
			level: 1,
			attack: 40,
			defence: 10,
		})
	);
	expect(magician).toEqual(
		expect.objectContaining({
			name: "Merlin",
			type: "Magician",
			health: 100,
			level: 1,
			attack: 10,
			defence: 40,
		})
	);
	expect(daemon).toEqual(
		expect.objectContaining({
			name: "Azazel",
			type: "Daemon",
			health: 100,
			level: 1,
			attack: 10,
			defence: 40,
		})
	);
	expect(undead).toEqual(
		expect.objectContaining({
			name: "Dracula",
			type: "Undead",
			health: 100,
			level: 1,
			attack: 25,
			defence: 25,
		})
	);
	expect(zombie).toEqual(
		expect.objectContaining({
			name: "Walker",
			type: "Zombie",
			health: 100,
			level: 1,
			attack: 40,
			defence: 10,
		})
	);
});

test("Метод levelUp повышает уровень и характеристики", () => {
	const bowman = new Bowman("Robin");
	bowman.levelUp();
	expect(bowman.level).toBe(2);
	expect(bowman.health).toBe(100);
	expect(bowman.attack).toBe(30);
	expect(bowman.defence).toBe(30);
});

test("Метод levelUp выбрасывает ошибку для мертвого персонажа", () => {
	const zombie = new Zombie("Walker");
	zombie.health = 0;
	expect(() => zombie.levelUp()).toThrow(
		"Нельзя повысить уровень мёртвого персонажа"
	);
});

test("Метод damage уменьшает здоровье", () => {
	const swordsman = new Swordsman("Arthur");
	swordsman.damage(50);
	console.log(swordsman.health);
	expect(swordsman.health).toBeCloseTo(55);
});

test("Метод damage не уменьшает здоровье ниже 0", () => {
	const magician = new Magician("Merlin");
	magician.damage(500);
	expect(magician.health).toBe(0);
});
