import swal from 'sweetalert';
import * as types from '../../types';
import { apiRequest } from '../../apiRequests';

export const newBusiness = (business) => ({
  type: types.ADD_NEW_BUSINESS,
  business
});

export function create(businessData) {
  return dispatch =>
    apiRequest.business.create(businessData).then(business => {
      dispatch(business);
    });
}

export const getBusinessesSuccess = response => ({
  type: 'GET_BUSINESS',
  payload: response.results
});

export const deletedBusiness = (id) => ({
  type: types.DELETE_BUSINESS,
  id
});

export const editedBusiness = (business) => ({
  type: types.EDIT_BUSINESS,
  business
});


export const gotReviews = (reviews) => ({
  type: types.GET_REVIEWS,
  reviews
});

export const newReview = (reviews) => ({
  type: types.GET_REVIEWS,
  reviews
});

export const filteredBusinessesSuccess = (businesses) => ({
  type: types.FILTER_BUSINESS,
  businesses
});


export function deleteBusiness(businessId) {
  console.log('WDFERG', businessId)
  return dispatch => (apiRequest.business.delete(businessId)
    .then(() => {
        dispatch(deletedBusiness(businessId))
        window.location.assign('/businesses')
        swal("business Successfully deleted")
    })
    .catch(err=>{
      swal(err.response.data.message);
    })
  )
}

export function editBusiness(updatedBusiness, businessId) {
  return dispatch =>
    apiRequest.business.edit(updatedBusiness, businessId).then(business => {
      dispatch(editedBusiness(business));
    });
}

export function getReviews(businessId) {
  return dispatch =>
    apiRequest.business.reviews(businessId).then(reviews => {
      dispatch(gotReviews(reviews));
    });
}

export function addReviews(businessId, review) {
  return dispatch =>
    apiRequest.business.postReview(businessId, review).then(reviews => {
      dispatch(newReview(reviews));
    });
}

export function getBusinesses() {
  return dispatch =>
    apiRequest.business.businesses().then(businesses => {
      dispatch(getBusinessesSuccess(businesses));
    });
}

export function filterBusiness(businesses) {
  return dispatch =>
      dispatch(filteredBusinessesSuccess(businesses));
}