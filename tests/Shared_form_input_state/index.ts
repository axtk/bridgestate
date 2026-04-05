import { State } from "../../src/State.ts";

const formState = new State({ username: "" });

// Input

const input = document.querySelector("input")!;

input.addEventListener("input", () => {
  formState.setValue((state) => ({ ...state, username: input.value }));
});

// Output

const output = document.querySelector("output")!;
const defaultContent = output.textContent;

formState.on("update", ({ current }) => {
  output.textContent = current.username || defaultContent;
});
