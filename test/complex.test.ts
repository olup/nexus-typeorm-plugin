import { query, create, setupTest, getDatabaseQueriesCount } from './utils'
import { User, UserType } from './entities/user'
import { Post } from './entities/post'
import { Category } from './entities/category'

describe('CRUD', () => {
  describe('Complex fields', () => {
    setupTest(async () => {
      const gina = await create<User>(User, {
        age: 18,
        name: 'Gina',
        type: UserType.NORMAL,
      })
      const john = await create<User>(User, {
        age: 32,
        name: 'John',
        type: UserType.NORMAL,
      })
      const jack = await create<User>(User, {
        age: 24,
        name: 'Jack',
        type: UserType.NORMAL,
      })
      const post = await create(Post, {
        user: gina,
        title: 'post 1',
      })
      const post2 = await create(Post, {
        user: john,
        title: 'post 2',
      })
      const post3 = await create(Post, {
        user: jack,
        title: 'post 3',
      })
      await create(Category, {
        name: 'foo',
        posts: [post, post2],
      })
      await create(Category, {
        name: 'foo',
        posts: [post3],
      })
    })

    test('usersByName', async () => {
      const result = await query(`{
        usersByName(name: "John") {
          id
          name
          age
        }
      }`)

      expect(result.errors).toEqual(undefined)
      expect(result.data).toMatchObject({
        usersByName: [
          {
            age: 32,
            id: expect.any(String),
            name: 'John',
          },
        ],
      })
      expect(getDatabaseQueriesCount()).toBe(1)
    })

    test('postsByCategory', async () => {
      const categoryResult = await query(`{
        category (where: { name: "foo" }) {
          id
        }
      }`)
      expect(categoryResult.errors).toEqual(undefined)
      const result = await query(`{
        postsByCategoryId(categoryId: "${categoryResult.data!.category.id}") {
          title
        }
      }`)

      expect(result.errors).toEqual(undefined)
      expect(result.data).toMatchObject({
        postsByCategoryId: [
          {
            title: 'post 1',
          },
          {
            title: 'post 2',
          },
        ],
      })
      expect(getDatabaseQueriesCount()).toBe(2)
    })
  })
})
