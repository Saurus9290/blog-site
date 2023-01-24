import Header from "../components/Header";
 
const AuthorPage = () => {
  return ( 
    <div className="container">
      <Header/>
      <div className="inner-container">
<h1>About the Author: Saurabh</h1>
<img src="./img/Author.png" alt="Author" className="hero-image"/>
<p>In the past 10 months, I've learned the basics of HTML, CSS, and JavaScript, built several personal projects, and landed my first job as a web developer. It's been a challenging, but rewarding journey and I'm excited to continue growing and expanding my skills.</p>
      </div>
    </div>
  );
}
 
export default AuthorPage;