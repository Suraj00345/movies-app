


export const Filters = ({setFilter}) =>{
    const onChangeFilters = (e) =>{
        const value = e.target.value;
        setFilter(value);
    }
    
    
    return (
        
        <form onChange={onChangeFilters} className="form">
        <input value="1" type="radio" name="rating" id="rating1"/>
        <label htmlFor="rating1">Rating Above 8</label>


        <input value="2" type="radio" name="rating" id="rating2"/>
        <label htmlFor="rating2">Rating below 8</label>
        
        <button htmlFor="button" onClick={() => setFilter("")}>Clear Filter</button>
    </form>
   )
}