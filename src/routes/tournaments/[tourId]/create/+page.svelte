<script>
  let formFields = [
    'Edition',
    'Location'
  ]
</script>
<div class="flex flex-col w-[600px] border-2 border-blue-border px-8 py-8 gap-12 place-self-center">
  <h1 class="text-2xl">Tournaments</h1>
  <form method="POST" class="flex flex-col gap-2">
    {#each formFields as field}
    <label for="">{field}</label>
    <input 
      type={field.split(" ").join("").toLowerCase()} 
      name={field.split(" ").join("").toLowerCase()} 
      id={field.split(" ").join("").toLowerCase()} 
      class="text-midnight h-8 mb-4"
      required />
    {/each}
    <button type="submit" class="px-2 py-4 bg-orange">Confirm</button>
  </form>

</div>