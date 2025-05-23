// HANDLING CLICK EVENTSIN REACT
// This is a simple React component that displays an image and hides it when clicked.
function Profilepicture() {
  const imageUrl = "./src/assets/small.jpeg"; // Replace with your image URL
  const handleClick = (e) => (e.target.style.display = "none");

  return (
    <dir>
      <img onClick={(e) => handleClick(e)} src={imageUrl} />
    </dir>
  );
}
export default Profilepicture;
