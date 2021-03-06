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
  CategoryOrderByInput: {
    // input type
    id?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
    name?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
  }
  CategoryWhereInput: {
    // input type
    AND?: NexusGenInputs['CategoryWhereInput'][] | null // [CategoryWhereInput!]
    id?: NexusGenInputs['IdFilter'] | null // IdFilter
    name?: NexusGenInputs['StringFilter'] | null // StringFilter
    NOT?: NexusGenInputs['CategoryWhereInput'][] | null // [CategoryWhereInput!]
    OR?: NexusGenInputs['CategoryWhereInput'][] | null // [CategoryWhereInput!]
  }
  CategoryWhereUniqueInput: {
    // input type
    id?: string | null // ID
    name?: string | null // String
  }
  CreateCategoriesPostsRelationInput: {
    // input type
    connect?: NexusGenInputs['PostWhereInput'] | null // PostWhereInput
    create?: NexusGenInputs['PostCreateWithoutCategoriesInput'][] | null // [PostCreateWithoutCategoriesInput!]
  }
  CreatePostToUserRelationInput: {
    // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null // UserWhereUniqueInput
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
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutFolloweesInput'] | null // UserCreateWithoutFolloweesInput
  }
  CreateUserLikesPostToPostRelationInput: {
    // input type
    connect?: NexusGenInputs['PostWhereUniqueInput'] | null // PostWhereUniqueInput
    create?: NexusGenInputs['PostCreateWithoutUserLikesPostsInput'] | null // PostCreateWithoutUserLikesPostsInput
  }
  CreateUserLikesPostToUserRelationInput: {
    // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutPostsInput'] | null // UserCreateWithoutPostsInput
  }
  CreateUserToEmailRelationInput: {
    // input type
    connect?: NexusGenInputs['EmailWhereUniqueInput'] | null // EmailWhereUniqueInput
    create?: NexusGenInputs['EmailCreateWithoutUserInput'] | null // EmailCreateWithoutUserInput
  }
  CreateUserToProfileRelationInput: {
    // input type
    connect?: NexusGenInputs['UserProfileWhereUniqueInput'] | null // UserProfileWhereUniqueInput
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
  EmailWhereUniqueInput: {
    // input type
    id?: string | null // ID
  }
  IdFilter: {
    // input type
    equals?: string | null // ID
    in?: string[] | null // [ID!]
  }
  IntFilter: {
    // input type
    equals?: number | null // Int
    gt?: number | null // Int
    gte?: number | null // Int
    in?: number[] | null // [Int!]
    lt?: number | null // Int
    lte?: number | null // Int
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
  PostOrderByInput: {
    // input type
    createdAt?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
    id?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
    isPublic?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
    liked?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
    title?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
    totalLikes?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
    userId?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
    viewCount?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
  }
  PostUpdateInput: {
    // input type
    createdAt?: any | null // DateTime
    isPublic?: boolean | null // Boolean
    liked?: string | null // String
    title?: string | null // String
    totalLikes?: number | null // Int
    userId?: number | null // Int
    viewCount?: number | null // Int
  }
  PostWhereInput: {
    // input type
    AND?: NexusGenInputs['PostWhereInput'][] | null // [PostWhereInput!]
    createdAt?: any | null // DateTime
    id?: NexusGenInputs['IdFilter'] | null // IdFilter
    isPublic?: boolean | null // Boolean
    liked?: NexusGenInputs['StringFilter'] | null // StringFilter
    NOT?: NexusGenInputs['PostWhereInput'][] | null // [PostWhereInput!]
    OR?: NexusGenInputs['PostWhereInput'][] | null // [PostWhereInput!]
    title?: NexusGenInputs['StringFilter'] | null // StringFilter
    totalLikes?: NexusGenInputs['IntFilter'] | null // IntFilter
    userId?: NexusGenInputs['IntFilter'] | null // IntFilter
    viewCount?: NexusGenInputs['IntFilter'] | null // IntFilter
  }
  PostWhereUniqueInput: {
    // input type
    id?: string | null // ID
    title?: string | null // String
  }
  StringFilter: {
    // input type
    contains?: string | null // String
    equals?: string | null // String
    in?: string[] | null // [String!]
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
  UserFollowsOrderByInput: {
    // input type
    followeeId?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
    followerId?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
    id?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
  }
  UserFollowsWhereInput: {
    // input type
    AND?: NexusGenInputs['UserFollowsWhereInput'][] | null // [UserFollowsWhereInput!]
    followeeId?: NexusGenInputs['IntFilter'] | null // IntFilter
    followerId?: NexusGenInputs['IntFilter'] | null // IntFilter
    id?: NexusGenInputs['IdFilter'] | null // IdFilter
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
  UserLikesPostOrderByInput: {
    // input type
    id?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
    postId?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
    userId?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
  }
  UserLikesPostWhereInput: {
    // input type
    AND?: NexusGenInputs['UserLikesPostWhereInput'][] | null // [UserLikesPostWhereInput!]
    id?: NexusGenInputs['IdFilter'] | null // IdFilter
    NOT?: NexusGenInputs['UserLikesPostWhereInput'][] | null // [UserLikesPostWhereInput!]
    OR?: NexusGenInputs['UserLikesPostWhereInput'][] | null // [UserLikesPostWhereInput!]
    postId?: NexusGenInputs['IntFilter'] | null // IntFilter
    userId?: NexusGenInputs['IntFilter'] | null // IntFilter
  }
  UserOrderByInput: {
    // input type
    age?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
    email?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
    id?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
    name?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
    type?: NexusGenEnums['OrderByArgument'] | null // OrderByArgument
  }
  UserProfileCreateWithoutUserInput: {
    // input type
    displayName: string // String!
    slug: string // String!
  }
  UserProfileWhereUniqueInput: {
    // input type
    id?: string | null // ID
    userId?: number | null // Int
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
    age?: NexusGenInputs['IntFilter'] | null // IntFilter
    AND?: NexusGenInputs['UserWhereInput'][] | null // [UserWhereInput!]
    id?: NexusGenInputs['IdFilter'] | null // IdFilter
    name?: NexusGenInputs['StringFilter'] | null // StringFilter
    NOT?: NexusGenInputs['UserWhereInput'][] | null // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null // [UserWhereInput!]
    type?: NexusGenEnums['UserTypeEnum'] | null // UserTypeEnum
  }
  UserWhereUniqueInput: {
    // input type
    id?: string | null // ID
    name?: string | null // String
  }
}

export interface NexusGenEnums {
  OrderByArgument: 'ASC' | 'DESC'
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
  CategoryOrderByInput: NexusGenInputs['CategoryOrderByInput']
  CategoryWhereInput: NexusGenInputs['CategoryWhereInput']
  CategoryWhereUniqueInput: NexusGenInputs['CategoryWhereUniqueInput']
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
  EmailWhereUniqueInput: NexusGenInputs['EmailWhereUniqueInput']
  IdFilter: NexusGenInputs['IdFilter']
  IntFilter: NexusGenInputs['IntFilter']
  PostCreateInput: NexusGenInputs['PostCreateInput']
  PostCreateWithoutCategoriesInput: NexusGenInputs['PostCreateWithoutCategoriesInput']
  PostCreateWithoutUserInput: NexusGenInputs['PostCreateWithoutUserInput']
  PostCreateWithoutUserLikesPostsInput: NexusGenInputs['PostCreateWithoutUserLikesPostsInput']
  PostOrderByInput: NexusGenInputs['PostOrderByInput']
  PostUpdateInput: NexusGenInputs['PostUpdateInput']
  PostWhereInput: NexusGenInputs['PostWhereInput']
  PostWhereUniqueInput: NexusGenInputs['PostWhereUniqueInput']
  StringFilter: NexusGenInputs['StringFilter']
  UserCreateInput: NexusGenInputs['UserCreateInput']
  UserCreateWithoutFolloweesInput: NexusGenInputs['UserCreateWithoutFolloweesInput']
  UserCreateWithoutPostsInput: NexusGenInputs['UserCreateWithoutPostsInput']
  UserFollowsCreateWithoutFolloweeInput: NexusGenInputs['UserFollowsCreateWithoutFolloweeInput']
  UserFollowsOrderByInput: NexusGenInputs['UserFollowsOrderByInput']
  UserFollowsWhereInput: NexusGenInputs['UserFollowsWhereInput']
  UserLikesPostCreateWithoutPostInput: NexusGenInputs['UserLikesPostCreateWithoutPostInput']
  UserLikesPostCreateWithoutUserInput: NexusGenInputs['UserLikesPostCreateWithoutUserInput']
  UserLikesPostOrderByInput: NexusGenInputs['UserLikesPostOrderByInput']
  UserLikesPostWhereInput: NexusGenInputs['UserLikesPostWhereInput']
  UserOrderByInput: NexusGenInputs['UserOrderByInput']
  UserProfileCreateWithoutUserInput: NexusGenInputs['UserProfileCreateWithoutUserInput']
  UserProfileWhereUniqueInput: NexusGenInputs['UserProfileWhereUniqueInput']
  UserUpdateInput: NexusGenInputs['UserUpdateInput']
  UserWhereInput: NexusGenInputs['UserWhereInput']
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput']
  OrderByArgument: NexusGenEnums['OrderByArgument']
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
    updateOnePost: NexusGenRootTypes['Post'] // Post!
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
      orderBy?: NexusGenInputs['PostOrderByInput'] | null // PostOrderByInput
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
    updateOnePost: {
      // args
      data: NexusGenInputs['PostUpdateInput'] // PostUpdateInput!
      where: NexusGenInputs['PostWhereInput'] // PostWhereInput!
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
      orderBy?: NexusGenInputs['CategoryOrderByInput'] | null // CategoryOrderByInput
      skip?: number | null // Int
      where?: NexusGenInputs['CategoryWhereInput'] | null // CategoryWhereInput
    }
    userLikesPosts: {
      // args
      first?: number | null // Int
      last?: number | null // Int
      orderBy?: NexusGenInputs['UserLikesPostOrderByInput'] | null // UserLikesPostOrderByInput
      skip?: number | null // Int
      where?: NexusGenInputs['UserLikesPostWhereInput'] | null // UserLikesPostWhereInput
    }
  }
  Query: {
    category: {
      // args
      where?: NexusGenInputs['CategoryWhereUniqueInput'] | null // CategoryWhereUniqueInput
    }
    post: {
      // args
      where?: NexusGenInputs['PostWhereUniqueInput'] | null // PostWhereUniqueInput
    }
    posts: {
      // args
      first?: number | null // Int
      last?: number | null // Int
      orderBy?: NexusGenInputs['PostOrderByInput'] | null // PostOrderByInput
      skip?: number | null // Int
      where?: NexusGenInputs['PostWhereInput'] | null // PostWhereInput
    }
    postsByCategoryId: {
      // args
      categoryId: string // String!
      first?: number | null // Int
      last?: number | null // Int
      orderBy?: NexusGenInputs['PostOrderByInput'] | null // PostOrderByInput
      skip?: number | null // Int
      where?: NexusGenInputs['PostWhereInput'] | null // PostWhereInput
    }
    user: {
      // args
      where?: NexusGenInputs['UserWhereUniqueInput'] | null // UserWhereUniqueInput
    }
    users: {
      // args
      first?: number | null // Int
      last?: number | null // Int
      orderBy?: NexusGenInputs['UserOrderByInput'] | null // UserOrderByInput
      skip?: number | null // Int
      where?: NexusGenInputs['UserWhereInput'] | null // UserWhereInput
    }
    usersByName: {
      // args
      first?: number | null // Int
      last?: number | null // Int
      name: string // String!
      orderBy?: NexusGenInputs['UserOrderByInput'] | null // UserOrderByInput
      skip?: number | null // Int
      where?: NexusGenInputs['UserWhereInput'] | null // UserWhereInput
    }
  }
  User: {
    followees: {
      // args
      first?: number | null // Int
      last?: number | null // Int
      orderBy?: NexusGenInputs['UserFollowsOrderByInput'] | null // UserFollowsOrderByInput
      skip?: number | null // Int
      where?: NexusGenInputs['UserFollowsWhereInput'] | null // UserFollowsWhereInput
    }
    followers: {
      // args
      first?: number | null // Int
      last?: number | null // Int
      orderBy?: NexusGenInputs['UserFollowsOrderByInput'] | null // UserFollowsOrderByInput
      skip?: number | null // Int
      where?: NexusGenInputs['UserFollowsWhereInput'] | null // UserFollowsWhereInput
    }
    posts: {
      // args
      first?: number | null // Int
      last?: number | null // Int
      orderBy?: NexusGenInputs['PostOrderByInput'] | null // PostOrderByInput
      skip?: number | null // Int
      where?: NexusGenInputs['PostWhereInput'] | null // PostWhereInput
    }
    userLikesPosts: {
      // args
      first?: number | null // Int
      last?: number | null // Int
      orderBy?: NexusGenInputs['UserLikesPostOrderByInput'] | null // UserLikesPostOrderByInput
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
  | 'CategoryOrderByInput'
  | 'CategoryWhereInput'
  | 'CategoryWhereUniqueInput'
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
  | 'EmailWhereUniqueInput'
  | 'IdFilter'
  | 'IntFilter'
  | 'PostCreateInput'
  | 'PostCreateWithoutCategoriesInput'
  | 'PostCreateWithoutUserInput'
  | 'PostCreateWithoutUserLikesPostsInput'
  | 'PostOrderByInput'
  | 'PostUpdateInput'
  | 'PostWhereInput'
  | 'PostWhereUniqueInput'
  | 'StringFilter'
  | 'UserCreateInput'
  | 'UserCreateWithoutFolloweesInput'
  | 'UserCreateWithoutPostsInput'
  | 'UserFollowsCreateWithoutFolloweeInput'
  | 'UserFollowsOrderByInput'
  | 'UserFollowsWhereInput'
  | 'UserLikesPostCreateWithoutPostInput'
  | 'UserLikesPostCreateWithoutUserInput'
  | 'UserLikesPostOrderByInput'
  | 'UserLikesPostWhereInput'
  | 'UserOrderByInput'
  | 'UserProfileCreateWithoutUserInput'
  | 'UserProfileWhereUniqueInput'
  | 'UserUpdateInput'
  | 'UserWhereInput'
  | 'UserWhereUniqueInput'

export type NexusGenEnumNames = 'OrderByArgument' | 'UserTypeEnum'

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
