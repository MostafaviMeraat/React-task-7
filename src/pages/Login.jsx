import { useReducer } from "react"
import { useNavigate } from "react-router-dom"

const ACTIONS = {
  CHANGE: 'changeOnInputs',
  LOGIN: 'login',
  CLEAR: 'clearAllInputs'
}

const initial = {
  input: '',
  name: '',
  email: '',
}

const reducer = (state, action) => {
  switch (action.type) {

    case ACTIONS.CHANGE:
      return { ...state, name: action.payload.name, email: action.payload.email }

    case ACTIONS.LOGIN:
      console.log(state)
      return { ...state, name: state.name, email: state.email }
    case ACTIONS.CLEAR:
      return { name: action.payload.name, email: action.payload.email }

    default: return state
  }
}

const Login = ({ setUser }) => {

  const [state, dispatch] = useReducer(reducer, initial)
  const navigate = useNavigate()

  const inputChange = (e) => {

    if (e.target.name === 'name') {
      dispatch({
        type: ACTIONS.CHANGE,
        payload: {

          input: e.target.name,
          name: e.target.value,
          email: state.email
        }
      })
    }

    else if (e.target.name === 'email') {
      dispatch({
        type: ACTIONS.CHANGE,
        payload: {

          input: e.target.name,
          name: state.name,
          email: e.target.value,
        }
      })

    }
  }

  const onSubmit = (e) => {
    if (state.name !== '' && state.email !== '') {
      e.preventDefault()
      dispatch({
        type: ACTIONS.LOGIN,
        payload: {
          name: state.name,
          email: state.email,
        }
      })
      setUser(state)
      setTimeout(() => {
        dispatch({
          type: ACTIONS.CLEAR,
          payload: {

            name: '',
            email: '',
          }

        })
      }, 1)

      navigate('/dashboard')
    }
    else if (state.name === '') {
      alert('name is empty')
    }
    else if (state.email === '') {
      alert('Email is empty')
    }

  }

  return (
    <div>
      <form>
        <div className="form">
          <p>Login</p>

          <label>Name</label>
          <input
            type='text'
            name='name'
            value={state.name}
            onChange={inputChange}

          /><br />

          <label>E-Mail</label>
          <input
            type='text'
            name='email'
            value={state.email}
            onChange={inputChange}

          /><br />

          <button onClick={onSubmit}>Login</button>

        </div>


      </form>

    </div>
  )
}

export default Login