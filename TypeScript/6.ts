function reverse(str: string): string;
function reverse(arr: number[]): number[];
function reverse(value: string | number[]): string | number[] {
    if (typeof value === "string") {
        return value.split("").reverse().join("");
    }
    else {
        return value.slice().reverse();
    }
}

console.log(reverse('isocrates'));
console.log(reverse([1,2,3,4,5,6]));