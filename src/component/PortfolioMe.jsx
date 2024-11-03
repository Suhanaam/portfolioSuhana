import React from 'react'

const PortfolioMe = () => {
  return (
   
<div style={{ backgroundColor: '#f8f9fa' }}>
     
     <nav className="navbar bg-body-tertiary fixed-top" >
     <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img
        src='public/suhana22.jpeg'
        alt="Logo"
        width={80}
        height={74}        
        className="d-inline-block align-text-top"
        style={{ borderRadius: '50%' }}
      />
      suhana a m
    </a>
  </div>
</nav>

     
<header className="bg-primary text-white text-center p-5" style={{ marginTop: '56px' }}>  
        <h1>Hello , I Am SUHANA A M</h1>  
        <p>Welcome to my personal portfolio page</p>  
      </header>  



      <section className="container my-5">  
        <h2>About Me</h2>  
        <p>  
          I am a passionate web developer with experience in creating dynamic and responsive web applications.  
          My goal is to build applications that make people's lives easier.  
        </p>  
      </section>  





      <section className="container my-5">  
        <h2>Skills</h2>  
        <ul className="list-group">  
          <li className="list-group-item">HTML</li>  
          <li className="list-group-item">CSS</li>  
          <li className="list-group-item">JavaScript</li>  
          <li className="list-group-item">React</li>  
          <li className="list-group-item">Node.js</li>  
          <li className="list-group-item">Bootstrap</li>  
        </ul>  
      </section>  



      <section className="container my-5">  
        <center><h2>My Projects</h2>  </center>
        <div className="row">  
          <div className="col-md-4">  
            <div className="card mb-4">  
              <img src="public/kt.png" className="card-img-top" alt="Project 1" />  
              <div className="card-body">  
                <h5 className="card-title">Kerala Tourism Webpage</h5>  
                <p className="card-text">Its a simple webpage created By using html,css & bootstrap,its my firststep to my oroject development</p>  
                <a href="https://suhanaam.github.io/suhanaKeralaTourism/" className="btn btn-primary">View Project</a>  
              </div>  
            </div>  
          </div>  
          <div className="col-md-4">  
            <div className="card mb-4">  
              <img src="public/todo.png" className="card-img-top" alt="Project 2" />  
              <div className="card-body">  
                <h5 className="card-title">To Do List</h5>  
                <p className="card-text">html,css,bootstrap and javascript</p>  
                <a href="https://suhanaam.github.io/module2EndAssignment/" className="btn btn-primary">View Project</a>  
              </div>  
            </div>  
          </div>  
          <div className="col-md-4">  
            <div className="card mb-4">  
              <img src="public/pf.png" className="card-img-top" alt="Project 3" />  
              <div className="card-body">  
                <h5 className="card-title">Profile Card</h5>  
                <p className="card-text">html,css ,bootstrap & javascript</p>  
                <a href="https://suhanaam.github.io/suhanaProfileCard/" className="btn btn-primary">View Project</a>  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>  



      <footer className="bg-light text-center p-4">  
        <h2>Contact Me</h2>  
        <p>Email: suhanapks@gmail.com</p>  
        <p>LinkedIn: <a href="">suhanaLinkedIn</a></p>  
      </footer>  
      



    </div>

  )
}

export default PortfolioMe