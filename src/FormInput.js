import './App.css'

function FormInput({handleChange, formInputData, handleSubmit}){
    return(
        <div className="form">
          <div className="row">
            <label for="fullName">Fullname</label>
            <input type="text" onChange={handleChange} value={formInputData.fullName} name="fullName" className="form-control"  placeholder="Full Name" />
          </div>
          <div className="row">
          <label for="emailAddress">Email</label>
            <input type="email" onChange={handleChange} value={formInputData.emailAddress} name="emailAddress" className="form-control" placeholder="Email Address" />
          </div>
          <div className="row">
          <label for="salary">Password</label>
            <input type="text" onChange={handleChange} value={formInputData.salary} name="password" className="form-control" placeholder="Password" />
          </div>
          <div className="row">
            <input type="submit" onClick={handleSubmit} className="btn btn-primary" />
          </div>
        </div>
     
      
    )
    }
    
    export default FormInput;   