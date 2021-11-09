import React, { useState } from "react";

class AddDetails extends React.Component {
   state = {
    id: "",
    name: "",
    age: "",
    is_manager: "",
    start_date:""
  };

  add = (e) => {
    e.preventDefault()
    if (this.state.name === "" || this.state.id === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addtoListHandler(this.state);
    
    this.setState({ id:"", name: "" ,age: "",is_manager: "",start_date:""});

  };
  render() {
    return (
      <div >
        <h2 > ADD DETAILS</h2>
        <form  onSubmit={this.add} >
          <div className="field">
            <label>ID</label>
            <input
              type="text"
              name="id"
              placeholder="ID"
              value={this.state.id}
              onChange={(e) => this.setState({ id: e.target.value })}
            />
          </div>

          <div className="field">
            <label>NAME</label>
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>AGE</label>
            <input
              type="text"
              name="age"
              placeholder="AGE"
              value={this.state.age}
              onChange={(e) => this.setState({ age: e.target.value })}
            />
          </div>


          <div className="field">
            <label>is_manager</label>
            <input
              type="text"
              name="is_manager"
              placeholder="is_manager"
              value={this.state.is_manager}
              onChange={(e) => this.setState({ is_manager: e.target.value })}
            />
          </div>
          <div className="field">
            <label>StartDate</label>
            <input
              type="text"
              name="start_date"
              placeholder="start_date"
              value={this.state.start_date}
              onChange={(e) => this.setState({ start_date: e.target.value })}
            />
          </div>
          
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddDetails;

/*const Dataserve = () => {

    const [students, setStudents] = useState(data);
    const [addStudentData, setAddStudentData ] = useState({
        name:'',
        age:'',
        manager:'',
        startdate:'',
    })

    const handleAddStudentChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newStudentData = { ...addStudentData};
        newStudentData[fieldName] = fieldValue;

        setAddStudentData(newStudentData);

    }

    const handleAddStudentSubmit = (event) => {
        event.preventDefault();

        const newStudent = {
            name : addStudentData.name,
           age : addStudentData.age,
            manager : addStudentData.manager,
            startdate : addStudentData.startdate,

            
        };

        const newStudents = [ ...students, newStudent];
        setStudents(newStudents);

    };

    return (<div className="class-container">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Manager</th>
                    <th>Start-Date</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.manager}</td>
                    <td>{student.startdate}</td>
                </tr>
                ))}
                
            </tbody>
        </table>
        <h2>New employee details</h2>
        <form onSubmit={handleAddStudentSubmit}>
            <input 
             type="text" 
             name="name" 
             required="required" 
             placeholder="Enter the name"
             onChange={handleAddStudentChange} 
            />
            <input 
             type="number" 
             name="age" 
             required="required" 
             placeholder="Enter the age"
             onChange={handleAddStudentChange}  
            />
            <input 
             type="text" 
             name="manager" 
             required="required" 
             placeholder="Enter the manager"
             onChange={handleAddStudentChange}
             />
             <input 
             type="text" 
             name="startdate" 
             required="required" 
             placeholder="Enter the startdate"
             onChange={handleAddStudentChange} 
            />
            <button type="submit">Add</button>
        </form>
    </div>
    );
};
export default Dataserve;*/