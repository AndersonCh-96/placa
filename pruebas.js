const l = ["1", "2", "3"];
const cadena = "anderson1";
const dor = cadena.slice(-1);

console.log(
  l.filter((a) => {
    if (a === dor) {
      return a;
    }
    return null;
  })
);
