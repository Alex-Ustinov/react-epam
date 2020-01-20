export const recursion = (data , subId=0, level=0, treeCategories, flag) => {
    if(!data[subId]) return;
    for (let t=0; t < data[subId].length; t += 1) {
        const child = data[subId][t];
        child.ofset = level;
        flag ? treeCategories.push(child) : treeCategories.push(child.id);
        recursion(data, child.id, level+1, treeCategories, flag);
    }
}