import { query, create, setupTest, getDatabaseQueriesCount } from './utils'
import { User, UserType } from './entities/user'
import { Post } from './entities/post'

describe('CRUD', () => {
  describe('Find One', () => {
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
      await create(Post, {
        user: gina,
        title: 'post 1',
      })
      await create(Post, {
        user: john,
        title: 'post 2',
      })
      await create(Post, {
        user: jack,
        title: 'post 3',
      })
    })

    test('find one entity', async () => {
      const result = await query(`{
        user {
          id
          name
          age
        }
      }`)

      expect(result.errors).toEqual(undefined)
      expect(result.data).toMatchObject({
        user: {
          age: 18,
          id: expect.any(String),
          name: 'Gina',
        },
      })
      expect(getDatabaseQueriesCount()).toBe(1)
    })

    test('find one entity with where argument', async () => {
      const result = await query(`{
        john: user(where: { name: "John" }) {
          name
        }
        jack: user(where: { name: "Jack" }) {
          name
        }
      }`)
      expect(result.errors).toEqual(undefined)
      expect(result.data).toMatchObject({
        john: {
          name: 'John',
        },
        jack: {
          name: 'Jack',
        },
      })
      expect(getDatabaseQueriesCount()).toBe(2)
    })

    test('find one entity by relation', async () => {
      const users = await query(`{
        gina: user(where: { name: "Gina" }) { id }
        john: user(where: { name: "John" }) { id }
      }`)
      expect(users.errors).toEqual(undefined)

      const result = await query(`{
        post1: post(where: { userId: ${users.data!.gina.id} }) {
          title
          user {
            name
          }
        }
        post2: post(where: { userId: ${users.data!.john.id} }) {
          title
          user {
            name
          }
        }
      }`)
      expect(result.errors).toEqual(undefined)
      expect(result.data).toMatchObject({
        post1: {
          title: 'post 1',
          user: {
            name: 'Gina',
          },
        },
        post2: {
          title: 'post 2',
          user: {
            name: 'John',
          },
        },
      })
      expect(result.errors).toEqual(undefined)
      expect(getDatabaseQueriesCount()).toBe(4)
    })

    test('find one entity with ordering', async () => {
      const result = await query(`{
        gina: user(orderBy: age_ASC) { name }
        john: user(orderBy: age_DESC) { name }
      }`)
      expect(result.errors).toEqual(undefined)
      expect(result.data).toMatchObject({
        gina: {
          name: 'Gina',
        },
        john: {
          name: 'John',
        },
      })
      expect(getDatabaseQueriesCount()).toBe(2)
    })
  })
})
