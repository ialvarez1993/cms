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
      'shared.slide': SharedSlide;
    }
  }
}
