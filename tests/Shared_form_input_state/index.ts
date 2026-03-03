import { State } from "../../src/State.ts";

let formState = new State({ username: "" });

// Input

let input = document.querySelector("input")!;

input.addEventListener("input", () => {
  formState.setValue((state) => ({ ...state, username: input.value }));
});

// Output

let output = document.querySelector("output")!;
let defaultContent = output.textContent;

formState.on("update", ({ current }) => {
  output.textContent = current.username || defaultContent;
});
