fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response => response.json())
.then((result) => {
  console.log(typeof result);
  console.log(result);
  console.log(result.title);
  console.log(result.id);
  console.log(result.body);
});
