import type { Schema, Struct } from '@strapi/strapi';

export interface LocationMapPosition extends Struct.ComponentSchema {
  collectionName: 'components_location_map_positions';
  info: {
    displayName: 'Map Position';
  };
  attributes: {
    x: Schema.Attribute.Decimal;
    y: Schema.Attribute.Decimal;
  };
}

export interface QuestionAssociationPair extends Struct.ComponentSchema {
  collectionName: 'components_question_association_pairs';
  info: {
    displayName: 'Association Pair';
  };
  attributes: {
    left: Schema.Attribute.String;
    right: Schema.Attribute.String;
  };
}

export interface QuestionChronologyItem extends Struct.ComponentSchema {
  collectionName: 'components_question_chronology_items';
  info: {
    displayName: 'Chronology Item';
  };
  attributes: {
    correctOrderIndex: Schema.Attribute.Integer;
    label: Schema.Attribute.String;
  };
}

export interface QuestionOption extends Struct.ComponentSchema {
  collectionName: 'components_question_options';
  info: {
    displayName: 'Option';
  };
  attributes: {
    isCorrect: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'location.map-position': LocationMapPosition;
      'question.association-pair': QuestionAssociationPair;
      'question.chronology-item': QuestionChronologyItem;
      'question.option': QuestionOption;
    }
  }
}
