import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ImageGallery } from "./components/ImageGallery";
import { SearchImage } from "./components/SearchImage";
import axios from "axios";
function App() {
  const [searchText, setSearchText] = useState("");
  const [imagesData, setImagesData] = useState([]);
  const [maxCount, setMaxCount] = useState(20);
  const [isLoading, setIsLoading] = useState(true);
  const [typingTimeOut, setTypingTimeout] = useState(null);
  const key = import.meta.env.VITE_PIXABAY_API;

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${key}&q=${searchText}&image_type=photo&pretty=true`
      );
      const newImages = response.data.hits.slice(0, maxCount);
      setImagesData(newImages);
    } catch (error) {
      console.log("ERROR", error);
    }
    setIsLoading(false);
  };

  const handleSearchTextChange = (value) => {
    setSearchText(value);
    if (typingTimeOut) clearTimeout(typingTimeOut);

    const timeOut = setTimeout(() => {
      fetchImages();
    }, 500);

    setTypingTimeout(timeOut);
  };

  useEffect(() => {
    if (typingTimeOut) clearTimeout(typingTimeOut);
    const timeOut = setTimeout(() => fetchImages(), 500);
    setTypingTimeout(timeOut);
    return () => {
      console.log("UNMOUNTING");
      if (typingTimeOut) clearTimeout(typingTimeOut);
    };
  }, [searchText,maxCount]);

  return (
    <>
      {isLoading && <h1>LOADING ...</h1>}
      {!isLoading && (
        <>
          <SearchImage
            maxCount={maxCount}
            setMaxCount={(value) => setMaxCount(value)}
            searchText={searchText}
            handleSearchTextChange={handleSearchTextChange}
          />
          <ImageGallery imagesData={imagesData} />
        </>
      )}
    </>
  );
}

export default App;
