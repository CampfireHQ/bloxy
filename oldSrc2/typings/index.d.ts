// -- Dependencies
import * as EventEmitter from "events";
import {
    AccountInformationAPI,
    AccountSettingsAPI,
    API,
    AuthAPI,
    AvatarAPI,
    BadgesAPI,
    BillingAPI,
    CaptchaAPI,
    CatalogAPI,
    ChatAPI,
    ContactsAPI,
    DevelopAPI,
    EconomyAPI,
    FollowingsAPI,
    FriendsAPI,
    GameInternationalizationAPI,
    GamesAPI,
    GroupsAPI,
    InventoryAPI,
    ItemConfigurationAPI,
    LocaleAPI,
    MetricsAPI,
    NotificationsAPI,
    OtherAPI,
    PremiumFeaturesAPI,
    PresenceAPI,
    PublishAPI,
    ThumbnailsAPI,
    TranslationRolesAPI,
    UsersAPI
} from "./apis";

// -- Classes
export class Client extends ClientBase {
    public loggedIn: boolean;
    public user: ClientUser;
    public debugEnabled: boolean;
    public ws: SocketConnection;

    constructor(options?: ClientConstructorOptions);

    public getGroup(group: GroupIdentifier): Promise<Group>;

    public getUserGroups(user: UserIdentifier): Promise<UserGroup[]>;

    public getUser(user: UserIdentifier, isName?: boolean): Promise<User>;

    public getMultiUsers(users: Array<UserIdentifier>, areUsernames?: boolean): Promise<UserPartial[]>;

    public getUsername(userId: AnyIdentifier, returnFull?: boolean): Promise<UserPartial>;

    public getUserId(username: string, returnFull?: boolean): Promise<UserPartial>;

    public login(options: ClientLoginCredentials): Promise<unknown>;

    public connect(): void; // Inits the websocket connection
    public searchGroups(query: string, options: { isKeyword: boolean } & GenericFilterOptions):
        Promise<unknown>; // Defaults to regular text search
    public getRobloxVerificationStatus(userId: AnyIdentifier): Promise<unknown>;

    public on(event: "ready", listener: () => void): this;
    public on(event: "loggedIn", listener: (user: ClientUser) => void): this;
    public on(event: "chatTyping", listener: (data: ChatTypingData) => void): this;
    public on(event: "chatMessage", listener: (conversationId: number, get: () => Promise<ChatConversation>) => void): this;
    public on(event: "chatMessageSent", listener: (conversationId: number, get: () => Promise<ChatConversation>) => void): this;
    public on(event: "chatMemberAdded", listener: (conversationId: number, get: () => Promise<ChatConversation>) => void): this;
    public on(event: "chatMemberLeft", listener: (conversationId: number, get: () => Promise<ChatConversation>) => void): this;
    public on(event: "chatConversation", listener: (conversationId: number, get: () => Promise<ChatConversation>) => void): this;
    public on(event: "chatConversationRemoved", listener: (conversationId: number, get: () => Promise<ChatConversation>) => void): this;
    public on(event: "friendLost", listener: (userId: number, get: () => Promise<User>) => void): this;
    public on(event: "friendRequest", listener: (userId: number, get: () => Promise<User>) => void): this;
    public on(event: "friendAdded", listener: (userId: number, get: () => Promise<User>) => void): this;
    public on(event: "message", listener: (messageId: number, get: () => Promise<Message>) => void): this;
    public on(event: "messageRead", listener: (messageId: number, get: () => Promise<Message>) => void): this;
    public on(event: "messageUnread", listener: (messageId: number, get: () => Promise<Message>) => void): this;
    public on(event: "messageArchived", listener: (messageId: number, get: () => Promise<Message>) => void): this;
    public on(event: string, listener: Function): this;
}

class ClientBase extends EventEmitter {
    public options: ClientConstructorOptions;
    public rest: RestController;
    public util: UtilController;
    public debug: DebugController;
    public apis: {
        accountInformation: AccountInformationAPI,
        accountSettings: AccountSettingsAPI,
        api: API,
        auth: AuthAPI,
        avatar: AvatarAPI,
        badges: BadgesAPI,
        billing: BillingAPI,
        captcha: CaptchaAPI,
        catalog: CatalogAPI,
        chat: ChatAPI,
        contacts: ContactsAPI,
        develop: DevelopAPI,
        economy: EconomyAPI,
        followings: FollowingsAPI,
        friends: FriendsAPI,
        gameInternationalization: GameInternationalizationAPI,
        games: GamesAPI,
        groups: GroupsAPI,
        inventory: InventoryAPI,
        itemConfiguration: ItemConfigurationAPI,
        locale: LocaleAPI,
        metrics: MetricsAPI,
        notifications: NotificationsAPI,
        premiumFeatures: PremiumFeaturesAPI,
        presence: PresenceAPI,
        publish: PublishAPI,
        thumbnails: ThumbnailsAPI,
        translationRoles: TranslationRolesAPI,
        users: UsersAPI,
        other: OtherAPI
    };
    public structures: Structures;

    constructor(options: ClientConstructorOptions);
}

class ClientUser {
    public client: Client;
    public id: UserIdentifier;
    public profile: ClientUserProfile;
    public account: ClientUserAccount;

    constructor(client: Client, data: any);

    public getFriendRequests(): Promise<>;

    public declineAllFriendRequests(): Promise<>;

    public acceptFriendRequest(user: UserIdentifier): Promise<>;

    public declineFriendRequest(user: UserIdentifier): Promise<>;

    public follow(user: UserIdentifier): Promise<>;

    public sendFriendRequest(user: UserIdentifier): Promise<>;

    public unfollow(user: UserIdentifier): Promise<>;

    public unfriend(user: UserIdentifier): Promise<>;

    public isFriendsWith(users: Array<UserIdentifier>): Promise<>;

    public block(user: UserIdentifier): Promise<>;

    public getGroups(): Promise<>;

    public getMessages(options: GenericFilterOptions): Promise<ClientUserMessagesResponse>;

    public markMessagesRead(markRead: boolean, messages: Array<MessageIdentifier>): Promise<>;

    public moveMessages(options: { archive: boolean, messages: Array<MessageIdentifier> }): Promise<>;

    public getPrimaryGroup(): Promise<>;

    public removePrimaryGroup(): Promise<>;

    public setPrimaryGroup(group: GroupIdentifier): Promise<>;

    public sendMessage(options: ClientUserSendMessageOptions): Promise<>;

    public getRobux(): Promise<>;

    public getFriendsOnline(): Promise<>;

    public buyAsset(options: { productId: AnyIdentifier, price: number, sellerId: AnyIdentifier }): Promise<>;

    public canManageAsset(assetId: AnyIdentifier): Promise<>;

    public ownsAsset(assetId: AnyIdentifier): Promise<>;

    public ownsGamePass(passId: AnyIdentifier): Promise<>;

    public redeemPromoCode(code: string): Promise<>;

    public getGroupPermissionsFor(group: GroupIdentifier): Promise<>;
}

class ClientUserProfile {
    public user: ClientUser;

    constructor(user: ClientUser, data: any);

    public updateDescription(description: string): Promise<>;

    public updateStatus(status: string): Promise<>;

}

class ClientUserAccount {
    public user: ClientUser;

    constructor(user: ClientUser);
}

class UserPartial extends UserBase {
    public id: AnyIdentifier;
    public name: string;

    constructor(client: Client, data: any);
}

class User extends UserPartial {
    /**
     * The user's profile status (the short one)
     */
    public status: string | undefined;
    /**
     * The date when the user's status was made / updated
     */
    public statusUpdated: Date | undefined;
    /**
     * The id that indicates to a given presence type
     */
    public presenceType: string | undefined;
    /**
     * The last location indicates where the user was last (in a game, studio, idle, etc.)
     */
    public lastLocation: string | undefined;
    /**
     * The place id they're currently in (e.g. studio or game)
     */
    public userPlaceId: string | number;
    /**
     * The blurb (profile description) of the user's profile
     */
    public blurb: string | undefined;
    /**
     * The date when the user signed up / joined Roblox
     */
    public joinDate: Date | undefined;
    /**
     * The amount of days since the user has signed up / been on Roblox
     */
    public accountAge: number | undefined;
    /**
     * The friends count of the user (how many friends they have)
     */
    public friendsCount: number | undefined;
    /**
     * The followers count of the user
     */
    public followersCount: number | undefined;
    /**
     * The following count for the user
     */
    public followingCount: number | undefined;
    /**
     * The headshot image of the user (a URL)
     */
    public headshotImage: string | undefined;
    /**
     * If the authenticated user can send a message to the user
     */
    public canMessage: boolean | undefined;
    /**
     * If the authenticated user can follow the user
     */
    public canFollow: boolean | undefined;
    /**
     * If the authenticated user can trade with the user
     */
    public canTrade: boolean | undefined;
    /**
     * If the authenticated user can see the favorites of the user
     */
    public canSeeFavorites: boolean | undefined;
    /**
     * If the authenticated user can see the inventory of the user
     */
    public canSeeInventory: boolean | undefined;
    /**
     * If the authenticated user and the user are friends
     */
    public areFriends: boolean | undefined;
    /**
     * If the authenticated user can send a friend request to the user
     */
    public canSendFriendRequest: boolean | undefined;
    /**
     * If the user has sent a friend request to the authenticated user (that is active/pending)
     */
    public incomingFriendRequest: boolean | undefined;
    /**
     * If the authenticated user has sent a friend request (that is active/pending) to the user
     */
    public sentFriendRequest: boolean | undefined;
    /**
     * If the user has sent a friend request to the authenticated user,
     * this will be defined
     */
    public friendRequestId: string | number | undefined;
    /**
     * If the authenticated user has blocked the user
     */
    public isBlocked: boolean | undefined;
    /**
     * If the user has blocked the (self) authenticated user
     */
    public isSelfBlocked: boolean;
    /**
     * If the authenticated user is following the user
     */
    public isFollowing: boolean;

    constructor(client: Client, data: any);
}

class UserBase {
    public client: Client;

    constructor(client: Client);

    /**
     * Gets an updated version of the user data (refreshes)

     */
    public refresh(): Promise<User>;

    /**
     * Gets the user's groups

     */
    public getGroups(): Promise<UserGroup[]>

    /**
     * Accepts the friend request from the user (if any)

     */
    public acceptFriendRequest(): Promise<boolean>;

    /**
     * Declines the friend request from the user (if any)

     */
    public declineFriendRequest(): Promise<boolean>;

    /**
     * Sends a friend request to the user

     */
    public sendFriendRequest(): Promise<boolean>;

    /**
     * Gets the user's friends count

     */
    public getFriendsCount(): Promise<number>;

    /**
     * Unfriends the user

     */
    public unfriend(): Promise<boolean>;

    /**
     * Checks if this user is following the specified user (in the params)

     */
    public isFollowingUser(user: UserIdentifier): Promise<unknown>;

    /**
     * Follows this user
     */
    public follow(): Promise<boolean>;

    /**
     * Unfollows this user
     */
    public unfollow(): Promise<boolean>;

    /**
     * Checks if this user owns the asset specified in the params
     */
    public ownsAsset(assetId: AnyIdentifier): Promise<boolean>;

    /**
     * Blocks this user

     */
    public block(): Promise<boolean>;

    /**
     * Unblocks this user

     */
    public unblock(): Promise<boolean>;

    /**
     * Checks if this user can manage the specified assetId provided in the params
     * @param {AnyIdentifier} asset The asset to see if they can manage

     */
    public canManageAsset(asset: AnyIdentifier): Promise<boolean>;

    /**
     * Awards a badge to this user
     * @param badge The badge (id) to award
     * @param place The place (id) to award from
     */
    public awardBadge(badge: AnyIdentifier, place: AnyIdentifier): Promise<boolean>;

    /**
     * Gets this user's avatar
     */
    public getAvatar(): Promise<unknown>;

    /**
     * Gets the assets this user is wearing
     */
    public getWearingAssets(): Promise<unknown>;

    /**
     * Gets the outfits of this user
     */
    public getOutfits(options?: unknown): Promise<unknown>;

    /**
     * Gets this user's badges
     */
    public getBadges(options?: GenericFilterOptions): Promise<unknown>;

    /**
     * Gets the timestamps from when the specified badges were given/awarded
     */
    public getBadgesTimestamps(badges: AnyIdentifier[]): Promise<unknown>;

    /**
     * Gets the bundles owned by this user
     */
    public getOwnedBundles(options: GenericFilterOptions): Promise<unknown>;

    /**
     * Adds this user to a chat conversation
     */
    public addToChatConversation(conversation: ChatConversationIdentifier): Promise<unknown>;

    /**
     * Removes this user from a chat conversation
     */
    public removeFromChatConversation(conversation: ChatConversationIdentifier): Promise<unknown>;

    /**
     * Creates a group conversation with this user, and possibly other users specified in the params
     */
    public createGroupChatConversation(others?: UserIdentifier[]): Promise<unknown>;

    /**
     * Starts a chat conversation with this user
     */
    public startChatConversation(): Promise<unknown>;

    /**
     * Gets the tag this user is associated with
     */
    public getTag(): Promise<unknown>;

    /**
     * Sets a pending tag, which means a tag this user should be associated with / called by, that gets approved
     * when they accept your friend request.
     */
    public setPendingTag(tag: any): Promise<unknown>;

    /**
     * Sets a tag for this user you want to associate them with / call them by
     */
    public setTag(tag: any): Promise<unknown>;

    /**
     * Removes the tag of this user
     */
    public removeTag(): Promise<unknown>;

    /**
     * Removes this user from team create from the universe specified in the params
     */
    public removeFromTeamCreate(universe: AnyIdentifier): Promise<unknown>;

    /**
     * Adds this user to team create on the universe specified in the params
     */
    public addToTeamCreate(universe: AnyIdentifier): Promise<unknown>;

    /**
     * Gets the copies this user has for a given asset
     */
    public getResellableAssetCopies(assetId: AnyIdentifier): Promise<unknown>;

    /**
     * Gets the followers this user has (not count, but actual users)
     */
    public getFollowers(options: GenericFilterOptions): Promise<unknown>;

    /**
     * Gets the followers count of this user
     */
    public getFollowersCount(): Promise<number>;

    /**
     * Gets the friends (not count, but actual users) this user has
     */
    public getFriends(): Promise<unknown>;

    /**
     * Gets the friends count this user has
     */
    public getFriendsCount(): Promise<number>;

    /**
     * Gets the games this user has
     */
    public getGames(): Promise<unknown>;

    /**
     * Gets their (possible) join request for the specified group in the params
     */
    public getGroupJoinRequest(group: GroupIdentifier): Promise<unknown>;

    /**
     * Accepts this user's join request for a group specified in the params
     */
    public acceptGroupJoinRequest(group: GroupIdentifier): Promise<unknown>;

    /**
     * Declines this user's join request for a group specified in the params
     */
    public declineGroupJoinRequest(group: GroupIdentifier): Promise<unknown>;

    /**
     * Makes this user a group owner for the specified group in the params
     */
    public setGroupOwnerFor(group: GroupIdentifier): Promise<unknown>;

    /**
     * Updates the member (roles / rank) in the specified group in the params
     */
    public updateMemberInGroup(group: GroupIdentifier, role: GroupRoleIdentifier): Promise<unknown>;

    /**
     * Deletes this user's wall posts in the specified group in the params
     */
    public deleteGroupWallPosts(group: GroupIdentifier): Promise<unknown>;

    /**
     * Gets this user's primary group
     */
    public getPrimaryGroup(): Promise<UserGroup>;

    /**
     * Gets this user's owned items
     */
    public getOwnedItems(options: unknown): Promise<unknown>;

    /**
     * Gets this user's asset inventory
     * @param options
     */
    public getAssetInventory(options: unknown): Promise<unknown>;

    /**
     * Not sure what this does
     */
    public validatePremiumMembership(): Promise<unknown>;

    /**
     * Gets the presence of this user
     */
    public getPresence(): Promise<unknown>;

    /**
     * Gets a headshot image of this user
     */
    public getAvatarHeadshot(options: unknown): Promise<unknown>;
}

class GroupBase {
    public client: Client;
    public; //TODO: CONTINUE HERE

    constructor(client: Client, data: any);

    /**
     * Updates the data about this group
     */
    public refresh(): Promise<>; // Fetches new information from the Roblox Web API

    /**
     * Gets the settings for the group
     */
    public getSettings(): Promise<GroupSettings>;

    public updateSettings(): Promise<GroupConfigureSetting>;

    public getAuditLogs(options: GroupAuditLogOptions): Promise<>;

    public updateDescription(description: string): Promise<>;

    public updateShout(shout: string): Promise<>;

    public updateIcon(file: any): Promise<>;

    public getJoinRequests(options: GenericFilterOptions): Promise<>;

    public getJoinRequest(user: UserIdentifier): Promise<>;

    public handleJoinRequest(user: UserIdentifier, accept: boolean): Promise<>;

    public getRoles(): Promise<>;

    public getRole(identifier: GroupRoleIdentifier): Promise<>;

    public getMembersWithRole(role: GroupRoleIdentifier, options: GenericFilterOptions): Promise<>;

    public getMembers(options: GenericFilterOptions): Promise<>;

    public getMember(user: UserIdentifier): Promise<>;

    public changeOwner(user: UserIdentifier): Promise<>;

    public claimOwnership(): Promise<>;

    public kick(user: UserIdentifier): Promise<>;

    public updateMemberRole(user: UserIdentifier, role: GroupRoleIdentifier): Promise<>;

    public getCurrentPayouts(): Promise<>;

    public getPayouts(): Promise<>;

    public payoutUsers(payouts: GroupPayoutOptions): Promise<>; // One-time payout

    public updatePayouts(payouts: GroupPayoutOptions): Promise<>; // Default payouts

    public getRolePermissions(role: GroupRoleIdentifier): Promise<>;

    public getWall(options?: GenericFilterOptions): Promise<>;

    public postOnWall(message: string): Promise<>;

    public deleteWallPost(post: GroupWallPostIdentifier): Promise<>;

    public createRole(options: GroupRoleOptions): Promise<>;

    public updateRole(role: GroupRoleIdentifier, options: GroupRoleOptions): Promise<>;

    public deleteRole(role: GroupRoleIdentifier): Promise<>;

    public promote(user: UserIdentifier): Promise<>;

    public demote(user: UserIdentifier): Promise<>;

    public setPrimary(): Promise<>;

    public leave(): Promise<>;

    public join(): Promise<>;

    public getSocialLinks(): Promise<>;

    public createSocialLink(data: GroupSocialLink): Promise<>;

    public updateSocialLink(id: AnyIdentifier, data: GroupSocialLink): Promise<>;

    public deleteSocialLink(id: AnyIdentifier): Promise<>;

    public getRelationships(relationType: GroupRelationshipTypes, from: number, maxResults: number): Promise<>;

    public declineRelationshipRequests(relationType: GroupRelationshipTypes, groups: Array<GroupIdentifier> | GroupIdentifier): Promise<>;

    public getRelationshipRequests(relationType: GroupRelationshipTypes, from: number, maxResults: number): Promise<>;

    public acceptRelationshipRequests(relationType: GroupRelationshipTypes, groups: Array<GroupIdentifier> | GroupIdentifier): Promise<>;

    public removeRelationship(relationType: GroupRelationshipTypes, group: GroupIdentifier): Promise<>;

    public sendRelationshipRequest(relationType: GroupRelationshipTypes, group: GroupIdentifier): Promise<>;

    public changeMemberRank(user: UserIdentifier, changeAmount: number): Promise<>;

    public demote(user: UserIdentifier): Promise<>;

    public promote(user: UserIdentifier): Promise<>;

    public getFunds(): Promise<>;

    public getMyPermissions(): Promise<>;

    public getGames(options: GenericFilterOptions): Promise<unknown>;

    public on(event: "joinRequest", listener: (request: GroupJoinRequest, group: Group) => void): this;
    public on(event: "wallPost", listener: (post: GroupWallPost, group: Group) => void): this;
    public on(event: "shout", listener: (shout: GroupShout, group: Group) => void): this;
}

class Group extends GroupBase {
    public id: AnyIdentifier;
    public name: string;
    public description: string;
    public owner: GroupMember;
    public shout: GroupShout;

    constructor(client: Client, data: any);
}

class UserGroup extends GroupBase {
    public role: GroupRole;
    public owner: GroupMember;
    public shout: GroupShout;
    public memberCount: number;
    public isPremiumOnly: boolean;
    public hasClan: boolean;
    public publicEntry: boolean;

    constructor(client: Client, data: any);
}

class GroupRole {
    public client: Client;
    public id: AnyIdentifier;
    public name: string;
    public rank: number;
    public group: Group | null;

    constructor(client: Client, data: any);

    public getMembers(options: GenericFilterOptions): Promise<>;

    public getPermissions(): Promise<>;
}

class GroupMember extends UserPartial {
    public role: GroupRole;

    constructor(client: Client, data: any);

    public kick(): Promise<>;

    public setRole(role: GroupRoleIdentifier): Promise<>;

    public payoutOnce(amount: number): Promise<>;

    public makeOwner(): Promise<>;

    public deleteWallPosts(): Promise<>;
}

class GroupShout {
    public client: Client;
    public poster: GroupMember;
    public content: string;
    public createdAt: Date;

    constructor(client: Client, data: any);
}

class GroupJoinRequest {
    public client: Client;
    public user: GroupMember;
    public createdAt: Date;

    constructor(client: Client, data: any);

    public accept(): Promise<>;

    public decline(): Promise<>;
}

class GroupWallPost {
    public client: Client;
    public id: AnyIdentifier;
    public poster: GroupMember;
    public content: string;
    public createdAt: Date;

    constructor(client: Client, data: any);

    public delete(): Promise<>;

    public deleteAll(): Promise<>;

    public kick(): Promise<>;
}

class ChatConversation {
    public client: Client;
    public id: string;
    public title: string;
    public initiator: UserPartial;
    public unreadMessages: boolean;
    public members: Array<UserPartial>;
    public type: string;
    public updatedAt: Date;

    constructor(client: Client, data: any);

    public getMessages(pageSize: number, unreadOnly: boolean): Promise<>;

    public add(users: Array<UserIdentifier>): Promise<>; // Add user
    public remove(user: UserIdentifier): Promise<>; // Remove user
    public rename(title: string): Promise<>; // New title
    public sendMessage(message: string): Promise<>;

    public setTyping(typing: boolean): Promise<>;

    public markRead(message?: ChatMessageIdentifier): Promise<>; // With "messages" provided: Mark the messages read, otherwise the entire chat
}

class ChatMessage {
    public id: string;
    public senderType: string;
    public sentAt: Date;
    public read: boolean;
    public type: string;
    public senderTargetId: number;
    public content: string;

    constructor(conversationId: number, data: any);

    public markRead(): Promise<>;

    public reply(message: string): Promise<>;

    public getConversation(): Promise<>;
}

class ChatSettings {
    public client: Client;
    public chatEnabled: boolean;
    public isActiveChatUser: boolean;

    constructor(client: Client, data: any);
}

class ChatSentMessage {
    public content: string;
    public filtered: boolean;
    public id: string;
    public sentAt: Date;
    public type: string;
    public result: string;
    public status: string;

    constructor(data: any);
}

class Message {
    public id: number;
    public sender: UserPartial;
    public recipient: UserPartial;
    public subject: string;
    public content: string;
    public createdAt: Date;
    public read: boolean;
    public systemMessage: boolean;

    constructor(client: Client, data: any);

    public reply(message: string): Promise<>;

    public archive(): Promise<>;

    public unArchive(): Promise<>;
}

class UtilController {
    public token: RestTokenController;
    public cache: CacheController;
    public captcha: CaptchaController;
    public structures: Structures;
    public valueExtractor: UtilValueExtractor;

    constructor();
}

class RestController {
    public client: Client;
    public requester: any; // TODO: Uses either the default "got" module, or it will send the requestOptions to the callback provided, so that users can customize it themselves
    public isCustomRequester: boolean;
    public responseHandlers: Array<Function>;
    public jar: any;

    constructor(client: Client);

    public request(options: RestRequestOptions): Promise<RestResponse>;

    public createCookie(options: RestCreateCookieOptions): void;

    public proxy(url?: string): string;

    public userAgent(userAgent?: string): string;

    public addResponseHandler(handler: Function): void;
}

class RestRequest {
    public client: Client;
    public controller: RestController;
    public responseOptions: RestControllerResponseOptions;
    public options: RestRequestOptions;

    constructor(restController: RestController, responseOptions: RestControllerResponseOptions);

    public prepare(options): void;

    public send(): Promise<RestResponse>;
}

class RestResponse {
    public client: Client;
    public request: RestRequest;
    public options: RestRequest["responseOptions"];
    public data: object;

    constructor(client: Client, request: RestRequest, response: object);

    public validateResponse(): boolean;

    public isValidStatusCode(): boolean;

    public isValidStatus(): boolean;

    public isValidBody(): boolean;
}

class DebugController {
    public client: Client;
    public enabled: boolean;

    constructor(client: Client);

    public log(log: string): DebugLog;
}

class DebugLog {
    public controller: DebugController;
    public log: string;

    constructor(controller: DebugController, log: string);
}

class RestTokenController {
    public client: Client;
    public token: string;

    constructor(client: Client);

    public refresh(): Promise<string>;
}

class CaptchaController {
    public client: Client;
    public constants: object;

    constructor(client: Client);
}

// -- Interfaces
interface ClientLoginCredentials {
    cookie: string;
    username: string;
    password: string;
    fcToken?: string;
}

interface ClientConstructorOptions {
    credentials?: ClientLoginCredentials;
    callbacks: {
        onCaptcha: Function;
    };
    setup: {
        proxy: string;
        userAgent: string;
        cache: {
            users: number;
            groups: number;
        },
        requester: Function; // TOOD: For dealing with the requests
        debugging: boolean;
        throwHttpErrors: boolean;
    }
}

interface RestRequestOptions {
    url: string;
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | string;
    headers: object;
    proxy: string;
    followAllRedirects: boolean;
    body: object;
    json: object;
    qs: object;
    verification: string;
    token: string;
    jar: any;
    userAgent: string;
    ignoreErrors: boolean;
}

interface ClientUserMessagesResponse {
    page: number;
    totalPages: number;
    messages: Array<Message>;
}

interface ClientUserSendMessageOptions {
    user: UserIdentifier;
    title: string;
    message: string;
}

interface GroupRoleOptions {
    name: string;
    description: string;
    rank: number;
    usingGroupFunds: boolean;
}

interface UpdatePlaceOptions {
    name: string;
    description: string;
}

interface UpdatePluginOptions {
    name: string;
    description: string;
    commentsEnabled: boolean;
}

interface GroupGetRoleIdentifier {
    name: string;
    rank: number;
    id: number;
}

interface GroupSocialLink {
    type: "Facebook" | "Twitter" | "Discord" | string;
    url: string;
    title: string;
}

interface UniverseSettingsOptions {
    name: string;
    universeAvatarType: "MorphToR6" | "MorphToR15" | string;
    universeScaleType: "NoScales" | string;
    universeAnimationType: "Standard" | string;
    universeCollisionType: "InnerBox" | string;
    universeBodyType: "Standard" | string;
    universeJointPositioningType: "Standard" | string;
    isArchived: boolean;
    isFriendsOnly: boolean;
    genre: string;
    playableDevices: Array<string>;
    isForSale: boolean;
    price: number;
}

interface UpdateDeveloperProductOptions {
    name: string;
    description: string;
    iconAssetId: number;
    price: number;
}

interface RestCreateCookieOptions {
    key: string;
    value: string;
    domain: string;
    hostOnly: boolean;
    httpOnly: boolean;
}

interface RestControllerResponseOptions {
    allowedStatusCodes: Array<number>;
    disallowedStatusCodes: Array<number>;
    allowedStatuses: Array<string>;
    disallowedStatuses: Array<string>; // TODO: Fails when the status includes any of the words in the array
    onlyJSON: boolean; // TODO: Fail if the body returned is not a valid JSON, it only expects json
    disabledChecks: {
        captcha: boolean;
        token: boolean;
    };
}

interface Constants {
    captcha: {
        login: {
            publicKey: string;
            solveForURL: string;
            solvedURL: string;
        };
        signup: {
            publicKey: string;
            solveForURL: string;
            solvedURL: string;
        };
        userAction: {
            publicKey: string;
        };
        gameCardRedemption: {
            publicKey: string;
        };
        resetPassword: {
            publicKey: string;
        }
    }
}

interface Structures {
    chat: {};
    group: {
        Base: GroupBase;
        JoinRequest: GroupJoinRequest;
        Member: GroupMember;
        Role: GroupRole;
        Shout: GroupShout;
        User: UserGroup;
        WallPost: GroupWallPost;
        Partial: GroupPartial;
    };
    user: {
        Base: UserBase;
        Partial: UserPartial;
    };
    message: {};
}

// -- Types
type AnyIdentifier = string | number | any;
type UserIdentifier = AnyIdentifier | User | UserPartial;
type GroupIdentifier = AnyIdentifier | Group | UserGroup;
type MessageIdentifier = AnyIdentifier | Message;
type ChatMessageIdentifier = AnyIdentifier | ChatMessage;
type GroupRoleIdentifier = AnyIdentifier | GroupRole;
type GroupWallPostIdentifier = AnyIdentifier | GroupWallPost;
type ChatConversationIdentifier = AnyIdentifier | ChatConversation;

type GenericFilterOptions = {
    sortOrder: string | "Desc";
    limit: number | 100;
    cursor: string;
};

type GroupPayoutOptions = [{
    user: UserIdentifier;
    amount: number;
}];
