let obj1 = {
  a: true,
};

// obj2 is a pointer, it is just a reference to obj1
let obj2 = obj1;
obj1.a = 'booya';

// one thing to note is that the delete command deletes the property and not the object itself.
// so accessing obj1 will still work.
delete obj1;

console.log(obj1, obj2);
