import './App.css';

const Greet = (prop) => {
   return(<h1>Hello, {prop.name}!</h1>);
}

function App() {
    return (
        <div class="screen">
            <Greet name="User"/>
            <p>
                Congratulations! you have reached the pre-production stages of my website! If you want <br/> 
                to be a member of Incon you simply just need to help commit into the repository <br/>
                <a 
                class='goRepoBtn' 
                href="https://github.com/icesotope41/Varsatile-Icesotope-Blogs" 
                target="_blank">
                    Varsatile-Icesotope-Blogs
                </a> 
            </p>
        </div>
    );
}

export default App;
