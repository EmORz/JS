function radianToDegree(input) {
    let radian = Number(input.shift());
    let degree = radian * 180 / Math.PI;
    console.log(degree.toFixed(0));
}
radianToDegree([6.2832]);