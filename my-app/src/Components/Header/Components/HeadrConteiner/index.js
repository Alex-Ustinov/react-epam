import React from 'react';
import { connect } from 'react-redux';

import Header from '../HeadConteiner/index'
import { appendMainCategoryCreater } from '../../../../store/Actions/category-actions';

const mapStateToProps = state => ({
    categories: state.categoriesData.categories,
})


const mapDispatchToProps = dispatch => ({
    addMainCategory: nameCategory => {
        dispatch(appendMainCategoryCreater(nameCategory))
    },
})
const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header)

export default HeaderContainer

