
const WelcomeMessage = ({handkeGetPostsClick}) => {
  return (
    <>
    <center><h1 className="welcome-message">There are no Posts</h1>
    <button type="button" className="btn btn-primary" onClick={handkeGetPostsClick}>Fetch Post</button>
    </center>
    </>
  )
}

export default WelcomeMessage