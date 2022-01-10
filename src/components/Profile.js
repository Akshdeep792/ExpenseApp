import './Component.css'
import Name from './Name'
import Info from './Info'
function Profile(){
    return (
        <div className='head'>
            <div className='icon'>
            <a href="https://www.linkedin.com/in/akshdeep-singh-451941201/"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/akshdeep-singh-451941201/"><i class="fab fa-twitter"></i></a>
            </div>
        <div className="main">
            {/* <Image /> */}
            <Name />
            <div className='title'>Student, IIIT SONEPAT</div>
             <Info />
             {/* <div className='name'>Akshdeep Singh</div> */}
        </div>
        <div className='icon'>
        <a href="#"><i class="fas fa-user"></i></a> 
        <a href="https://www.linkedin.com/in/akshdeep-singh-451941201/"> <i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/akshdeep-singh-451941201/"><i class="fab fa-linkedin-in"></i></a>
        </div>
        </div>
    )
}

export default Profile