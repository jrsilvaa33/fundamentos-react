import { Post } from "./Post";

function App() {
  return (
    <div>
      <Post
        author="Diego Fernandes"
        contest="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, ratione libero rerum, voluptatibus beatae pariatur quasi, illum debitis culpa cupiditate non labore et quaerat deserunt aperiam dolore nisi temporibus delectus?"
      />

      <Post
      author="José Rildo"
      contest="Conteúdo novo e de interesse geral"
      />
    </div>
  )
}

export default App;
