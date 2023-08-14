import React, { useState } from 'react'
import Login_page from './login_page'
import Payment_details from './Payment_details'
import AddtoCardTable from './AddtoCardTable'
// import Place_Order from './Place_Order'

export default function index() {
  const [state, setState] = useState("Login_page")

  console.log(state)
  return (
    <div>
      {
        state == "Login_page" && <Login_page setState={setState} /> ||
        state == "next_page" && <Payment_details setState={setState} /> ||
        state == "AddtoCardTable" && <AddtoCardTable  setState={setState}/>
      }

    </div>
  )
}
