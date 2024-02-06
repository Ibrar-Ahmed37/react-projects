import { useEffect, useState } from "react";
import "./App.css";
import { ImageCard } from "./ImageCard";
import { InputSearch } from "./InputSearch";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [images,setImages] = useState();
  const [firstLoad,setFirstLoad] = useState(true)
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (value) => {
      // setLastSearchText(value);
      console.log("value",value);
      setFilterText(value);
      const newImages = images.filter(image => { const tagsArray = image.tags.toLowerCase().split(',')
      return tagsArray.some((tag)=> tag.includes(value.toLowerCase()))}) 
      setImages(newImages);
      console.log("FILTERED IMAGES",images)
    }


  useEffect(() => {

    const fetchImages = async () => {
      const apikey = import.meta.env.VITE_PIXABAY_API_KEY;
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${apikey}&q=${term}&image_type=photo&pretty=true`
        );
        const data = await response.json();
        setImages(data.hits);
        setIsLoading(false);
        console.log(images);
      } catch (error) {
        console.log("Error Occured while fetching API ", error);
      }
      setIsLoading(false);
    };
    if(filterText === '' && firstLoad ){
      setFirstLoad(false);
      fetchImages();
    }
    else if(filterText === '')
          fetchImages();

  }, [filterText]);


  return <>
        <InputSearch  handleFilterChange={handleFilterChange}/>
        {isLoading && <h1 className=""> Loading ...</h1>}
        {!isLoading && images.length===0 && <h1> No images To show</h1>}
        {/* {!isLoading && images && } */}
        {!isLoading && images.length>0  && <div className="container mx-auto"><div className="grid grid-cols-3 gap-3">{images.map((image)=><ImageCard image={image} key={image.id}/>)}</div></div>}
  </>;
}

export default App;
