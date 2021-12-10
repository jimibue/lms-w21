const foo = () => {
  return { x: 1, y: 2 };
};

const { x: z, y } = foo();

console.log(z);
console.log(y);
