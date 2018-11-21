import $ from 'jquery';
import authHelpers from '../../helpers/authHelpers';
import friendsData from '../../helpers/data/friendsData';
import initializeFriendsPage from '../FriendsPage/friendsPage';

const formBuilder = () => {
  const form = `
  <div class="form-group">
    <label for="form-friend-name">Name</label>
    <input type="text" class="form-control" id="form-friend-name" placeholder="Joe Schmoe">
  </div>
  <div class="form-group">
    <label for="form-friend-address">Address:</label>
    <input type="text" class="form-control" id="form-friend-address" placeholder="500 Interstate">
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
  return friend;
};

const buildAddForm = () => {
  let domString = '<h2>Add New Friend</h2>';
  domString += formBuilder();
  domString += '<button id="add-friend">Save New Friend</button>';
  $('#add-edit-friend').html(domString).show();
};

const addNewFriend = () => {
  const newFriend = getttingFriendFromForm();
  friendsData.addNewFriend(newFriend)
    .then(() => {
      $('#add-edit-friend').html('').show();
      $('#friends').hide();
      initializeFriendsPage();
    })
    .catch((error) => {
      console.error('error', error);
    });
};

$('body').on('click', '#add-friend', addNewFriend);

export default buildAddForm;
