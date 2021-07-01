export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data =  await res.json();

    const paths =  data.map(user => {
        return {
            params : {id : user.id.toString()}
        }
    })

    return {
       paths,
       fallback:false
    }
}

export const getStaticProps = async (context) =>{

    const id =  context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+ id);
    const data = await res.json();

    return {
        props: {user: data}
    }
}

const Details = ({user}) => {
    return ( 
        <div>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.website}</h1>
            <h1>{user.address.city}</h1>
        </div>
     );
}
 
export default Details;