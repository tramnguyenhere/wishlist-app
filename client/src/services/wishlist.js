import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setWishlist } from '../redux/features/wishlistSlice';
const baseUrl = 'http://localhost:5000/api/wishlist';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (item) => {
  const newItem = { item, available: true, id: item.id };
  const response = await axios.post(baseUrl, newItem);
  return response.data;
};

const update = (changedObject) => {
  const request = axios.patch(`${baseUrl}/${changedObject.id}`, {
    available: false,
  });
  return request.then((response) => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createNew, update };