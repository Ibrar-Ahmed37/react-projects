// This is a website which fetches images from the pixabay api, and also allows the user to search the keywords and then generate images.
// Users have the ability to select number of images
// I have reduced the number of API calls whenever user types by using the debouncing technique
// DEBOUNCING TECHNIQUE => On every input field change, i set a settimeout to fetch the images, the setTimeout take two params As
setTimeout(()=> fetchImages, 500). THis will delay the fetch call for 500 ms and will only run after 500 ms of the inactivity and before this i clear the unique identifier timeout by =>
clearTimeout

so the flow is on every input field change

func handleSearchTextChange
if(setTypingTimeOut) //if the timeout is already selected, clear it
clearTimeOut(setTypingTimeOut)
const timeout = setTimeOut(()=>fetchImages(),500)
setTypingTimeOut(timeout)

ALSO TRYING to remove it when the component unmounts
useEffect(()=>{
return ()=>{
    if(typingTimeOut {clearTimeOut(typingTimeOut)}
    )}
})
