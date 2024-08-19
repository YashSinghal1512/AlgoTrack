import axios from 'axios';

const apiKey = 'AIzaSyAQo3wHs74mJA10Dp5kvDzDEPkgvtZtYq4';

export const fetchTutorialVideos = async (topic) => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: `${topic} dsa tutorial`,
        part: 'snippet',
        type: 'video',
        key: apiKey,
        maxResults: 5, 
      },
    });
    const videos = response.data.items.map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
    }));
    return videos;
  } catch (error) {
    throw new Error('Error fetching videos:', error);
  }
};
