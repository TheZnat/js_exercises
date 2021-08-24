export let getTriangleArea = (heightTriangle, hypotenuseTriangle) => {
    return Math.round(0.5 * heightTriangle * hypotenuseTriangle);
}
console.log(getTriangleArea(5,10));