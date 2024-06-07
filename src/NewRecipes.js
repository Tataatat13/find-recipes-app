


function NewRecipes ({label, image, ingredients,type, cuisine, frees}){

    return(<div className="head">
        <div className="container">
            <h2>{label}</h2>
        </div>
        <div className="container">
            <img  className="foodfoto" src={image} alt="foto" width="300px"/>
        </div>
        <div className="type">
            <h3>cuisine Type: {cuisine}</h3>
            <h3>meal Type: {type}</h3>
        </div>
        <div className="type">
        <ul>
            <h4>Ingredients: </h4>
            {ingredients.map((ingredient, index) => (
                <li key={index}>
                    <img src="https://img.icons8.com/?size=100&id=13902&format=png&color=000000" alt="icon" width="20px"/>
                    {ingredient}</li>
            ))}
        </ul>
        <ul>
        <h4>health Labels</h4>
            {frees.map((free,index) => (
                <li key={index}>
                    <img src="https://img.icons8.com/?size=100&id=13902&format=png&color=000000" alt="icon" width="20px"/>
                    {free}</li>
            ))}
        </ul>
        </div>
    </div>

    )
}
export default NewRecipes;