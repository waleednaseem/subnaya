
import My_account from '../SecondHeader/My_account'
import Logo_pane from '../SecondHeader/Logo_pane'
import Search_pane from '../SecondHeader/Search_pane'

export default function index({setSearchBox}) {
  return (
    
    <div className='flex justify-center items-center flex-col'>
     
        <div className='w-full p-2 flex justify-between '>
          <Logo_pane />
          <Search_pane setSearchBox={setSearchBox} />
          <My_account />
        </div>
        </div>
      
  )
}
