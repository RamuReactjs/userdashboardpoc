import React, { useState } from 'react'

export default function UserManagement() {
  const [toggleState, setToggleState] = useState(1);
  const ToggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <div className='container-fluid userManagement'>
      <h1>User Management</h1>
      <div className='tabs'>
        <span className={toggleState === 1 ? "tabActive" : "tab"} onClick={() => ToggleTab(1)}>Create User</span>
        <span className={toggleState === 2 ? "tabActive" : "tab"} onClick={() => ToggleTab(2)}>Modify User</span>
        <span className={toggleState === 3 ? "tabActive" : "tab"} onClick={() => ToggleTab(3)}>Dormancy Configuration</span>
      </div>
      <div className='userManagementCreation'>

        <div className={toggleState === 1 ? "activeContent" : "content"}>
          <form className="row userForm g-4">
            <div className="col-md-6" >
              <label for="inputEmail4" class="form-label">User Id</label>
              <input type="text" class="form-control" placeholder='User Id'/>
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" class="form-label">Role name</label>
              <select id="inputState" class="form-select">
                <option selected>Role Name</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" class="form-label">Employee Name</label>
              <input type="text" class="form-control" placeholder='Employee Name'/>
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" class="form-label">Employee Code</label>
              <input type="text" class="form-control" placeholder='Employee Code'/>
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" class="form-label">Branch Name</label>
              <input type="text" class="form-control" placeholder='Branch Name'/>
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" class="form-label">Branch Code</label>
              <input type="text" class="form-control" placeholder='Branch Code'/>
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" class="form-label">Department Name</label>
              <input type="text" class="form-control" placeholder='Department Name'/>
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" class="form-label">Department Code</label>
              <input type="text" class="form-control" placeholder='Department Code'/>
            </div>
            <div className="col-6 float-end">
                <div className=''><button type="submit" className="btn btn-primary float-end Reset">Reset</button></div>
            </div>
            <div className="col-6">
                <div className=''><button type="submit" className="btn btn-primary Save">Save</button></div>
            </div>
          </form>
        </div>

        <div className={toggleState === 2 ? "activeContent" : "content"}> <strong>Modify User</strong> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
        <div className={toggleState === 3 ? "activeContent" : "content"}><strong>Dormancy Configuration</strong> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</div>
      </div>
    </div>
  )
}
