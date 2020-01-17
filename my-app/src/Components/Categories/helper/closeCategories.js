let workWithCategories = [];
let recursion = (data , subId, level=0) => {
    if(!data[subId]) return
    for (let t=0; t<data[subId].length; t += 1) {
        const child = data[subId][t];
        child.ofset = level;
        workWithCategories.push(child.id);
        recursion(data, child.id, level+1);
    }
}

let closeCategories = (id, categories) => {
    let obj = {};
    for (let t=0; t < categories.length; t += 1) {
        const category = categories[t];
        const parentId = category.parentId;
        const currentCategory = obj[parentId] || []
        obj[parentId] = [ ...currentCategory, category ];
    }
    recursion(obj, id)
    return workWithCategories;
}

export default closeCategories;