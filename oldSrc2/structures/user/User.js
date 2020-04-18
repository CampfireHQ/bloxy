const UserPartial = require("./UserPartial");

class User extends UserPartial {
	/**
	 * Creates a new complete User
	 * @param {Client} client The apis
	 * @param {Object} data The user data
	 */
	constructor (client, data) {
		super(client, data);

		this.status = data.UserStatus;
		this.statusUpdated = new Date(parseInt(data.UserStatusDate.match(/\d+/)[0]));
		this.presenceType = data.UserPresenceType;
		this.lastLocation = data.LastLocation;
		this.userPlaceId = undefined;
		this.blurb = undefined;
		this.joinDate = undefined;
		this.accountAge = undefined;
		this.friendsCount = data.FriendsCount;
		this.friendsCount = data.FriendsCount;
		this.followersCount = data.FollowersCount;
		this.followingCount = data.FollowingsCount;
		this.headshotImage = data.HeadShotImage.Url;
		this.canMessage = data.CanMessage;
		this.canFollow = data.MayFollow;
		this.canTrade = data.CanTrade;
		this.canSeeFavorites = data.CanSeeFavorites;
		this.canSeeInventory = data.CanSeeInventory;
		this.areFriends = data.AreFriends;
		this.canSendFriendRequest = data.MaySendFriendInvitation;
		this.incomingFriendRequestPending = data.IncomingFriendRequestPending;
		this.sentFriendRequestPending = data.FriendRequestPending;
		this.friendRequestId = data.IncomingFriendRequestId;
		this.isBlocked = data.IsVieweeBlocked;
		this.isSelfBlocked = data.IsViewerBlocked;
		this.isFollowing = data.IsFollowing;
	}
}

module.exports = User;
