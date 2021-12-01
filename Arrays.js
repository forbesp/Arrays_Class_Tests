// example of push - adds new item at the end

const birds = ['Magpie', 'Galah', 'Cockatoo', 'Rosella', 'Crow', 'Lorikeet'];

birds.push('King Parrot');

birds; // (7) ['Magpie', 'Galah', 'Cockatoo', 'Rosella', 'Crow', 'Lorikeet', 'King Parrot']


// example of unshift - adds new item at the start

const birds = ['Magpie', 'Galah', 'Cockatoo', 'Rosella', 'Crow', 'Lorikeet'];

birds.unshift('Noisy Minor');

birds; // (7) ['Noisy Minor', 'Magpie', 'Galah', 'Cockatoo', 'Rosella', 'Crow', 'Lorikeet']


// example of pop - removes last item

const birds = ['Magpie', 'Galah', 'Cockatoo', 'Rosella', 'Crow', 'Lorikeet'];

birds.pop();

birds; // (5) ['Magpie', 'Galah', 'Cockatoo', 'Rosella', 'Crow']


// example of shift - removes first item

const birds = ['Magpie', 'Galah', 'Cockatoo', 'Rosella', 'Crow', 'Lorikeet'];

birds.shift();

birds; // (5) ['Galah', 'Cockatoo', 'Rosella', 'Crow', 'Lorikeet']


// example of slice - removes items from a copy without changing the original (nondestuctive)

const birds = ['Magpie', 'Galah', 'Cockatoo', 'Rosella', 'Crow', 'Lorikeet'];

const birdsOther = birds.slice(2);

birds.push('Major Mitchell');

birds; // (7) ['Magpie', 'Galah', 'Cockatoo', 'Rosella', 'Crow', 'Lorikeet', 'Major Mitchell']

birdsOther; (4) // ['Cockatoo', 'Rosella', 'Crow', 'Lorikeet']


// example of splice - removes items from within (destuctive)

const birds = ['Magpie', 'Galah', 'Cockatoo', 'Rosella', 'Crow', 'Lorikeet', 'Major Mitchell'];

birds.splice(2, 5); // (5) ['Cockatoo', 'Rosella', 'Crow', 'Lorikeet', 'Major Mitchell']

birds; // (2) ['Magpie', 'Galah']


// example of splice replacing text

const birds = ['Magpie', 'Galah', 'Cockatoo', 'Rosella', 'Crow', 'Lorikeet', 'Major Mitchell'];

birds.splice(2, 5, 'Ibis'); // (5) ['Cockatoo', 'Rosella', 'Crow', 'Lorikeet', 'Major Mitchell']

birds; // (3) ['Magpie', 'Galah', 'Ibis']


// spread operator using ellipsis

const birds = ['Magpie', 'Galah', 'Cockatoo', 'Rosella', 'Crow', 'Lorikeet', 'Major Mitchell'];

const copyOfBirds = [...birds]; // (7) ['Magpie', 'Galah', 'Cockatoo', 'Rosella', 'Crow', 'Lorikeet', 'Major Mitchell']

copyOfBirds; // (7) ['Magpie', 'Galah', 'Cockatoo', 'Rosella', 'Crow', 'Lorikeet', 'Major Mitchell']

copyOfBirds.splice(2, 1, 'Heron') // (7) ['Magpie', 'Galah', 'Heron', 'Rosella', 'Crow', 'Lorikeet', 'Major Mitchell']

copyOfBirds.splice(1, 2, 'Eagle', 'Hawk') //(7) ['Magpie', 'Eagle', 'Hawk', 'Rosella', 'Crow', 'Lorikeet', 'Major Mitchell']


/// example of slice and spread operator

const birds = ['Magpie', 'Galah', 'Cockatoo', 'Rosella', 'Crow', 'Lorikeet', 'Major Mitchell'];

const copyOfBirds = [...birds];

const copyOfBirdsSlice = birds.slice(2)

birds; // (7) ['Magpie', 'Galah', 'Cockatoo', 'Rosella', 'Crow', 'Lorikeet', 'Major Mitchell']

copyOfBirds; // (7) ['Magpie', 'Galah', 'Cockatoo', 'Rosella', 'Crow', 'Lorikeet', 'Major Mitchell']

copyOfBirdsSlice; // (5) ['Cockatoo', 'Rosella', 'Crow', 'Lorikeet', 'Major Mitchell']





/*   // keeping as example for html - still can't get it to work.
let mydiv = document.getElementById.("birds");

let text = " ";

document.getElementById("birds").innerHTML = text;
*/