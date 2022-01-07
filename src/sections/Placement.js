import React from 'react'
import Select from 'react-select'
import {Table} from 'react-bootstrap'
 
const options = [
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
  { value: '2019', label: '2019' },
  { value: '2018', label: '2018' },
  { value: '2017', label: '2017' },
  { value: '2016', label: '2016' },
  { value: '2015', label: '2015' },
  { value: '2014', label: '2014' },
  { value: '2013', label: '2013' },
  { value: '2012', label: '2012' },
  { value: '2011', label: '2011' },
  { value: '2010', label: '2010' }
]



const Placement = () => {
    return (
        <section className='eventmain'>
            <div className="event1">
            <span className="event1text">Placements</span>
            </div>
            
            <div className='placecon'>
                <div className='select'>
                    <span className='pb'>PLACEMENT BATCH</span> <Select options={options} />
                </div>
            </div>

<div className='tablecon1'>
<div className='tablecon'>
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>S No.</th>
      <th>Organization Name</th>
      <th>No. of Students Selected</th>
      <th>Designation Offered</th>
      <th>Selected from Disciplines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      
      
    </tr>
    <tr>
      <td>3</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
     
      
    </tr>
    
  </tbody>
</Table>
            </div>

</div>
            
           
        </section>
    )
}

export default Placement
