function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function handleInput() {
    output.innerText = input.value;
    console.log("Input value:", input.value);

}

const input = document.getElementById("input");
const output = document.getElementById("output")
const debouncedHandler = debounce(handleInput, 1000);

input.addEventListener("input", debouncedHandler);
