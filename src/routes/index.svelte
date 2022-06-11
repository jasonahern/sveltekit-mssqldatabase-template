<!-- <script context="module">
    
    export async function load({ params, fetch, session, stuff }) {

        const data = await fetch('index');
        //console.log(response);
      return {
        //status: response.status,
        props: {
          lottery_data: await data
        }
      };
    }
  </script> -->

<script>
    export let lottery_data;
    //console.log(lottery_data);
    

    function rowClicked(rowID) {
        const findRowValues = lottery_data.find(lottery_data => lottery_data.id === rowID);
        console.log(findRowValues);   
    }

    // let keys = Object.keys(lottery_data[0]);
    // console.log(keys);
</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<table>
    <thead>
        <th>id</th>
        <th>recordNum</th>
        <th>drawDate</th>
        <th>ball 1</th>
        <th>ball 2</th>
        <th>ball 3</th>
        <th>ball 4</th>
        <th>ball 5</th>
        <th>ball 6</th>
        <th>wins</th>
    </thead>
    {#each lottery_data as item} 
    <tr on:click="{rowClicked(`${item.id}`)}">

            <td>{item.id}</td>
            <td>{item.record_num}</td>
            <td>{item.draw_date}</td>
            <td>{item.num1}</td>
            <td>{item.num2}</td>
            <td>{item.num3}</td>
            <td>{item.num4}</td>
            <td>{item.num5}</td>
            <td>{item.num6}</td>
            <td>{item.wins}</td>
    </tr>
    {/each}
</table>
