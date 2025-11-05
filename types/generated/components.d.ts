import type { Schema, Struct } from '@strapi/strapi';

export interface ContentParagraph extends Struct.ComponentSchema {
  collectionName: 'components_content_paragraphs';
  info: {
    displayName: 'paragraph';
  };
  attributes: {
    paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface MediaImage extends Struct.ComponentSchema {
  collectionName: 'components_media_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MediaVideo extends Struct.ComponentSchema {
  collectionName: 'components_media_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    placeholder: Schema.Attribute.Media<'files' | 'images'>;
    video: Schema.Attribute.Media<'files' | 'videos'>;
  };
}

export interface SectionsAccordion extends Struct.ComponentSchema {
  collectionName: 'components_sections_accordions';
  info: {
    displayName: 'accordion';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.card', true>;
    content: Schema.Attribute.Component<'content.paragraph', true>;
    ctas: Schema.Attribute.Component<'ui.cta', true>;
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    content: Schema.Attribute.Component<'content.paragraph', true>;
    ctas: Schema.Attribute.Component<'ui.cta', true>;
    heading: Schema.Attribute.String;
    image_mobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    image_sreens_desktop: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    image_watch_desktop: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    sub_heading: Schema.Attribute.String;
  };
}

export interface SectionsWhyResolveDtx extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_resolve_dtxes';
  info: {
    displayName: 'why-resolve-dtx';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.card', true>;
    content: Schema.Attribute.Component<'content.paragraph', true>;
    cta: Schema.Attribute.Component<'ui.cta', true>;
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
  };
}

export interface UiCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    paragraph: Schema.Attribute.Text;
  };
}

export interface UiCta extends Struct.ComponentSchema {
  collectionName: 'components_ui_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['white', 'primary']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'white'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<
      ['default', 'arrow-right', 'arrow-bottom']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.paragraph': ContentParagraph;
      'media.image': MediaImage;
      'media.video': MediaVideo;
      'sections.accordion': SectionsAccordion;
      'sections.hero': SectionsHero;
      'sections.why-resolve-dtx': SectionsWhyResolveDtx;
      'ui.card': UiCard;
      'ui.cta': UiCta;
    }
  }
}
