import image1858 from '/Lab_05/Image1858.png'
import Search from '/Lab_05/Search.png'
import Bell from '/Lab_05/Bell 1.png'
import q1 from '/Lab_05/Question 1.png'
import a313 from '/Lab_05/Avatar 313.png'

function Header(){
    return(
           <div className="header flex items-center space-x-2 p-6 border-b">
                  <img src={image1858} alt="logo" className='' />
                  <h2 className='text-pink-500 text-2xl font-bold justify-between text-center ml-10'> DASHBOARD</h2>
                  <img src={Search} alt="" className='ml-170'/>
                  <input type="text" name="" id="" placeholder='Search...' className='border p-2 rounded-lg w-75 bg-gray-100'/>
                  <img src={Bell} alt="" className='m-3' />
                  <img src={q1} alt="" className='m-3' />
                  <img src={a313} alt=""className='m-3'/>
                  </div>
    );
}
export default Header;