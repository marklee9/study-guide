/*

Animal Shelter: 

An animal shelter, which holds only dogs and cats, operates 
on a strictly "first in, first out" basis. People must adopt 
either the "oldest"(based on arrival time) of all animals at 
the shelter, or they can select whether they would prefer a 
dog or a cat (and will receive the oldest animal of that type).
They cannot select which specific animal they would like.

Create the data structures to maintain this system and implement 
operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat.
You may use the built - in LinkedList data structure.

*/

// O(n^2) time, O(n) space
class Animal{
  constructor(name) {
    this.name = name;
    this.order = null;
  }
}

class AnimalShelter{
  constructor() {
    this.dogs = [];
    this.cats = [];
    this.order = 0;
  }

  queueDog(dog) {
    dog.order = this.order;
    this.order++;
    this.dogs.push(dog);
  }

  queueCat(cat) {
    cat.order = this.order;
    this.order++;
    this.cats.push(cat);
  }

  dequeueAny(){
    if (this.dogs[0].order > this.cats[0].order) {
      return this.dogs.shift();
    } else {
      return this.cats.shift();
    }
  }

  dequeueCat(){
    return this.cats.shift();
  }

  dequeueDog(){
    return this.dogs.shift();
  }
}
