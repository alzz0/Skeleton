import React from "react"

const ProjectDetails =props=> {
const id =props.match.params.id
console.log(id)
        return(
            
        <div>
            <h1>{id}</h1>
            </div>
        )
    
}
export default ProjectDetails