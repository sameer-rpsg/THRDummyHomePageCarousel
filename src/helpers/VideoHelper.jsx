export const isYouTubeUrl = (url) => {
  const regex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// Function to fetch YouTube video duration
export const getYouTubeVideoDuration = async (videoId) => {
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=contentDetails&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      const duration = data.items[0].contentDetails.duration;
      return parseYouTubeDuration(duration);
    } else {
      throw new Error("Invalid video ID or video not found");
    }
  } catch (error) {
    console.error("Error fetching YouTube video duration:", error);
    return null;
  }
};

export const parseYouTubeDuration = (duration) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  const seconds = match[3] ? parseInt(match[3]) : 0;

  const formattedDuration = [
    hours ? `${hours}` : null,
    minutes ? `${minutes}` : null,
    seconds ? `${seconds}` : "0",
  ]
    .filter(Boolean)
    .join(":");

  return formattedDuration;
};

export const getRegularVideoDuration = (url) => {
  return new Promise((resolve, reject) => {
    const videoElement = document.createElement("video");
    videoElement.src = url;

    videoElement.onloadedmetadata = function () {
      const duration = videoElement.duration;
      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60);

      const formattedDuration = [
        minutes ? `${minutes}` : null,
        `${seconds < 10 ? "0" : ""}${seconds}`,
      ]
        .filter(Boolean)
        .join(":");

      resolve(formattedDuration);
    };

    videoElement.onerror = function () {
      reject("Error loading video metadata");
    };
  });
};

// Function to fetch YouTube video count
export const getYouTubeVideoViewsCount = async (videoId) => {
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=statistics&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      const statistics = data.items[0].statistics;
      const views = statistics.viewCount;
      return parseYouTubeViewsCount(views);
    } else {
      throw new Error("Invalid video ID or video not found");
    }
  } catch (error) {
    console.error("Error fetching YouTube video count:", error);
    return null;
  }
};

export const parseYouTubeViewsCount = (views) => {
  if (views >= 1_000_000_000) {
    return `${(views / 1_000_000_000).toFixed(1)}B views`;
  } else if (views >= 1_000_000) {
    return `${(views / 1_000_000).toFixed(1)}M views`;
  } else if (views >= 1_000) {
    return `${(views / 1_000).toFixed(1)}K views`;
  } else {
    return `${views} views`;
  }
};

// Function to fetch YouTube video thumbnail
export const getYouTubeThumbnail = (url, quality = "maxresdefault") => {
  const videoId = isYouTubeUrl(url);
  if (!videoId) return null;

  const qualityMap = {
    default: `https://img.youtube.com/vi/${videoId}/default.jpg`,
    mqdefault: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    hqdefault: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`, // Default (High Quality)
    sddefault: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
    maxresdefault: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, // Highest Quality
  };
  return qualityMap[quality] || qualityMap["hqdefault"];
};
