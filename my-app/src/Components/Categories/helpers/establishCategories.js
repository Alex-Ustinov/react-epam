import { recursion } from './recursion';

export const establishCategories = (categories, flag, id) => {
    let obj = {};
    let treeCategories = [];
    for (let t=0; t < categories.length; t += 1) {
        const category = categories[t];
        const parentId = category.parentId;
        const currentCategory = obj[parentId] || [];
        obj[parentId] = [ ...currentCategory, category ];
    }
    recursion(obj, id, 0, treeCategories, flag);
    return treeCategories;
}