<script>
  import CustomInput from "./CustomInput.svelte";
  import Toggle from "./Toggle.svelte";
  import { isEmailValid } from "./validations";

  let val = "Nico";
  let selectedOption = 1;
  let price = 0;
  let agreed = false;
  let favColor = ["red", "blue"];
  let singleFavColor = "green";
  let inputRef;
  let divRef;
  let customInputRef;
  let enteredEmail = "";
  let formIsValid = false;

  $: if (isEmailValid(enteredEmail)) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }
  $: console.log(val);
  $: console.log(selectedOption);
  $: console.log(price);
  $: console.log(agreed);
  $: console.log(favColor);
  $: console.log(singleFavColor);
  $: console.log(customInputRef);

  const setValue = (ev) => (val = ev.target.value);

  const saveData = () => {
    console.log(inputRef.value);
    console.dir(divRef);
    customInputRef.empty();
  };
</script>

<!-- <input type="text" value={val} on:input={setValue} /> -->

<input type="text" bind:value={val} />
<CustomInput bind:val bind:this={customInputRef} />
<Toggle bind:chosenOption={selectedOption} />
<input type="number" bind:value={price} />

<label>
  Agree to terms?
  <input type="checkbox" bind:checked={agreed} />
</label>

<h1>Favorite color?</h1>

<label>
  <input type="checkbox" value="red" name="color" bind:group={favColor} />
  red
</label>
<label>
  <input type="checkbox" value="blue" name="color" bind:group={favColor} />
  blue
</label>
<label>
  <input type="checkbox" value="green" name="color" bind:group={favColor} />
  green
</label>

<select bind:value={singleFavColor}>
  <option value="green">Green</option>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
</select>

<hr />

<input type="text" bind:this={inputRef} />
<button on:click={saveData}>save</button>

<div bind:this={divRef} />

<hr />

<form on:submit|preventDefault>
  <input
    type="email"
    bind:value={enteredEmail}
    class={isEmailValid(enteredEmail) ? "" : "invalid"}
  />
  <button type="submit" disabled={!formIsValid}>Save</button>
</form>

<style>
  .invalid {
    border: 1px solid red;
  }
</style>
