import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://books-backend.p.goit.global/',
});

export const requestCategoryList = async () => {
  const { data } = await instance.get('books/category-list');
  return data;
};

export const requestBooksByCategory = async (category) => {
  const { data } = await instance.get(`books/category`, {
    params: {
      category, 
    },
  });
  return data;
};
