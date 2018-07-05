import swal from 'sweetalert';
import * as types from '../../types';
import { apiRequest } from '../../apiRequests';

export const newBusiness = (newBusines) => ({
  type: types.ADD_NEW_BUSINESS,
  newBusiness
});

export function create(businessData) {
  return dispatch =>
    apiRequest.business.create(businessData).then(business => {
      dispatch(newBusiness);
    });
}


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

export function deleteBusiness(businessId) {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this business!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        return dispatch =>
          apiRequest.business.delete(businessId).then(id => {
            dispatch(deletedBusiness(id));
            window.location.assign('/businesses');
          });
      } else {
        swal("Your business is safe!");
      }
    });


  // .then((willDelete) => {
  //   if (willDelete) {
  //     swal("Poof! business has been deleted!", {
  //       icon: "success",
  //     });
  //   } else {
  //     swal("Your business is safe!");
  //   }
  // });
  return dispatch =>
    apiRequest.business.delete(businessId).then(id => {
      dispatch(deletedBusiness(id));
      window.location.assign('/businesses');
    });
}

export function editBusiness(updatedBusiness, businessId) {
  return dispatch =>
    apiRequest.business.edit(updatedBusiness, businessId).then(business => {
      dispatch(editedBusiness(business));
    });
}

export function getReviews(businessId) {
  return dispatch =>
    apiRequest.business.get(businessId).then(reviews => {
      dispatch(gotReviews(reviews));
    });
}

export function addReviews(businessId, review) {
  return dispatch =>
    apiRequest.business.postReview(businessId, review).then(reviews => {
      dispatch(newReview(reviews));
    });
}

