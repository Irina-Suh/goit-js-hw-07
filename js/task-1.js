console.log('--------- task - 1------------');

const List = document.getElementById('categories');

const Items = List.querySelectorAll('.item');

console.log('Number of categories:', Items.length);

Items.forEach(item => {
  const Title = item.querySelector('h2').textContent;
  const Elements = item.querySelectorAll('li');
    console.log(`Category: ${Title}`);
    console.log(`Elements: ${Elements.length}`);
});
