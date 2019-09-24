import { Column, OneToMany, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'

import { GraphQLEntity } from '@/index'

import { Post } from 'test/entities/post'
import { UserLikesPost } from 'test/entities/user-likes-post'
import { Email } from 'test/entities/email'
import { UserFollows } from 'test/entities/user-follows'

export enum UserType {
  ADMIN = 'ADMIN',
  NORMAL = 'NORMAL',
}

@GraphQLEntity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public name: string

  @Column()
  public age: number

  @Column({ enum: UserType, type: 'enum', default: UserType.NORMAL })
  public type: UserType

  @OneToMany(() => Post, post => post.user)
  public posts: Post[]

  @OneToMany(() => UserFollows, follow => follow.user)
  public followees: UserFollows[]

  @OneToMany(() => UserLikesPost, like => like.user)
  public userLikesPosts: UserLikesPost[]

  @OneToOne(() => Email, email => email.user, { nullable: true })
  @JoinColumn()
  public email?: Email
}