let treeCategories = [];

let recursion = (data , subId=0, level=0) => {
    if(!data[subId]) return
    for (let t=0; t<data[subId].length; t += 1) {
        const child = data[subId][t];
        child.ofset = level;
        treeCategories.push(child);
        recursion(data, child.id, level+1);
    }
}

let showCategories = (categories) => {
    let obj = {};
    for (let t=0; t < categories.length; t += 1) {
        const category = categories[t];
        const parentId = category.parentId;
        const currentCategory = obj[parentId] || []
        obj[parentId] = [ ...currentCategory, category ];
    }
    recursion(obj);
    return treeCategories
}

export default showCategories;