<script>
  let password = "";
  let passwordsVault = [];
  $: isValidPassword = password.length > 5 && password.length <= 10;

  const addPasswordToVault = () => {
    if (isValidPassword) {
      passwordsVault = [...passwordsVault, { password, id: Math.random() }];
      password = "";
    }
  };

  const removePassword = (passwordId) => {
    passwordsVault = passwordsVault.filter(({ id }) => id !== passwordId);
  };
</script>

<h1>Response</h1>

<input type="password" bind:value={password} />
<button disabled={!isValidPassword} on:click={addPasswordToVault}
  >Add to password vault</button
>

{#if password.length <= 5}
  <p>Too short</p>
{:else if password.length > 10}
  <p>Too long</p>
{:else}
  <p>{password}</p>
{/if}

<ul>
  {#each passwordsVault as pw (pw.id)}
    <li on:click={() => removePassword(pw.id)}>{pw.password}</li>
  {/each}
</ul>
