import axios from "axios";

axios.defaults.baseURL = `https://pixabay.com/api/`;
const api_key = `23089683-10e6383e94187ff47334541d4`;

export const getImagesApi = async (value, page) => {
  const { data } = await axios(
    `?q=${value}&page=${page}&key=${api_key}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
