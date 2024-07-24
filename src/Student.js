function Student(props){
    return(
        <div style={{backgroundColor: "skyblue",margin:10}}>
            
            <h1>Hello {props.name.s1}</h1>
            <h1>Hello {props.name.s2}</h1>
            <h1>emial {props.email}</h1>
             
        </div>
    )
}
export default Student