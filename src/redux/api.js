import axios from 'axios';

export const getFlickr = async (opt) => {
  const key = '4612601b324a2fe5a1f5f7402bf8d87a';
  const method_interest = "flickr.interestingness.getList";
  const method_search = "flickr.photos.search";
  const method_user = "flickr.people.getPhotos";
  const num = 20;
  let url = '';

  if (opt.type === 'interest') {
    url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
  }
  if (opt.type === 'search') {
    url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tags}`;
  }
  if (opt.type === 'user') {
    url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${opt.user}`;
  }

  return await axios.get(url);
};

export const getYoutube = async () => {
  const key = 'AIzaSyByOo3f5Dbg1Oolz4k5o7wLMh8MqZvBfpE';
  const playlist = "PLB1H8mPTInYj4iSzZk-RJWdFna4MoqK47";
  const num = 6;
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

  return await axios.get(url);
}

export const getMembers = async () => {
  const url = process.env.PUBLIC_URL + '/DB/members.json';
  return await axios.get(url);
}

