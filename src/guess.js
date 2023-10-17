function guess() {
  var shuffled = str
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
}
