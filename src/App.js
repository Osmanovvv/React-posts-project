import React, { useState, useRef } from "react";
import "./styles/App.css"
// import Counter from "./components/Counter";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'аа', body: 'бб'},
    {id: 2, title: 'гг 2', body: 'аа'},
    {id: 3, title: 'вв 3', body: 'яя'},
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const[searchQuery, setSearchQuery] = useState('')

  const sortedPosts = [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MyInput 
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Поиск...'
        />
        <MySelect 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options = {[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
      </div>
      {posts.length !== 0
        ? 
        <PostList remove={removePost} posts={sortedPosts}  title="Посты про JS"/>
        : 
        <h1 style={{textAlign: "center"}}>
          Посты не найдены!
        </h1>
      }
    </div>
  );
}

export default App;
