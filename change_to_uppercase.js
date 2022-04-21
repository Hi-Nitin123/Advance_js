function capitalize(st) {
  if (st[0].toUpperCase() == true) {
    return st;
  } else {
    return st[0].toUpperCase() + st.slice(1, st.length);
  }
}
console.log(capitalize("nitin"));
