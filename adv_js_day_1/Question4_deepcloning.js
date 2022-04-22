function deepclone(alpha, {}) {
  if (typeof alpha !== "object" && typeof Array.isArray(alpha)) {
    return alpha;
  }
  let deep_alpha = {};
  if (Array.isArray(alpha)) {
    deep_alpha = [];
  }
  for (let key in alpha) {
    if (typeof alpha[key] === "object" || Array.isArray(alpha)) {
      deep_alpha[key] = deepclone(alpha[key], deep_alpha);
    } else {
      deep_alpha[key] = alpha[key];
    }
  }
  deep_alpha.__proto__ = alpha.__proto__;
  return deep_alpha;
}

const alpha = { a: "b", c: { d: { e: "f", g: "h", i: [1, 2, 4] } }, j: k };

const deep_alpha = deepclone(alpha, {});
deep_alpha.c.d.i = 5;
console.log(deep_alpha.c.d.i);

console.log(alpha.c.d.i);
