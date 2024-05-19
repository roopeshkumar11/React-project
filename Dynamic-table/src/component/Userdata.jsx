const Userdata=({users=[]})=>{

    return(
        <>
        
        {

            users.map((curuser)=>{
                const {id,name,email}=curuser
                const {city}=curuser.address
                return (

             
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{city}</td>
                    </tr>
                )
            })
}</>
    )
    
    

}

export default Userdata



