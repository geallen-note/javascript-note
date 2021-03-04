function Test(target) {
  target.a = 1;
}

@Test()
class Hello {}

let he = new Hello();

console.log(he.a);
