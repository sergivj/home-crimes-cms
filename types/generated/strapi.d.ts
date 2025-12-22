import type { Struct } from '@strapi/strapi';

declare module '@strapi/types' {
  export module Public {
    export module Registries {
      export interface ContentTypeSchemas {
        'api::case.case': Struct.CollectionTypeSchema;
        'api::character.character': Struct.CollectionTypeSchema;
        'api::event.event': Struct.CollectionTypeSchema;
        'api::evidence.evidence': Struct.CollectionTypeSchema;
        'api::family.family': Struct.CollectionTypeSchema;
        'api::location.location': Struct.CollectionTypeSchema;
        'api::order.order': Struct.CollectionTypeSchema;
        'api::product.product': Struct.CollectionTypeSchema;
        'api::question.question': Struct.CollectionTypeSchema;
        'api::unlock-rule.unlock-rule': Struct.CollectionTypeSchema;
      }
    }
  }
}
