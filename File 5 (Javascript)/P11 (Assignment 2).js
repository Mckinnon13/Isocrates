/*
Assignment 2  
Object Literal: Virtual Pet Simulator
Description:
Create a virtual pet simulator using JavaScript object literals. 
Each pet in the simulator should be represented by an object literal containing properties 
such as name, species, hunger level, happiness level, and energy level. Implement methods to 
feed the pet, play with the pet, put the pet to sleep, and check the pet's status.
*/


const petSimulator = {
    pets: [],
    addPet(name, species, hungerLevel, happinessLevel, energyLevel) {
        const pet = {
            name,
            species,
            hungerLevel,
            happinessLevel,
            energyLevel,
            available: true,
        }
        this.pets.push(pet);
    },
    feedPet(name) {
        const pet = this.pets.find(pet => pet.name.toLowerCase() === name.toLowerCase());
        if (pet) {
            if (pet.hungerLevel.toLowerCase() === "high") {
                console.log(pet.name + " has been fed");
                pet.hungerLevel = "low";
            } else {
                console.log(pet.name + " is already fed");
            }
        }
    },
    playWithPet(name) {
        const pet = this.pets.find(pet => pet.name.toLowerCase() === name.toLowerCase());
        if (pet) {
            if (pet.happinessLevel.toLowerCase() === "low" && pet.energyLevel.toLowerCase() === "high") {
                console.log(pet.name + " has played with you");
                pet.happinessLevel = "high";
                pet.energyLevel = "low";
            } else {
                console.log(pet.name + " is already tired");
            }
        }
    },
    putPetToSleep(name) {
        const pet = this.pets.find(pet => pet.name.toLowerCase() === name.toLowerCase());
        if (pet) {
            if (pet.happinessLevel.toLowerCase() === "low" && pet.energyLevel.toLowerCase() === "low") {
                console.log(pet.name + " has been put to sleep");
                pet.happinessLevel = "high";
                pet.energyLevel = "high";
            } else {
                console.log(pet.name + " has already slept");
            }
        }
    },
    checkStatus(name) {
        return this.pets.filter(pet => pet.name.toLowerCase().includes(name.toLowerCase()));
    }
};

const p = Object.create(petSimulator);
p.addPet("Bruno", "Dog", "high", "low", "low");
//p.feedPet("Bruno");
//p.playWithPet("Bruno");
p.putPetToSleep("Bruno");
console.log(p.checkStatus("Bruno"));
