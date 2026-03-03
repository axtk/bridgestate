import { State } from "../../src/State.ts";
import "./index.css";

let counterState = new State(42);

// The value changed by the buttons is displayed in the <output> element, but
// all elements interact only with the shared state, not with each other.

document.querySelector(".plus")!.addEventListener("click", () => {
  counterState.setValue((value) => value + 1);
});

document.querySelector(".reset")!.addEventListener("click", () => {
  counterState.setValue(0);
});

// A `"set"` event callback is called each time the state value changes and
// immediately when the callback is added. Subscribe to the `"update"` event
// to have the callback respond only to the subsequent state changes without
// the immediate invocation.
counterState.on("set", ({ current }) => {
  document.querySelector("output")!.textContent = String(current);
});
