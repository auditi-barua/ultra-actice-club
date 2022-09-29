// use local storage to manage cart data
const addToDb = id =>{
    let yoga = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('yoga-part');
    if(storedCart){
        yoga = JSON.parse(storedYoga);
    }

    // add quantity
    const quantity = yoga[id];
    if(quantity){
        const newQuantity = quantity + 1;
        yoga[id] = newQuantity;
    }
    else{
        yoga[id] = 1;
    }
    localStorage.setItem('yoga-part', JSON.stringify(yoga));
}

const removeFromDb = id =>{
    const storedYoga = localStorage.getItem('yoga-part');
    if(storedYoga){
        const yoga = JSON.parse(storedYoga);
        if(id in yoga){
            delete yoga[id];
            localStorage.setItem('yoga-part', JSON.stringify(yoga));
        }
    }
}

const deleteYoga = () =>{
    localStorage.removeItem('yoga');
}

export {
    addToDb, 
    removeFromDb,
    deleteYoga
}