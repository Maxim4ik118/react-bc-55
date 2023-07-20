import axios from 'axios';

const $instance = axios.create({
  baseURL: 'https://books-backend.p.goit.global/',
});

const $postInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const requestCategoryList = async () => {
  const { data } = await $instance.get('books/category-list');
  return data;
};

export const requestBooksByCategory = async category => {
  const { data } = await $instance.get(`books/category`, {
    params: {
      category,
    },
  });
  return data;
};

export const requestCommentsByPostId = async postId => {
  const { data } = await $postInstance.get(`comments`, {
    params: {
      postId,
    },
  });
  return data;
};
