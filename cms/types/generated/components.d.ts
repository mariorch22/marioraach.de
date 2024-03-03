import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogBlog extends Schema.Component {
  collectionName: 'components_blog_blogs';
  info: {
    displayName: 'blog';
    description: '';
  };
  attributes: {
    h1: Attribute.String;
    h2: Attribute.String;
    text: Attribute.Text;
    bild: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.blog': BlogBlog;
    }
  }
}
