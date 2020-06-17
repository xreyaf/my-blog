## Test task on Junior JS

Реализовать блог.
Приложение должно быть построено как одностраничное (SPA). Для обмена данными между клиентом и сервером использовать JSON

1) Страница “Home”. Главная страница, на которой отображаются все посты.
    [http://localhost:3000](http://localhost:3000/home)
    Получение данных:
    1. Посты: https://jsonplaceholder.typicode.com/posts
  
2) Страница “Post”. Страница для просмотра отдельного поста, комментариев к посту и
  информации об авторе этого поста.
    URL: /posts/:postId
    Получение данных:
    1. Один пост: https://jsonplaceholder.typicode.com/posts/postId
    2. Комментарии к посту: https://jsonplaceholder.typicode.com/posts/postId/comments
    3. Автор поста: https://jsonplaceholder.typicode.com/users/userId<br />
    postId это id поста берется из url<br />
    userId берется из поста

3) Страница “About”. Страница, содержащая информацию о блоге.
    [http://localhost:3000/about](http://localhost:3000/about)
    Получение данных не требуется, так как контент полностью статичный.
    
## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br />
To run the app:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

