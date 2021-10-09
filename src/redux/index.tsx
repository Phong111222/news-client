import { authActions, authReducers } from './auth'
import { newsActions, newsReducers } from './news'
import { categoryActions, categoryReducers } from './category'

import { formActions, formReducer } from './form'

const actions = {
    authActions,
    formActions,
    newsActions,
    categoryActions
}

const reducers = {
    authReducers,
    formReducer,
    newsReducers,
    categoryReducers

}

export { actions, reducers }