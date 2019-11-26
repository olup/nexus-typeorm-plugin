/* eslint-disable */

/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

// @ts-ignore
import { core } from 'nexus'

declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    entityField: NexusTypeORMEntityOutputMethod<NexusTypeORMEntity<TypeName>>
    crudField: NexusTypeORMCRUDMethod<NexusTypeORMEntity<TypeName>>
    entityFields: NexusTypeORMEntityFieldsOutputMethod<TypeName>
  }
}
declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    entity: NexusTypeORMEntityProperty<TypeName>
    crud: NexusTypeORMCRUDProperty<TypeName>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CategoryCreateInput: {
    // input type
    name: string // String!
    posts?: NexusGenInputs['CreateCategoriesPostsRelationInput'] | null // CreateCategoriesPostsRelationInput
  }
  CategoryCreateWithoutPostsInput: {
    // input type
    name: string // String!
  }
  CategoryWhereInput: {
    // input type
    AND?: NexusGenInputs['CategoryWhereInput'][] | null // [CategoryWhereInput!]
    id?: string | null // ID
    id_in?: string[] | null // [ID!]
    name?: string | null // String
    name_contains?: string | null // String
    name_in?: string[] | null // [String!]
    NOT?: NexusGenInputs['CategoryWhereInput'][] | null // [CategoryWhereInput!]
    OR?: NexusGenInputs['CategoryWhereInput'][] | null // [CategoryWhereInput!]
  }
  CreateCategoriesPostsRelationInput: {
    // input type
    connect?: NexusGenInputs['PostWhereInput'] | null // PostWhereInput
    create?: NexusGenInputs['PostCreateWithoutCategoriesInput'][] | null // [PostCreateWithoutCategoriesInput!]
  }
  CreatePostToUserRelationInput: {
    // input type
    connect?: NexusGenInputs['UserWhereInput'] | null // UserWhereInput
    create?: NexusGenInputs['UserCreateWithoutPostsInput'] | null // UserCreateWithoutPostsInput
  }
  CreatePostsCategoriesRelationInput: {
    // input type
    connect?: NexusGenInputs['CategoryWhereInput'] | null // CategoryWhereInput
    create?: NexusGenInputs['CategoryCreateWithoutPostsInput'][] | null // [CategoryCreateWithoutPostsInput!]
  }
  CreatePostsUserLikesPostsRelationInput: {
    // input type
    connect?: NexusGenInputs['UserLikesPostWhereInput'] | null // UserLikesPostWhereInput
    create?: NexusGenInputs['UserLikesPostCreateWithoutPostInput'][] | null // [UserLikesPostCreateWithoutPostInput!]
  }
  CreateUserFollowsToFollowerRelationInput: {
    // input type
    connect?: NexusGenInputs['UserWhereInput'] | null // UserWhereInput
    create?: NexusGenInputs['UserCreateWithoutFolloweesInput'] | null // UserCreateWithoutFolloweesInput
  }
  CreateUserLikesPostToPostRelationInput: {
    // input type
    connect?: NexusGenInputs['PostWhereInput'] | null // PostWhereInput
    create?: NexusGenInputs['PostCreateWithoutUserLikesPostsInput'] | null // PostCreateWithoutUserLikesPostsInput
  }
  CreateUserLikesPostToUserRelationInput: {
    // input type
    connect?: NexusGenInputs['UserWhereInput'] | null // UserWhereInput
    create?: NexusGenInputs['UserCreateWithoutPostsInput'] | null // UserCreateWithoutPostsInput
  }
  CreateUserToEmailRelationInput: {
    // input type
    connect?: NexusGenInputs['EmailWhereInput'] | null // EmailWhereInput
    create?: NexusGenInputs['EmailCreateWithoutUserInput'] | null // EmailCreateWithoutUserInput
  }
  CreateUserToProfileRelationInput: {
    // input type
    connect?: NexusGenInputs['UserProfileWhereInput'] | null // UserProfileWhereInput
    create?: NexusGenInputs['UserProfileCreateWithoutUserInput'] | null // UserProfileCreateWithoutUserInput
  }
  CreateUsersFolloweesRelationInput: {
    // input type
    connect?: NexusGenInputs['UserFollowsWhereInput'] | null // UserFollowsWhereInput
    create?: NexusGenInputs['UserFollowsCreateWithoutFolloweeInput'][] | null // [UserFollowsCreateWithoutFolloweeInput!]
  }
  CreateUsersPostsRelationInput: {
    // input type
    connect?: NexusGenInputs['PostWhereInput'] | null // PostWhereInput
    create?: NexusGenInputs['PostCreateWithoutUserInput'][] | null // [PostCreateWithoutUserInput!]
  }
  CreateUsersUserLikesPostsRelationInput: {
    // input type
    connect?: NexusGenInputs['UserLikesPostWhereInput'] | null // UserLikesPostWhereInput
    create?: NexusGenInputs['UserLikesPostCreateWithoutUserInput'][] | null // [UserLikesPostCreateWithoutUserInput!]
  }
  EmailCreateWithoutUserInput: {
    // input type
    address: string // String!
  }
  EmailWhereInput: {
    // input type
    address?: string | null // String
    address_contains?: string | null // String
    address_in?: string[] | null // [String!]
    AND?: NexusGenInputs['EmailWhereInput'][] | null // [EmailWhereInput!]
    id?: string | null // ID
    id_in?: string[] | null // [ID!]
    NOT?: NexusGenInputs['EmailWhereInput'][] | null // [EmailWhereInput!]
    OR?: NexusGenInputs['EmailWhereInput'][] | null // [EmailWhereInput!]
  }
  PostCreateInput: {
    // input type
    categories?: NexusGenInputs['CreatePostsCategoriesRelationInput'] | null // CreatePostsCategoriesRelationInput
    createdAt?: any | null // DateTime
    isPublic: boolean // Boolean!
    liked?: string | null // String
    title: string // String!
    totalLikes?: number | null // Int
    user?: NexusGenInputs['CreatePostToUserRelationInput'] | null // CreatePostToUserRelationInput
    userId?: number | null // Int
    userLikesPosts?: NexusGenInputs['CreatePostsUserLikesPostsRelationInput'] | null // CreatePostsUserLikesPostsRelationInput
    viewCount?: number | null // Int
  }
  PostCreateWithoutCategoriesInput: {
    // input type
    createdAt?: any | null // DateTime
    isPublic: boolean // Boolean!
    liked?: string | null // String
    title: string // String!
    totalLikes?: number | null // Int
    user?: NexusGenInputs['CreatePostToUserRelationInput'] | null // CreatePostToUserRelationInput
    userId?: number | null // Int
    userLikesPosts?: NexusGenInputs['CreatePostsUserLikesPostsRelationInput'] | null // CreatePostsUserLikesPostsRelationInput
    viewCount?: number | null // Int
  }
  PostCreateWithoutUserInput: {
    // input type
    categories?: NexusGenInputs['CreatePostsCategoriesRelationInput'] | null // CreatePostsCategoriesRelationInput
    createdAt?: any | null // DateTime
    isPublic: boolean // Boolean!
    liked?: string | null // String
    title: string // String!
    totalLikes?: number | null // Int
    userLikesPosts?: NexusGenInputs['CreatePostsUserLikesPostsRelationInput'] | null // CreatePostsUserLikesPostsRelationInput
    viewCount?: number | null // Int
  }
  PostCreateWithoutUserLikesPostsInput: {
    // input type
    categories?: NexusGenInputs['CreatePostsCategoriesRelationInput'] | null // CreatePostsCategoriesRelationInput
    createdAt?: any | null // DateTime
    isPublic: boolean // Boolean!
    liked?: string | null // String
    title: string // String!
    totalLikes?: number | null // Int
    user?: NexusGenInputs['CreatePostToUserRelationInput'] | null // CreatePostToUserRelationInput
    userId?: number | null // Int
    viewCount?: number | null // Int
  }
  PostWhereInput: {
    // input type
    AND?: NexusGenInputs['PostWhereInput'][] | null // [PostWhereInput!]
    createdAt?: any | null // DateTime
    createdAt_in?: any[] | null // [DateTime!]
    id?: string | null // ID
    id_in?: string[] | null // [ID!]
    isPublic?: boolean | null // Boolean
    isPublic_in?: boolean[] | null // [Boolean!]
    liked?: string | null // String
    liked_contains?: string | null // String
    liked_in?: string[] | null // [String!]
    NOT?: NexusGenInputs['PostWhereInput'][] | null // [PostWhereInput!]
    OR?: NexusGenInputs['PostWhereInput'][] | null // [PostWhereInput!]
    title?: string | null // String
    title_contains?: string | null // String
    title_in?: string[] | null // [String!]
    totalLikes?: number | null // Int
    totalLikes_gt?: number | null // Int
    totalLikes_gte?: number | null // Int
    totalLikes_in?: number[] | null // [Int!]
    totalLikes_lt?: number | null // Int
    totalLikes_lte?: number | null // Int
    userId?: number | null // Int
    userId_gt?: number | null // Int
    userId_gte?: number | null // Int
    userId_in?: number[] | null // [Int!]
    userId_lt?: number | null // Int
    userId_lte?: number | null // Int
    viewCount?: number | null // Int
    viewCount_gt?: number | null // Int
    viewCount_gte?: number | null // Int
    viewCount_in?: number[] | null // [Int!]
    viewCount_lt?: number | null // Int
    viewCount_lte?: number | null // Int
  }
  UserCreateInput: {
    // input type
    age?: number | null // Int
    email?: NexusGenInputs['CreateUserToEmailRelationInput'] | null // CreateUserToEmailRelationInput
    followees?: NexusGenInputs['CreateUsersFolloweesRelationInput'] | null // CreateUsersFolloweesRelationInput
    name: string // String!
    posts?: NexusGenInputs['CreateUsersPostsRelationInput'] | null // CreateUsersPostsRelationInput
    profile?: NexusGenInputs['CreateUserToProfileRelationInput'] | null // CreateUserToProfileRelationInput
    type: NexusGenEnums['UserTypeEnum'] // UserTypeEnum!
    userLikesPosts?: NexusGenInputs['CreateUsersUserLikesPostsRelationInput'] | null // CreateUsersUserLikesPostsRelationInput
  }
  UserCreateWithoutFolloweesInput: {
    // input type
    age?: number | null // Int
    email?: NexusGenInputs['CreateUserToEmailRelationInput'] | null // CreateUserToEmailRelationInput
    name: string // String!
    posts?: NexusGenInputs['CreateUsersPostsRelationInput'] | null // CreateUsersPostsRelationInput
    profile?: NexusGenInputs['CreateUserToProfileRelationInput'] | null // CreateUserToProfileRelationInput
    type: NexusGenEnums['UserTypeEnum'] // UserTypeEnum!
    userLikesPosts?: NexusGenInputs['CreateUsersUserLikesPostsRelationInput'] | null // CreateUsersUserLikesPostsRelationInput
  }
  UserCreateWithoutPostsInput: {
    // input type
    age?: number | null // Int
    email?: NexusGenInputs['CreateUserToEmailRelationInput'] | null // CreateUserToEmailRelationInput
    followees?: NexusGenInputs['CreateUsersFolloweesRelationInput'] | null // CreateUsersFolloweesRelationInput
    name: string // String!
    profile?: NexusGenInputs['CreateUserToProfileRelationInput'] | null // CreateUserToProfileRelationInput
    type: NexusGenEnums['UserTypeEnum'] // UserTypeEnum!
    userLikesPosts?: NexusGenInputs['CreateUsersUserLikesPostsRelationInput'] | null // CreateUsersUserLikesPostsRelationInput
  }
  UserFollowsCreateWithoutFolloweeInput: {
    // input type
    follower?: NexusGenInputs['CreateUserFollowsToFollowerRelationInput'] | null // CreateUserFollowsToFollowerRelationInput
    followerId: number // Int!
  }
  UserFollowsWhereInput: {
    // input type
    AND?: NexusGenInputs['UserFollowsWhereInput'][] | null // [UserFollowsWhereInput!]
    followeeId?: number | null // Int
    followeeId_gt?: number | null // Int
    followeeId_gte?: number | null // Int
    followeeId_in?: number[] | null // [Int!]
    followeeId_lt?: number | null // Int
    followeeId_lte?: number | null // Int
    followerId?: number | null // Int
    followerId_gt?: number | null // Int
    followerId_gte?: number | null // Int
    followerId_in?: number[] | null // [Int!]
    followerId_lt?: number | null // Int
    followerId_lte?: number | null // Int
    id?: string | null // ID
    id_in?: string[] | null // [ID!]
    NOT?: NexusGenInputs['UserFollowsWhereInput'][] | null // [UserFollowsWhereInput!]
    OR?: NexusGenInputs['UserFollowsWhereInput'][] | null // [UserFollowsWhereInput!]
  }
  UserLikesPostCreateWithoutPostInput: {
    // input type
    user?: NexusGenInputs['CreateUserLikesPostToUserRelationInput'] | null // CreateUserLikesPostToUserRelationInput
    userId: number // Int!
  }
  UserLikesPostCreateWithoutUserInput: {
    // input type
    post?: NexusGenInputs['CreateUserLikesPostToPostRelationInput'] | null // CreateUserLikesPostToPostRelationInput
    postId: number // Int!
  }
  UserLikesPostWhereInput: {
    // input type
    AND?: NexusGenInputs['UserLikesPostWhereInput'][] | null // [UserLikesPostWhereInput!]
    id?: string | null // ID
    id_in?: string[] | null // [ID!]
    NOT?: NexusGenInputs['UserLikesPostWhereInput'][] | null // [UserLikesPostWhereInput!]
    OR?: NexusGenInputs['UserLikesPostWhereInput'][] | null // [UserLikesPostWhereInput!]
    postId?: number | null // Int
    postId_gt?: number | null // Int
    postId_gte?: number | null // Int
    postId_in?: number[] | null // [Int!]
    postId_lt?: number | null // Int
    postId_lte?: number | null // Int
    userId?: number | null // Int
    userId_gt?: number | null // Int
    userId_gte?: number | null // Int
    userId_in?: number[] | null // [Int!]
    userId_lt?: number | null // Int
    userId_lte?: number | null // Int
  }
  UserProfileCreateWithoutUserInput: {
    // input type
    displayName: string // String!
    slug: string // String!
  }
  UserProfileWhereInput: {
    // input type
    AND?: NexusGenInputs['UserProfileWhereInput'][] | null // [UserProfileWhereInput!]
    displayName?: string | null // String
    displayName_contains?: string | null // String
    displayName_in?: string[] | null // [String!]
    id?: string | null // ID
    id_in?: string[] | null // [ID!]
    NOT?: NexusGenInputs['UserProfileWhereInput'][] | null // [UserProfileWhereInput!]
    OR?: NexusGenInputs['UserProfileWhereInput'][] | null // [UserProfileWhereInput!]
    slug?: string | null // String
    slug_contains?: string | null // String
    slug_in?: string[] | null // [String!]
    userId?: number | null // Int
    userId_gt?: number | null // Int
    userId_gte?: number | null // Int
    userId_in?: number[] | null // [Int!]
    userId_lt?: number | null // Int
    userId_lte?: number | null // Int
  }
  UserUpdateInput: {
    // input type
    age?: number | null // Int
    email?: number | null // Int
    name?: string | null // String
    type?: NexusGenEnums['UserTypeEnum'] | null // UserTypeEnum
  }
  UserWhereInput: {
    // input type
    age?: number | null // Int
    age_gt?: number | null // Int
    age_gte?: number | null // Int
    age_in?: number[] | null // [Int!]
    age_lt?: number | null // Int
    age_lte?: number | null // Int
    AND?: NexusGenInputs['UserWhereInput'][] | null // [UserWhereInput!]
    id?: string | null // ID
    id_in?: string[] | null // [ID!]
    name?: string | null // String
    name_contains?: string | null // String
    name_in?: string[] | null // [String!]
    NOT?: NexusGenInputs['UserWhereInput'][] | null // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null // [UserWhereInput!]
    type?: NexusGenEnums['UserTypeEnum'] | null // UserTypeEnum
    type_in?: NexusGenEnums['UserTypeEnum'][] | null // [UserTypeEnum!]
  }
}

export interface NexusGenEnums {
  CategoryOrderByInput: 'id_ASC' | 'id_DESC' | 'name_ASC' | 'name_DESC'
  PostOrderByInput:
    | 'createdAt_ASC'
    | 'createdAt_DESC'
    | 'id_ASC'
    | 'id_DESC'
    | 'isPublic_ASC'
    | 'isPublic_DESC'
    | 'liked_ASC'
    | 'liked_DESC'
    | 'title_ASC'
    | 'title_DESC'
    | 'totalLikes_ASC'
    | 'totalLikes_DESC'
    | 'userId_ASC'
    | 'userId_DESC'
    | 'viewCount_ASC'
    | 'viewCount_DESC'
  UserFollowsOrderByInput:
    | 'followeeId_ASC'
    | 'followeeId_DESC'
    | 'followerId_ASC'
    | 'followerId_DESC'
    | 'id_ASC'
    | 'id_DESC'
  UserLikesPostOrderByInput:
    | 'id_ASC'
    | 'id_DESC'
    | 'postId_ASC'
    | 'postId_DESC'
    | 'userId_ASC'
    | 'userId_DESC'
  UserOrderByInput:
    | 'age_ASC'
    | 'age_DESC'
    | 'email_ASC'
    | 'email_DESC'
    | 'id_ASC'
    | 'id_DESC'
    | 'name_ASC'
    | 'name_DESC'
    | 'type_ASC'
    | 'type_DESC'
  UserTypeEnum: 'ADMIN' | 'NORMAL'
}

export interface NexusGenRootTypes {
  Category: {
    // root type
    id: string // ID!
    name: string // String!
  }
  Email: {
    // root type
    address: string // String!
    id: string // ID!
  }
  Mutation: {}
  Post: {
    // root type
    createdAt: any // DateTime!
    id: string // ID!
    isPublic: boolean // Boolean!
    liked?: string | null // String
    title: string // String!
    totalLikes?: number | null // Int
    userId?: number | null // Int
    viewCount?: number | null // Int
  }
  Query: {}
  UpdateManyResult: {
    // root type
    affectedRows: number // Int!
  }
  User: {
    // root type
    age?: number | null // Int
    id: string // ID!
    name: string // String!
    type: NexusGenEnums['UserTypeEnum'] // UserTypeEnum!
  }
  UserFollows: {
    // root type
    followeeId: number // Int!
    followerId: number // Int!
    id: string // ID!
  }
  UserLikesPost: {
    // root type
    id: string // ID!
    postId: number // Int!
    userId: number // Int!
  }
  UserProfile: {
    // root type
    displayName: string // String!
    id: string // ID!
    slug: string // String!
    userId: number // Int!
  }
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  CategoryCreateInput: NexusGenInputs['CategoryCreateInput']
  CategoryCreateWithoutPostsInput: NexusGenInputs['CategoryCreateWithoutPostsInput']
  CategoryWhereInput: NexusGenInputs['CategoryWhereInput']
  CreateCategoriesPostsRelationInput: NexusGenInputs['CreateCategoriesPostsRelationInput']
  CreatePostToUserRelationInput: NexusGenInputs['CreatePostToUserRelationInput']
  CreatePostsCategoriesRelationInput: NexusGenInputs['CreatePostsCategoriesRelationInput']
  CreatePostsUserLikesPostsRelationInput: NexusGenInputs['CreatePostsUserLikesPostsRelationInput']
  CreateUserFollowsToFollowerRelationInput: NexusGenInputs['CreateUserFollowsToFollowerRelationInput']
  CreateUserLikesPostToPostRelationInput: NexusGenInputs['CreateUserLikesPostToPostRelationInput']
  CreateUserLikesPostToUserRelationInput: NexusGenInputs['CreateUserLikesPostToUserRelationInput']
  CreateUserToEmailRelationInput: NexusGenInputs['CreateUserToEmailRelationInput']
  CreateUserToProfileRelationInput: NexusGenInputs['CreateUserToProfileRelationInput']
  CreateUsersFolloweesRelationInput: NexusGenInputs['CreateUsersFolloweesRelationInput']
  CreateUsersPostsRelationInput: NexusGenInputs['CreateUsersPostsRelationInput']
  CreateUsersUserLikesPostsRelationInput: NexusGenInputs['CreateUsersUserLikesPostsRelationInput']
  EmailCreateWithoutUserInput: NexusGenInputs['EmailCreateWithoutUserInput']
  EmailWhereInput: NexusGenInputs['EmailWhereInput']
  PostCreateInput: NexusGenInputs['PostCreateInput']
  PostCreateWithoutCategoriesInput: NexusGenInputs['PostCreateWithoutCategoriesInput']
  PostCreateWithoutUserInput: NexusGenInputs['PostCreateWithoutUserInput']
  PostCreateWithoutUserLikesPostsInput: NexusGenInputs['PostCreateWithoutUserLikesPostsInput']
  PostWhereInput: NexusGenInputs['PostWhereInput']
  UserCreateInput: NexusGenInputs['UserCreateInput']
  UserCreateWithoutFolloweesInput: NexusGenInputs['UserCreateWithoutFolloweesInput']
  UserCreateWithoutPostsInput: NexusGenInputs['UserCreateWithoutPostsInput']
  UserFollowsCreateWithoutFolloweeInput: NexusGenInputs['UserFollowsCreateWithoutFolloweeInput']
  UserFollowsWhereInput: NexusGenInputs['UserFollowsWhereInput']
  UserLikesPostCreateWithoutPostInput: NexusGenInputs['UserLikesPostCreateWithoutPostInput']
  UserLikesPostCreateWithoutUserInput: NexusGenInputs['UserLikesPostCreateWithoutUserInput']
  UserLikesPostWhereInput: NexusGenInputs['UserLikesPostWhereInput']
  UserProfileCreateWithoutUserInput: NexusGenInputs['UserProfileCreateWithoutUserInput']
  UserProfileWhereInput: NexusGenInputs['UserProfileWhereInput']
  UserUpdateInput: NexusGenInputs['UserUpdateInput']
  UserWhereInput: NexusGenInputs['UserWhereInput']
  CategoryOrderByInput: NexusGenEnums['CategoryOrderByInput']
  PostOrderByInput: NexusGenEnums['PostOrderByInput']
  UserFollowsOrderByInput: NexusGenEnums['UserFollowsOrderByInput']
  UserLikesPostOrderByInput: NexusGenEnums['UserLikesPostOrderByInput']
  UserOrderByInput: NexusGenEnums['UserOrderByInput']
  UserTypeEnum: NexusGenEnums['UserTypeEnum']
}

export interface NexusGenFieldTypes {
  Category: {
    // field return type
    id: string // ID!
    name: string // String!
    posts: NexusGenRootTypes['Post'][] // [Post!]!
  }
  Email: {
    // field return type
    address: string // String!
    id: string // ID!
    user: NexusGenRootTypes['User'] // User!
  }
  Mutation: {
    // field return type
    createOneCategory: NexusGenRootTypes['Category'] // Category!
    createOnePost: NexusGenRootTypes['Post'] // Post!
    createOneUser: NexusGenRootTypes['User'] // User!
    updateManyUsers: NexusGenRootTypes['UpdateManyResult'] // UpdateManyResult!
    updateOneUser: NexusGenRootTypes['User'] // User!
  }
  Post: {
    // field return type
    categories: NexusGenRootTypes['Category'][] // [Category!]!
    createdAt: any // DateTime!
    id: string // ID!
    isPublic: boolean // Boolean!
    liked: string | null // String
    title: string // String!
    totalLikes: number | null // Int
    user: NexusGenRootTypes['User'] // User!
    userId: number | null // Int
    userLikesPosts: NexusGenRootTypes['UserLikesPost'][] // [UserLikesPost!]!
    viewCount: number | null // Int
  }
  Query: {
    // field return type
    category: NexusGenRootTypes['Category'] // Category!
    post: NexusGenRootTypes['Post'] // Post!
    posts: NexusGenRootTypes['Post'][] // [Post!]!
    postsByCategoryId: NexusGenRootTypes['Post'][] // [Post!]!
    user: NexusGenRootTypes['User'] // User!
    users: NexusGenRootTypes['User'][] // [User!]!
    usersByName: NexusGenRootTypes['User'][] // [User!]!
  }
  UpdateManyResult: {
    // field return type
    affectedRows: number // Int!
  }
  User: {
    // field return type
    age: number | null // Int
    email: NexusGenRootTypes['Email'] // Email!
    followees: NexusGenRootTypes['UserFollows'][] // [UserFollows!]!
    followers: NexusGenRootTypes['User'][] // [User!]!
    id: string // ID!
    name: string // String!
    posts: NexusGenRootTypes['Post'][] // [Post!]!
    profile: NexusGenRootTypes['UserProfile'] // UserProfile!
    type: NexusGenEnums['UserTypeEnum'] // UserTypeEnum!
    userLikesPosts: NexusGenRootTypes['UserLikesPost'][] // [UserLikesPost!]!
  }
  UserFollows: {
    // field return type
    followee: NexusGenRootTypes['User'] // User!
    followeeId: number // Int!
    follower: NexusGenRootTypes['User'] // User!
    followerId: number // Int!
    id: string // ID!
  }
  UserLikesPost: {
    // field return type
    id: string // ID!
    post: NexusGenRootTypes['Post'] // Post!
    postId: number // Int!
    user: NexusGenRootTypes['User'] // User!
    userId: number // Int!
  }
  UserProfile: {
    // field return type
    displayName: string // String!
    id: string // ID!
    slug: string // String!
    user: NexusGenRootTypes['User'] // User!
    userId: number // Int!
  }
}

export interface NexusGenArgTypes {
  Category: {
    posts: {
      // args
      first?: number | null // Int
      last?: number | null // Int
      orderBy?: NexusGenEnums['PostOrderByInput'][] | null // [PostOrderByInput!]
      skip?: number | null // Int
      where?: NexusGenInputs['PostWhereInput'] | null // PostWhereInput
    }
  }
  Mutation: {
    createOneCategory: {
      // args
      data: NexusGenInputs['CategoryCreateInput'] // CategoryCreateInput!
    }
    createOnePost: {
      // args
      data: NexusGenInputs['PostCreateInput'] // PostCreateInput!
    }
    createOneUser: {
      // args
      data: NexusGenInputs['UserCreateInput'] // UserCreateInput!
    }
    updateManyUsers: {
      // args
      data: NexusGenInputs['UserUpdateInput'] // UserUpdateInput!
      where: NexusGenInputs['UserWhereInput'] // UserWhereInput!
    }
    updateOneUser: {
      // args
      data: NexusGenInputs['UserUpdateInput'] // UserUpdateInput!
      where: NexusGenInputs['UserWhereInput'] // UserWhereInput!
    }
  }
  Post: {
    categories: {
      // args
      first?: number | null // Int
      last?: number | null // Int
      orderBy?: NexusGenEnums['CategoryOrderByInput'][] | null // [CategoryOrderByInput!]
      skip?: number | null // Int
      where?: NexusGenInputs['CategoryWhereInput'] | null // CategoryWhereInput
    }
    userLikesPosts: {
      // args
      first?: number | null // Int
      last?: number | null // Int
      orderBy?: NexusGenEnums['UserLikesPostOrderByInput'][] | null // [UserLikesPostOrderByInput!]
      skip?: number | null // Int
      where?: NexusGenInputs['UserLikesPostWhereInput'] | null // UserLikesPostWhereInput
    }
  }
  Query: {
    category: {
      // args
      orderBy?: NexusGenEnums['CategoryOrderByInput'][] | null // [CategoryOrderByInput!]
      where?: NexusGenInputs['CategoryWhereInput'] | null // CategoryWhereInput
    }
    post: {
      // args
      orderBy?: NexusGenEnums['PostOrderByInput'][] | null // [PostOrderByInput!]
      where?: NexusGenInputs['PostWhereInput'] | null // PostWhereInput
    }
    posts: {
      // args
      first?: number | null // Int
      last?: number | null // Int
      orderBy?: NexusGenEnums['PostOrderByInput'][] | null // [PostOrderByInput!]
      skip?: number | null // Int
      where?: NexusGenInputs['PostWhereInput'] | null // PostWhereInput
    }
    postsByCategoryId: {
      // args
      categoryId: string // String!
      first?: number | null // Int
      last?: number | null // Int
      orderBy?: NexusGenEnums['PostOrderByInput'][] | null // [PostOrderByInput!]
      skip?: number | null // Int
      where?: NexusGenInputs['PostWhereInput'] | null // PostWhereInput
    }
    user: {
      // args
      orderBy?: NexusGenEnums['UserOrderByInput'][] | null // [UserOrderByInput!]
      where?: NexusGenInputs['UserWhereInput'] | null // UserWhereInput
    }
    users: {
      // args
      first?: number | null // Int
      last?: number | null // Int
      orderBy?: NexusGenEnums['UserOrderByInput'][] | null // [UserOrderByInput!]
      skip?: number | null // Int
      where?: NexusGenInputs['UserWhereInput'] | null // UserWhereInput
    }
    usersByName: {
      // args
      first?: number | null // Int
      last?: number | null // Int
      name: string // String!
      orderBy?: NexusGenEnums['UserOrderByInput'][] | null // [UserOrderByInput!]
      skip?: number | null // Int
      where?: NexusGenInputs['UserWhereInput'] | null // UserWhereInput
    }
  }
  User: {
    followees: {
      // args
      first?: number | null // Int
      last?: number | null // Int
      orderBy?: NexusGenEnums['UserFollowsOrderByInput'][] | null // [UserFollowsOrderByInput!]
      skip?: number | null // Int
      where?: NexusGenInputs['UserFollowsWhereInput'] | null // UserFollowsWhereInput
    }
    followers: {
      // args
      first?: number | null // Int
      last?: number | null // Int
      orderBy?: NexusGenEnums['UserFollowsOrderByInput'][] | null // [UserFollowsOrderByInput!]
      skip?: number | null // Int
      where?: NexusGenInputs['UserFollowsWhereInput'] | null // UserFollowsWhereInput
    }
    posts: {
      // args
      first?: number | null // Int
      last?: number | null // Int
      orderBy?: NexusGenEnums['PostOrderByInput'][] | null // [PostOrderByInput!]
      skip?: number | null // Int
      where?: NexusGenInputs['PostWhereInput'] | null // PostWhereInput
    }
    userLikesPosts: {
      // args
      first?: number | null // Int
      last?: number | null // Int
      orderBy?: NexusGenEnums['UserLikesPostOrderByInput'][] | null // [UserLikesPostOrderByInput!]
      skip?: number | null // Int
      where?: NexusGenInputs['UserLikesPostWhereInput'] | null // UserLikesPostWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames =
  | 'Category'
  | 'Email'
  | 'Mutation'
  | 'Post'
  | 'Query'
  | 'UpdateManyResult'
  | 'User'
  | 'UserFollows'
  | 'UserLikesPost'
  | 'UserProfile'

export type NexusGenInputNames =
  | 'CategoryCreateInput'
  | 'CategoryCreateWithoutPostsInput'
  | 'CategoryWhereInput'
  | 'CreateCategoriesPostsRelationInput'
  | 'CreatePostToUserRelationInput'
  | 'CreatePostsCategoriesRelationInput'
  | 'CreatePostsUserLikesPostsRelationInput'
  | 'CreateUserFollowsToFollowerRelationInput'
  | 'CreateUserLikesPostToPostRelationInput'
  | 'CreateUserLikesPostToUserRelationInput'
  | 'CreateUserToEmailRelationInput'
  | 'CreateUserToProfileRelationInput'
  | 'CreateUsersFolloweesRelationInput'
  | 'CreateUsersPostsRelationInput'
  | 'CreateUsersUserLikesPostsRelationInput'
  | 'EmailCreateWithoutUserInput'
  | 'EmailWhereInput'
  | 'PostCreateInput'
  | 'PostCreateWithoutCategoriesInput'
  | 'PostCreateWithoutUserInput'
  | 'PostCreateWithoutUserLikesPostsInput'
  | 'PostWhereInput'
  | 'UserCreateInput'
  | 'UserCreateWithoutFolloweesInput'
  | 'UserCreateWithoutPostsInput'
  | 'UserFollowsCreateWithoutFolloweeInput'
  | 'UserFollowsWhereInput'
  | 'UserLikesPostCreateWithoutPostInput'
  | 'UserLikesPostCreateWithoutUserInput'
  | 'UserLikesPostWhereInput'
  | 'UserProfileCreateWithoutUserInput'
  | 'UserProfileWhereInput'
  | 'UserUpdateInput'
  | 'UserWhereInput'

export type NexusGenEnumNames =
  | 'CategoryOrderByInput'
  | 'PostOrderByInput'
  | 'UserFollowsOrderByInput'
  | 'UserLikesPostOrderByInput'
  | 'UserOrderByInput'
  | 'UserTypeEnum'

export type NexusGenInterfaceNames = never

export type NexusGenScalarNames = 'Boolean' | 'DateTime' | 'Float' | 'ID' | 'Int' | 'String'

export type NexusGenUnionNames = never

export interface NexusGenTypes {
  context: any
  inputTypes: NexusGenInputs
  rootTypes: NexusGenRootTypes
  argTypes: NexusGenArgTypes
  fieldTypes: NexusGenFieldTypes
  allTypes: NexusGenAllTypes
  inheritedFields: NexusGenInheritedFields
  objectNames: NexusGenObjectNames
  inputNames: NexusGenInputNames
  enumNames: NexusGenEnumNames
  interfaceNames: NexusGenInterfaceNames
  scalarNames: NexusGenScalarNames
  unionNames: NexusGenUnionNames
  allInputTypes:
    | NexusGenTypes['inputNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['scalarNames']
  allOutputTypes:
    | NexusGenTypes['objectNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['unionNames']
    | NexusGenTypes['interfaceNames']
    | NexusGenTypes['scalarNames']
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames']
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes
}