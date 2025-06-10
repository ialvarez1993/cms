import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    description: '';
    displayName: 'CTA';
    icon: 'apps';
  };
  attributes: {
    call: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files'>;
    url: Schema.Attribute.String;
  };
}

export interface SharedInternalCategory extends Struct.ComponentSchema {
  collectionName: 'components_shared_internal_categories';
  info: {
    displayName: 'internalCategory';
    icon: 'archive';
  };
  attributes: {
    allowSubcategoriesDropdown: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    categoryId: Schema.Attribute.Integer & Schema.Attribute.Unique;
    label: Schema.Attribute.String;
    maxNumberOfSubcategories: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<6>;
  };
}

export interface SharedInternalPage extends Struct.ComponentSchema {
  collectionName: 'components_shared_internal_pages';
  info: {
    displayName: 'internalPage';
    icon: 'calendar';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String;
  };
}

export interface SharedSlide extends Struct.ComponentSchema {
  collectionName: 'components_shared_slides';
  info: {
    description: '';
    displayName: 'slide';
    icon: 'landscape';
  };
  attributes: {
    discount: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    price: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.cta': SharedCta;
      'shared.internal-category': SharedInternalCategory;
      'shared.internal-page': SharedInternalPage;
      'shared.slide': SharedSlide;
    }
  }
}
