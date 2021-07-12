import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Css/Register.css'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineGoogle } from 'react-icons/ai'
import Side from '../../images/world.png'

function Register(props) {
    const stateInitail = {first_name:'', last_name:'', username:'', email:'', password:'', role:'', id_organism:''}
    const [infos, setInfos] = useState(stateInitail)
    const [organism, setOrganism] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5050/api/allOrganism')
        .then((response) => {
            setOrganism(response.data)
        })
    }, [])
    const handleChange = (event) => {
        setInfos({
            ...infos,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const {data} = await axios.post('http://localhost:5050/api/addUser', infos)
            if (data) {
                console.log(data)

                props.history.push('/login')
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div className="card card0 border-0">
                <div className="row d-flex">
                    <div className="col-lg-6">
                        <div className="card1 pb-5 ">
                            <div className="row px-3 justify-content-center mb-5 border-line mg"> <img src={Side} alt='HOME' className="image" /> </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card2 card border-0 px-4 py-5">
                            <div className="row mb-4 px-3">
                                <h6 className="mr-4 mt-2 mb-3">Sign in with</h6>
                                <div className="facebook text-center mr-3">
                                    <FaFacebookF />
                                </div>
                                <div className="twitter text-center mr-3">
                                    <AiOutlineGoogle />
                                </div>
                            </div>
                            <div className="row px-3 mb-4">
                                <div className="line"></div><small className="or text-center">Or</small>
                                <div className="line"></div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="row px-3"> 
                                    <div className="col">
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">First Name</h6>
                                        </label> 
                                        <input className="mb-4" type="text" name="first_name" placeholder="Enter a valid email address" onChange={handleChange} />
                                    </div>
                                    <div className="col">
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Last Name</h6>
                                        </label> 
                                        <input className="mb-4" type="text" name="last_name" placeholder="Enter a valid email address" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row px-3"> 
                                    <div className="col">
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Username</h6>
                                        </label> 
                                        <input type="text" name="username" placeholder="Enter password" onChange={handleChange} /> 
                                    </div>
                                    <div className="col">
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Email</h6>
                                        </label> 
                                        <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row px-3"> 
                                    <div className="col">
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Password</h6>
                                        </label> 
                                        <input type="password" name="password" placeholder="Enter password" onChange={handleChange} /> 
                                    </div>
                                    <div className="col">
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Role</h6>
                                        </label> 
                                        <select id="inputState" name="role" className="form-select" onChange={handleChange} >
                                            <option disabled selected>Choose...</option>
                                            <option>Admin</option>
                                            <option>Technician</option>
                                        </select>
                                        {/* <input className="mb-4" type="text" name="role" placeholder="Enter a valid email address" /> */}
                                    </div>
                                </div>
                                <div className="row px-4"> 
                                    <label className="mb-1">
                                        <h6 className="mb-0 text-sm">Organism</h6>
                                    </label> 
                                    <select id="inputState" name="id_organism" className="form-select" onChange={handleChange} >
                                        <option disabled selected>Choose...</option>
                                        {organism.map((org, index) => {
                                            return <option key={index} value={org._id}> {org.organism_name} </option>
                                        })}
                                    </select>
                                    {/* <input className="mb-4" type="text" name="id_organism" placeholder="Enter a valid email address" />  */}
                                </div>
                                <div className="row px-3 mb-4">
                                    <Link to="#" className="ml-auto mb-0 text-sm">Forgot Password?</Link>
                                </div>
                                <div className="row mb-3 px-3"> 
                                    <button type="submit" className="btn btn-blue text-center">Register</button> 
                                </div>
                            </form>
                            <div className="row mb-4 px-3"> <small className="font-weight-bold">Have an account? <Link to='/login' className="text-danger ">Login</Link></small> </div>
                        </div>
                    </div>
                </div>
                <div className="bg-blue py-4">
                    <div className="row px-3"> <small className="ml-4 ml-sm-5 mb-2"></small>
                        <div className="social-contact ml-4 ml-sm-auto"> <span className="fa fa-facebook mr-4 text-sm"></span> <span class="fa fa-google-plus mr-4 text-sm"></span> <span class="fa fa-linkedin mr-4 text-sm"></span> <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Register
