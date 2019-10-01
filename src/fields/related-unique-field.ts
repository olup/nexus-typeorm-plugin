import { SchemaBuilder, TypeResolversMap } from '../schema-builder'
import { getDatabaseObjectMetadata } from '../decorators'
import { makeFirstLetterLowerCase } from '../util'
import { ORMResolverContext } from '../dataloader/entity-dataloader'
import { getConnection } from 'typeorm'
import { ArgsUniqueGraphQLResolver } from './unique-field'

interface RelatedEntityUniqueFieldOptions {
  onType: string
  sourceForeignKey: string
  propertyName: string
  fieldName?: string
}

export function createRelatedUniqueField<Model extends Function>(
  relatedEntity: Model,
  schemaBuilder: SchemaBuilder,
  options: RelatedEntityUniqueFieldOptions,
): SchemaBuilder {
  const { name: entityName } = getDatabaseObjectMetadata(relatedEntity)
  const { onType, sourceForeignKey, fieldName = makeFirstLetterLowerCase(entityName) } = options

  if (
    schemaBuilder.meta[entityName].uniqueFieldName[onType] &&
    schemaBuilder.meta[entityName].uniqueFieldName[onType].includes(fieldName)
  ) {
    return schemaBuilder
  }
  const nextSchemaBuilder = { ...schemaBuilder }
  nextSchemaBuilder.typeDefs += `
    type ${onType} {
      ${fieldName}: ${entityName}
    }
  `

  nextSchemaBuilder.resolversMap[onType] = {
    ...nextSchemaBuilder.resolversMap[onType],
    [fieldName]: async (source: any, args: ArgsUniqueGraphQLResolver, ctx: ORMResolverContext) => {
      if (!source[sourceForeignKey]) {
        return null
      }

      if (source[options.propertyName]) {
        if (args.join) {
          throw new Error('Join argument is ignored here because a this field was already joined')
        }

        return source[options.propertyName]
      }

      if (ctx && ctx.orm) {
        return ctx.orm.entitiesDataLoader.load({
          entity: relatedEntity,
          value: source[sourceForeignKey],
        })
      }

      return getConnection()
        .getRepository(relatedEntity)
        .findOne(source[sourceForeignKey])
    },
  } as TypeResolversMap

  return nextSchemaBuilder
}
