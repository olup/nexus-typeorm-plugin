import { Post } from './entities/post'
import { User, UserType } from './entities/user'
import { query, setupTest, create, resetLogger, getDatabaseQueriesCount } from './utils'

describe('UniqueField', () => {
  setupTest(async () => {
    const user = await create<User>(User, {
      age: 3,
      name: 'Jeong',
      type: UserType.NORMAL,
    })
    const user2 = await create<User>(User, {
      age: 3,
      name: 'Foo',
      type: UserType.NORMAL,
    })
    await create(Post, {
      user,
      title: 'hello 1',
    })
    await create(Post, {
      user,
      title: 'hello 2',
    })
    await create(Post, {
      user: user2,
      title: 'hello 3',
    })
    resetLogger()
  })

  it("should fetch an user with name 'Jeong'", async () => {
    const result = await query(`{
      user (where: { name: "Jeong" }) {
        id
        name
        age
      }
    }`)

    expect(result).toMatchObject({
      user: {
        age: 3,
        id: expect.any(String),
        name: 'Jeong',
      },
    })
  })

  it("should fetch an post by it's userId", async () => {
    const userResult = await query(`{
      user (where: { name: "Jeong" }) {
        id
        name
        age
      }
    }`)

    const user: User = userResult.user
    expect(user).toBeTruthy()
    const result = await query(`{
      post(where: { userId: ${user.id} }, orderBy: [createdAt_DESC]) {
        id
        title
      }
    }`)

    expect(result).toMatchObject({
      post: {
        title: 'hello 2',
      },
    })
  })

  it("should fetch user's posts", async () => {
    const result = await query(`{
      user (where: { name: "Jeong" }) {
        name
        age
        posts (first: 2) {
          id
          title
        }
      }
    }`)

    expect(result).toMatchObject({
      user: {
        age: 3,
        name: 'Jeong',
        posts: expect.arrayContaining([
          {
            id: expect.any(String),
            title: 'hello 1',
          },
          {
            id: expect.any(String),
            title: 'hello 2',
          },
        ]),
      },
    })
  })

  it('should fetch deep relations', async () => {
    expect(getDatabaseQueriesCount()).toBe(0)
    const result = await query(`{
      post (where: { title: "hello 1" }) {
        id
        title
        user {
          id
          posts {
            id
            title
            user {
              id
            }
          }
        }
      }
    }`)

    expect(result).toMatchObject({
      post: {
        id: expect.any(String),
        title: 'hello 1',
        user: {
          id: expect.any(String),
          posts: expect.arrayContaining([
            {
              id: expect.any(String),
              title: 'hello 1',
              user: {
                id: expect.any(String),
              },
            },
            {
              id: expect.any(String),
              title: 'hello 2',
              user: {
                id: expect.any(String),
              },
            },
          ]),
        },
      },
    })
    expect(getDatabaseQueriesCount()).toBe(1)
  })

  it('should fetch deep relations without dataloaders', async () => {
    expect(getDatabaseQueriesCount()).toBe(0)
    const result = await query(
      `{
      post (where: { title: "hello 1" }) {
        id
        title
        user {
          id
          posts {
            id
            title
            user {
              id
              posts {
                id
              }
            }
          }
        }
      }
    }`,
      {},
    )

    expect(result).toMatchObject({
      post: {
        id: expect.any(String),
        title: 'hello 1',
        user: {
          id: expect.any(String),
          posts: expect.arrayContaining([
            {
              id: expect.any(String),
              title: 'hello 1',
              user: {
                id: expect.any(String),
                posts: [
                  {
                    id: expect.any(String),
                  },
                  {
                    id: expect.any(String),
                  },
                ],
              },
            },
            {
              id: expect.any(String),
              title: 'hello 2',
              user: {
                id: expect.any(String),
                posts: [
                  {
                    id: expect.any(String),
                  },
                  {
                    id: expect.any(String),
                  },
                ],
              },
            },
          ]),
        },
      },
    })
    expect(getDatabaseQueriesCount()).toBe(1)
  })
})
