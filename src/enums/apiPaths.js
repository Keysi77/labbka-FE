const version = 'v0'
export const API_PATHS = {
    // ! Animals for adoptions
    ADD_ANIMAL: `/api/${version}/animals`,
    UPDATE_ANIMAL: (id) => `/api/${version}/animals/${id}`,
    GET_ANIMALS: `/api/${version}/animals`,
    GET_ONE_ANIMAL: (id) => `/api/${version}/animals/${id}`,
    DELETE_ANIMAL: (id) => `/api/${version}/animals/${id}`,
    MARK_ANIMAL_ADOPTED: (id) => `/api/${version}/animals/${id}/markAdoped`,
    MARK_ANIMAL_RETURNED: (id) => `/api/${version}/animals/${id}/markReturned`,

    // ! Shelters
    GET_SHELTERS: `/api/${version}/shelters`,

    // ! Login paths
    LOGIN_USER_FACEBOOK: `/api/${version}/users/loginFacebook`,
    LOGIN_USER_GOOGLE: `/api/${version}/users/loginGoogle`
}