# Koy UI

UI libirary for Svelte and SvelteKit

## Installation

```bash
npm install koy-ui
```

## Usage

```svelte
<script>
  import { Button } from 'koy-ui';

  function handleClick() {
    alert('Button clicked');
  }

</script>

<Button on:click={handleClick}>Click me</Button>
```
