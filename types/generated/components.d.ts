import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockCards extends Schema.Component {
  collectionName: 'components_block_cards';
  info: {
    displayName: 'WhyWe';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    card: Attribute.Component<'shared.card', true>;
  };
}

export interface BlockCategory extends Schema.Component {
  collectionName: 'components_block_categories';
  info: {
    displayName: 'Category';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    blogs: Attribute.Relation<'block.category', 'oneToMany', 'api::blog.blog'>;
    link: Attribute.Component<'shared.link'>;
  };
}

export interface BlockContent extends Schema.Component {
  collectionName: 'components_block_contents';
  info: {
    displayName: 'content';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface BlockCta extends Schema.Component {
  collectionName: 'components_block_ctas';
  info: {
    displayName: 'Cta';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    link: Attribute.Component<'shared.link'>;
  };
}

export interface BlockFaq extends Schema.Component {
  collectionName: 'components_block_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    accordion: Attribute.Component<'shared.accordion', true>;
  };
}

export interface BlockHero extends Schema.Component {
  collectionName: 'components_block_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    link: Attribute.Component<'shared.link', true>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    slider: Attribute.Component<'shared.slider'>;
  };
}

export interface BlockMainBlog extends Schema.Component {
  collectionName: 'components_block_main_blogs';
  info: {
    displayName: 'mainBlog';
  };
  attributes: {
    blog: Attribute.Relation<'block.main-blog', 'oneToOne', 'api::blog.blog'>;
  };
}

export interface BlockPopup extends Schema.Component {
  collectionName: 'components_block_popups';
  info: {
    displayName: 'Popup';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlockPrice extends Schema.Component {
  collectionName: 'components_block_prices';
  info: {
    displayName: 'Price';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    card: Attribute.Component<'shared.price-card', true>;
  };
}

export interface BlockSeo extends Schema.Component {
  collectionName: 'components_block_seos';
  info: {
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    MetaTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    MetaDescription: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 147;
      }>;
    canonical: Attribute.String;
    MetaImege: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    StructuredData: Attribute.JSON;
  };
}

export interface BlockServices extends Schema.Component {
  collectionName: 'components_block_services';
  info: {
    displayName: 'Services';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    tabs: Attribute.Component<'shared.tabs', true>;
  };
}

export interface BlockTestimonial extends Schema.Component {
  collectionName: 'components_block_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    card: Attribute.Component<'shared.card', true>;
    title: Attribute.String;
    text: Attribute.RichText;
  };
}

export interface SharedAccordion extends Schema.Component {
  collectionName: 'components_shared_accordions';
  info: {
    displayName: 'Accordion';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface SharedCard extends Schema.Component {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedFormSection extends Schema.Component {
  collectionName: 'components_shared_form_sections';
  info: {
    displayName: 'FormSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    textInput: Attribute.Component<'shared.input', true>;
    select: Attribute.Component<'shared.select', true>;
  };
}

export interface SharedInputCheckbox extends Schema.Component {
  collectionName: 'components_shared_input_checkbox_s';
  info: {
    displayName: 'InputCheckbox ';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    options: Attribute.JSON;
  };
}

export interface SharedInput extends Schema.Component {
  collectionName: 'components_shared_inputs';
  info: {
    displayName: 'inputText';
    description: '';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
    theme: Attribute.Enumeration<['light', 'dark']>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPriceCard extends Schema.Component {
  collectionName: 'components_shared_price_cards';
  info: {
    displayName: 'priceCard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    name: Attribute.String;
    price: Attribute.String;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface SharedSelect extends Schema.Component {
  collectionName: 'components_shared_selects';
  info: {
    displayName: 'InputSelect';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    options: Attribute.JSON;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'slider';
    icon: 'picture';
  };
  attributes: {
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface SharedTabs extends Schema.Component {
  collectionName: 'components_shared_tabs';
  info: {
    displayName: 'Tabs';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.cards': BlockCards;
      'block.category': BlockCategory;
      'block.content': BlockContent;
      'block.cta': BlockCta;
      'block.faq': BlockFaq;
      'block.hero': BlockHero;
      'block.main-blog': BlockMainBlog;
      'block.popup': BlockPopup;
      'block.price': BlockPrice;
      'block.seo': BlockSeo;
      'block.services': BlockServices;
      'block.testimonial': BlockTestimonial;
      'shared.accordion': SharedAccordion;
      'shared.card': SharedCard;
      'shared.form-section': SharedFormSection;
      'shared.input-checkbox': SharedInputCheckbox;
      'shared.input': SharedInput;
      'shared.link': SharedLink;
      'shared.meta-social': SharedMetaSocial;
      'shared.price-card': SharedPriceCard;
      'shared.select': SharedSelect;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.tabs': SharedTabs;
    }
  }
}
