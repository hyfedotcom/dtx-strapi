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

export interface GeneralSetting extends Struct.ComponentSchema {
  collectionName: 'components_general_settings';
  info: {
    displayName: 'setting';
  };
  attributes: {
    logo_footer: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    logo_header: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface LayoutsFooter extends Struct.ComponentSchema {
  collectionName: 'components_layouts_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    column_links: Schema.Attribute.Component<'navigation.column-links', true>;
    copyright: Schema.Attribute.String;
    policy_links: Schema.Attribute.Component<'navigation.nav-link', true>;
  };
}

export interface LayoutsHeader extends Struct.ComponentSchema {
  collectionName: 'components_layouts_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'ui.cta', false>;
    nav_links: Schema.Attribute.Component<'navigation.nav-link', true>;
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

export interface NavigationCard extends Struct.ComponentSchema {
  collectionName: 'components_navigation_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    gradient_end: Schema.Attribute.String;
    gradient_start: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.String;
    paragraph: Schema.Attribute.String;
  };
}

export interface NavigationColumnLinks extends Struct.ComponentSchema {
  collectionName: 'components_navigation_column_links';
  info: {
    displayName: 'column-links';
  };
  attributes: {
    heading: Schema.Attribute.String;
    nav_link: Schema.Attribute.Component<'navigation.nav-link', true>;
  };
}

export interface NavigationNavLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_nav_links';
  info: {
    displayName: 'nav-link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    content: Schema.Attribute.Component<'content.paragraph', true>;
    ctas: Schema.Attribute.Component<'ui.cta', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsFeatureScrollShowcase extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_scroll_showcases';
  info: {
    displayName: 'feature-scroll-showcase';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.card', true>;
    content: Schema.Attribute.Component<'content.paragraph', true>;
    ctas: Schema.Attribute.Component<'ui.cta', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsFeatureSticky extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_stickies';
  info: {
    displayName: 'feature-sticky';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.card', true>;
    content: Schema.Attribute.Component<'content.paragraph', true>;
    ctas: Schema.Attribute.Component<'ui.cta', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsFeatureTabs extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_tabs';
  info: {
    displayName: 'feature-tabs';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.cards-layouts', true> &
      Schema.Attribute.Required;
    content: Schema.Attribute.Component<'content.paragraph', true>;
    ctas: Schema.Attribute.Component<'ui.cta', true>;
    heading: Schema.Attribute.String;
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

export interface SectionsNavigation extends Struct.ComponentSchema {
  collectionName: 'components_sections_navigations';
  info: {
    displayName: 'navigation';
  };
  attributes: {
    content: Schema.Attribute.Component<'content.paragraph', true>;
    heading: Schema.Attribute.String;
    nav_to_sections: Schema.Attribute.Component<'navigation.nav-link', true>;
    sub_heading: Schema.Attribute.String;
  };
}

export interface SectionsSolutions extends Struct.ComponentSchema {
  collectionName: 'components_sections_solutions';
  info: {
    displayName: 'solutions';
  };
  attributes: {
    cards: Schema.Attribute.Component<'navigation.card', true>;
    content: Schema.Attribute.Component<'content.paragraph', true>;
    ctas: Schema.Attribute.Component<'ui.cta', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsWhyResolveDtx extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_resolve_dtxes';
  info: {
    displayName: 'feature-cards-rights';
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
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface UiCardsLayouts extends Struct.ComponentSchema {
  collectionName: 'components_ui_cards_layouts';
  info: {
    displayName: 'cards-layouts';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    layout: Schema.Attribute.Enumeration<
      [
        'layout-asthma',
        'layout-COPD',
        'layout-UK-guidance',
        'layout-lung-cancer',
        'layout-ILD',
        'layout-default',
      ]
    > &
      Schema.Attribute.Required;
    paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
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
      'general.setting': GeneralSetting;
      'layouts.footer': LayoutsFooter;
      'layouts.header': LayoutsHeader;
      'media.image': MediaImage;
      'media.video': MediaVideo;
      'navigation.card': NavigationCard;
      'navigation.column-links': NavigationColumnLinks;
      'navigation.nav-link': NavigationNavLink;
      'sections.accordion': SectionsAccordion;
      'sections.cta': SectionsCta;
      'sections.feature-scroll-showcase': SectionsFeatureScrollShowcase;
      'sections.feature-sticky': SectionsFeatureSticky;
      'sections.feature-tabs': SectionsFeatureTabs;
      'sections.hero': SectionsHero;
      'sections.navigation': SectionsNavigation;
      'sections.solutions': SectionsSolutions;
      'sections.why-resolve-dtx': SectionsWhyResolveDtx;
      'ui.card': UiCard;
      'ui.cards-layouts': UiCardsLayouts;
      'ui.cta': UiCta;
    }
  }
}
