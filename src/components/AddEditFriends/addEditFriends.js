import $ from 'jquery';
import authHelpers from '../../helpers/authHelpers';


const formBuilder = () => {
  const form = `
  <div class="form-group">
    <label for="form-friend-name">Name</label>
    <input type="text" class="form-control" id="form-friend-name" placeholder="Joe Schmoe">
  </div>
  <div class="form-group">
    <label for="form-friend-address">Address:</label>
    <input type="text" class="form-control" id="form-friend-name" placeholder="500 Interstate">
  </div>
  <div class="form-group">
    <label class="form-check-label" for="form-friend-email">Email:</label>
    <input type="text" class="form-control" id="form-friend-email">
  </div>
  <div class="form-group">
    <label class="form-check-label" for="form-friend-phone">Phone Number:</label>
    <input type="text" class="form-control" id="form-friend-phone">
  </div>
  <div class="form-group">
    <label class="form-check-label" for="form-friend-relationship">Relationship:</label>
    <input type="text" class="form-control" id="form-friend-relationship">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  `;
  return form;
};

const getttingFriendFromForm = () => {
  const friend = {
    name: $('#form-friend-name').val(),
    address: $('#form-friend-address').val(),
    phoneNumber: $('#form-friend-phone').val(),
    relationship: $('#form-friend-relationship').val(),
    email: $('#form-friend-email').val(),
    isAvoiding: false,
    uid: authHelpers.getCurrentUid(),
  };
  console.log(friend);
};

export default { formBuilder, getttingFriendFromForm };
