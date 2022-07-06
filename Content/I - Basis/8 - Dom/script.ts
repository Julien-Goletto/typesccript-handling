// Type assertion on Dom elements
const form = document.querySelector('form');
console.log('form : ', form?.children); // usage du ? pour laisser la possibilité d'un elt null

const form1 : HTMLFormElement = document.querySelector('form')!; // le ! précise l'assertion à un elt non-null

// Type casting
// d'abord par élément
const form2 = document.querySelector('form') as HTMLFormElement;
console.log('form2 : ', form2);
const input = document.querySelector('input') as HTMLInputElement;
// Puis par classe
const submit = document.querySelector('.form__submit'); // de base, l'assertion renvoie un typage Element générique

const handleSubmit = (e : Event) => {
  e.preventDefault();
  console.log("Submitted");
}
form2.addEventListener('submit', handleSubmit);

// Mais Event est trop générique pour accèder à certaines props
const handleClick = (event: MouseEvent) => console.log(event.clientX, event.clientY);
window.addEventListener('click', handleClick);

const pList = document.querySelectorAll('p'); // Typecasting : querySelectorAll ne peut pas retourner de null, au pire []
// Le type casting est parfois trop : d'abord vérifier que l'assertion est correcte et sans ambiguité.
console.log(pList);